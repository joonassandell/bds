import { CHART, COLOR_ACCENT_ORDER } from '../../lib/config';
import { Digit } from '../Digit';
import { type DonutProps } from './';
import { isBoolean, isString } from '../../lib/utils';
import { NivoTooltip } from '../NivoTooltip';
import { ResponsivePie } from '@nivo/pie';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import { TooltipWrapper } from '@nivo/tooltip';
import c from 'clsx';
import isEmpty from 'ramda/es/isEmpty';
import React, { type FC, type MutableRefObject, useRef } from 'react';

export const Donut: FC<DonutProps> = ({
  border = true,
  className,
  colors,
  data,
  digit,
  digitAnimation,
  digitSubtitle,
  digitUnit,
  number,
  size,
  tooltipAnchor = 'right',
  unit,
  ...props
}) => {
  const valueUnit = isString(unit) ? unit : `%`;
  const xLarge = size === 'xLarge';
  const medium = size === 'medium' || !size;
  const small = size === 'small';
  const classes = c(className, 'b-Donut', {
    '-border:none': !border,
    '-size:m': medium,
    '-size:s': small,
    '-size:xl': xLarge,
  });
  const colorsWithAdditional = [
    ...(colors ? [...colors] : []),
    ...COLOR_ACCENT_ORDER,
  ];
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div className={classes}>
      <ResponsivePie
        activeOuterRadiusOffset={6}
        colors={datum => {
          if (datum.data.color) return datum.data.color;
          if (colors === false) return 'var(--b-bg-mute-400)';
          const index = data.findIndex(obj => obj.id === datum.id);
          return colorsWithAdditional[index];
        }}
        data={data}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        innerRadius={0.81}
        margin={{
          bottom: 6,
          left: 6,
          right: 6,
          top: 6,
        }}
        padAngle={3}
        theme={{
          ...(CHART.default.theme as any),
          ...CHART.donut.theme,
        }}
        tooltip={({
          datum: {
            data: { tooltip },
            label,
            value,
          },
        }) => {
          if (tooltip === false) return null;
          const bool = isBoolean(tooltip);
          const width = ref.current?.offsetWidth;
          const tooltipMaxWidth =
            !bool && tooltip?.maxWidth ? tooltip?.maxWidth : 240;
          const maxWidth =
            width >= tooltipMaxWidth ? tooltipMaxWidth : undefined;
          const whiteSpace = maxWidth ? 'normal' : undefined;
          const values = !bool ? tooltip?.values : null;

          return (
            <TooltipWrapper anchor={tooltipAnchor} position={[0, 0]}>
              <NivoTooltip
                className="b-Donut-tooltip"
                ref={ref}
                style={{
                  whiteSpace,
                  width: maxWidth,
                }}
              >
                <Subtitle
                  color="strong"
                  marginBottom={false}
                >{`${label}: ${value}${valueUnit}`}</Subtitle>
                {values?.map(tip => (
                  <Text key={tip.label} size="small">
                    {tip.label}: {tip.value} <span>{tip.unit}</span> <br />
                  </Text>
                ))}
              </NivoTooltip>
            </TooltipWrapper>
          );
        }}
        {...(xLarge && {
          activeOuterRadiusOffset: 8,
          innerRadius: 0.92,
          margin: { bottom: 8, left: 8, right: 8, top: 8 },
          padAngle: 1.5,
        })}
        {...(!border && {
          activeOuterRadiusOffset: 3,
        })}
        {...props}
      />
      {!isEmpty(number) && (
        <div className="b-Donut-digit">
          <Digit
            animation={digitAnimation}
            justify="center"
            number={number}
            unit={digitUnit}
            {...(xLarge && {
              scale: 4,
              size: '2xLarge',
              subtitle: {
                marginBottom: 'small',
                subtitle: digitSubtitle,
                subtitleCase: true,
              },
              unitPosition: 'bottom',
              weight: 'strong',
            })}
            {...((medium || small) && {
              decimal: 0,
              size: 'xSmall',
              unitPosition: 'inNumber',
              weight: 'strong',
            })}
            {...digit}
          />
        </div>
      )}
    </div>
  );
};
