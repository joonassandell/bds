import { Line } from '../Line';
import {
  type LineClimateActionProps,
  type LineDataSerie,
  type LineDatum,
  type SliceTooltipExtended,
} from '../';
import { List, ListItem, ListItemHeading, ListItemSeparator } from '../../List';
import { NivoTooltip } from '../../NivoTooltip';
import { Subtitle } from '../../Subtitle';
import { Text } from '../../Text';
import c from 'clsx';
import React, { type FC, Fragment, useEffect, useState } from 'react';
import Thermometer from './thermometer.svg';

export const LineClimateAction: FC<LineClimateActionProps> = ({
  className,
  data,
  targets,
  tooltipExcerpt = '…',
  startingPointText,
}) => {
  const [convertedData, setConvertedData] = useState<LineDataSerie[]>([]);
  const [yearsLength, setYearsLength] = useState<number>(0);
  const [extraStartYear, setExtraStartYear] = useState<number>(0);
  const [allYearsZero, setAllYearsZero] = useState<boolean>(false);
  const classes = c(className, 'b-LineClimateAction', {
    '-data:years:multiple': yearsLength > 5,
  });

  useEffect(() => {
    const dataArr = [...data];
    const uniqueYears = dataArr.map(
      el =>
        el.data.filter((v, i, a) => a.findIndex(t => t?.x === v?.x) === i)
          .length,
    )[0];
    setYearsLength(uniqueYears);

    const convertData = dataArr.map(el => {
      const { data: objData } = el;
      const targetYears = targets?.map(target => target.x);
      const yearsZero = objData.every(obj => obj?.y === 0);
      yearsZero ? setAllYearsZero(true) : setAllYearsZero(false);
      const yearEarliest = Math.min(...objData.map(obj => obj?.x as number));
      const extraYear = yearEarliest - 3;
      setExtraStartYear(extraYear);

      const mainData = objData
        .reduce((acc, curr, i) => {
          const prev = acc[i - 1];

          if (prev) {
            curr.y = (prev.y as number) - 0.05;
          } else {
            curr.y = 0.95;
          }
          return acc;
        }, el.data)
        .map(el => {
          const targetIsLater = targetYears?.some(
            year => year && el.x && year < el.x,
          );
          if (targetIsLater) el.y = 0;
          return el;
        });

      const dataAndTargetsCombined = [
        ...mainData,
        targets
          ? targets.map(target => ({
              ...target,
              y: 0,
            }))
          : [],
      ]
        .flat()
        .sort((a, b) => (a?.x as number) - (b.x as number));

      return {
        ...el,
        data: [
          {
            point: {
              display: false,
            },
            tooltip: {
              description: startingPointText,
            },
            x: extraYear,
            y: 1,
          },
          ...dataAndTargetsCombined,
        ],
      };
    });

    setConvertedData(convertData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={classes}>
      <Line
        areaOpacity={1}
        axisBottom={{
          format: v => {
            const year = v.getFullYear();
            if (year === extraStartYear) return '';
            return year;
          },
          tickPadding: 16,
          tickSize: 0,
          tickValues: 'every 5 year', // 'every 10 year',
        }}
        axisLeft={null}
        data={convertedData}
        // @ts-ignore
        defs={[
          {
            colors: [
              { color: 'var(--b-warning)', offset: 0, opacity: 0.2 },
              { color: 'var(--b-success)', offset: 30, opacity: 0.2 },
              { color: 'var(--b-success)', offset: 100, opacity: 0 },
            ],
            id: 'lineClimateActionGradient',
            type: 'linearGradient',
          },
        ]}
        enableArea={true}
        enableSlices="x"
        fill={[{ id: 'lineClimateActionGradient', match: '*' }]}
        margin={{ bottom: 36, right: 16, top: 24 }}
        sliceTooltip={({ slice }: SliceTooltipExtended) => {
          const { points } = slice;
          const lastTooltip = points[points.length - 1].data.tooltip;
          const hasTooltip = points.some(
            (point: LineDatum) => point.data.tooltip?.description,
          );

          if (hasTooltip) {
            return (
              <NivoTooltip className="b-Line-tooltip">
                {lastTooltip?.heading && (
                  <Subtitle color="strong" subtitle={lastTooltip.heading} />
                )}
                <Text size="small">
                  <List>
                    {points.slice(0, 3).map((point: LineDatum, i) => {
                      if (!point.data.tooltip?.description) return;
                      return (
                        <Fragment key={i}>
                          <ListItem>
                            <ListItemHeading>
                              {point.data.tooltip?.description}
                            </ListItemHeading>
                          </ListItem>
                          {points.slice(0, 3).length - 1 !== i && (
                            <ListItemSeparator color="var(--b-surface-1-border)" />
                          )}
                        </Fragment>
                      );
                    })}
                    {points.length > 3 && (
                      <ListItem key={tooltipExcerpt}>
                        <ListItemHeading>{tooltipExcerpt}</ListItemHeading>
                      </ListItem>
                    )}
                  </List>
                </Text>
              </NivoTooltip>
            );
          } else {
            return <></>;
          }
        }}
        xScale={{
          format: '%Y',
          precision: 'year',
          type: 'time',
          useUTC: false,
        }}
        yScale={
          allYearsZero
            ? {
                max: 1,
                type: 'linear',
              }
            : {
                type: 'point',
              }
        }
        {...(allYearsZero && { gridYValues: [1, 0.5, 0] })}
      />
      <div className="b-LineClimateAction-thermometer">
        <Thermometer />
      </div>
    </div>
  );
};
