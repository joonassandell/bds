import { Digit } from '../../Digit';
import { Line } from '../Line';
import {
  type LineCarbonFootprintProgressProps,
  type LineDataSerie,
  type LineDatum,
} from '../';
import { Text } from '../../Text';
import c from 'clsx';
import React, { type FC, useEffect, useState } from 'react';

const decimals = 2;

export const LineCarbonFootprintProgress: FC<
  LineCarbonFootprintProgressProps
> = ({ className, data, target }) => {
  const [convertData, setConvertData] = useState<LineDataSerie[]>([]);
  const classes = c(className, 'b-LineCarbonFootprintProgress');
  const [extraEndYear, setExtraEndYear] = useState<number | null>(null);
  const [yValues, setYvalues] = useState<LineDatum['y'][] | any>([]);

  useEffect(() => {
    const dataArr = [...data];

    /**
     * Set custom y-axis values
     */
    dataArr.map(el => {
      const yVals = el.data
        .map(el => el.y && (el.y as number).toFixed(decimals))
        .sort((a, b) => (b as number) - (a as number));
      const valueLargest = Math.max(...yVals.map(obj => obj as number));
      const middleYval = (valueLargest / 2).toFixed(decimals);
      const uniqueYvalues = [yVals[0], middleYval, 0].filter(
        (x, i, a) => a.indexOf(x) == i,
      );
      setYvalues(uniqueYvalues);
    });

    const convertedData = dataArr.map(el => {
      const { data: objData } = el;
      const dataAndTargetCombined = [...objData, target ? target : []].flat();
      const yearLatest = Math.max(
        ...dataAndTargetCombined.map(obj => obj?.x as number),
      );
      const objLatest = dataAndTargetCombined.filter(
        obj => obj.x === yearLatest,
      )[0];
      const extraYear = yearLatest + 2;
      setExtraEndYear(extraYear);

      const mainData = objData
        .sort(
          (a: LineDatum, b: LineDatum) => (a?.x as number) - (b.x as number),
        )
        .map((el: LineDatum) => ({
          ...el,
          tooltip: {
            children: (
              <Digit
                number={el.y as number}
                subtitle={{
                  color: 'strong',
                  subtitle: el.subtitle,
                }}
              />
            ),
          },
        }));

      return {
        ...(el as LineDataSerie),
        data: [
          ...mainData,
          ...(target
            ? [
                {
                  tooltip: {
                    children: (
                      <>
                        <Digit
                          marginBottom="small"
                          number={target.y as number}
                          subtitle={{
                            color: 'strong',
                            subtitle: target.subtitle,
                          }}
                        />
                        {target.description && (
                          <Text size="small">
                            <p>{target.description}</p>
                          </Text>
                        )}
                      </>
                    ),
                  },
                  x: target.x,
                  y: target.y,
                },
              ]
            : []),
          {
            point: {
              display: false,
            },
            x: extraYear,
            y: target ? target.y : objLatest.y,
          },
        ],
      };
    });

    setConvertData(convertedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={classes}>
      <Line
        areaOpacity={1}
        axisBottom={{
          format: v => {
            const year = v.getFullYear();
            if (year === extraEndYear) return '';
            return year;
          },
          tickValues: 'every 2 year',
        }}
        axisLeft={null}
        axisRight={{
          tickValues: yValues,
        }}
        crosshairType="bottom-right"
        data={convertData}
        // @ts-ignore
        defs={[
          {
            colors: [
              { color: 'var(--b-primary)', offset: 0, opacity: 0.15 },
              { color: 'var(--b-primary)', offset: 100, opacity: 0.03 },
            ],
            id: 'lineCarbonFootprintGradient',
            type: 'linearGradient',
          },
        ]}
        enableArea={true}
        fill={[{ id: 'lineCarbonFootprintGradient', match: '*' }]}
        gridYValues={yValues}
        tooltips={{
          displayDefaults: false,
        }}
        xScale={{
          format: '%Y',
          precision: 'year',
          type: 'time',
          useUTC: false,
        }}
        yScale={{
          min: 0,
          stacked: false,
          type: 'linear',
        }}
      />
    </div>
  );
};
