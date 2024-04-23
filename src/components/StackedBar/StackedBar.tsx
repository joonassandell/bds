import { type AxisTickProps } from '@nivo/axes';
import { type BarDatum, type BarItemProps, ResponsiveBar } from '@nivo/bar';
import { CHART, COLOR_ACCENT_ORDER } from '../../lib/config';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { Digit } from '../Digit';
import { isNil } from 'ramda';
import { isObject, toNumber } from '../../lib/utils';
import { type StackedBarProps } from './';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import c from 'clsx';
import React, { type FC, type PropsWithChildren, useMemo, useRef } from 'react';

export const StackedBar = <T extends BarDatum>({
  animate = false,
  className,
  colors = [],
  data,
  descriptions,
  height,
  keys,
  labels,
  labelSkipWidth = 8,
  margin,
  ticks,
  tooltip,
  unit,
  zeroValue,
  variant = 'default',
  ...props
}: StackedBarProps<T>) => {
  const classes = c(className, 'b-StackedBar', {
    'has-height': height,
  });
  const colorsWithAdditional = [...colors, ...COLOR_ACCENT_ORDER];
  const colorsWithoutObjects = colorsWithAdditional.filter(
    item => !isObject(item),
  );
  const resetAxis = {
    format: () => '',
    tickPadding: 0,
    tickSize: 0,
  };

  const portalRef = useRef<HTMLDivElement>(null);

  const indices = useMemo(() => {
    const isNegative = (dataKey: string) => +data[dataKey] < 0;
    const isPositive = (dataKey: string) => +data[dataKey] > 0;
    const dataKeys = keys.filter(key => !isNil(data[key])); // Remove keys that have null/undefined data

    // If there is no tick, apply the rounded corner
    if (ticks !== 'zeroOnly') {
      const isAllPositive = !dataKeys.some(isNegative);
      const isAllNegative = !dataKeys.some(isPositive);
      return {
        leftIndex: isAllPositive ? 0 : dataKeys.findLastIndex(isNegative),
        rightIndex: isAllNegative ? 0 : dataKeys.findLastIndex(isPositive),
      };
    }
    // If there is zero tick, use margin instead (left: 32 for all positive, and right: 32 for all negative)
    return {
      leftIndex: dataKeys.findLastIndex(isNegative),
      rightIndex: dataKeys.findLastIndex(isPositive),
    };
  }, [data, keys, ticks]);

  const CustomBarComponent: FC<BarItemProps<BarDatum>> = ({
    bar: { data, x, y, width, height, color, index },
    shouldRenderLabel,
  }) => {
    const label = labels && data.id in labels ? labels[data.id] : data.id;
    const gClasses = c('b-StackedBar-bar', {
      '-first': index === indices.leftIndex,
      '-last': index === indices.rightIndex,
    });

    const getLabelColor = () => {
      const colorObj = colors.find((obj: any) => obj[data.id]);
      if (isObject(colorObj)) {
        const color: any = colorObj[data.id as number];
        return color.label ?? 'var(--b-text-static-500)';
      }
      return 'var(--b-text-static-500)';
    };

    const PrimaryTooltip: FC<PropsWithChildren> = () => (
      <>
        <Digit
          animation={false}
          number={data.formattedValue}
          subtitle={{
            color: 'strong',
            subtitle: label,
          }}
          unit={unit}
        />
        {descriptions && descriptions[data.id] && (
          <Text marginTop="small" size="small">
            <p>{descriptions[data.id]}</p>
          </Text>
        )}
      </>
    );

    const DefaultTooltip: FC<PropsWithChildren> = () => (
      <div className="b-NivoTooltip-legend">
        <div
          className="b-NivoTooltip-legend-dot"
          style={{ backgroundColor: `${color}` }}
        />
        <div className="b-NivoTooltip-legend-content">
          <Subtitle color="strong" subtitle={label} />
          <Text color="light" size="small">
            {data.formattedValue}
            <Text color="light" size="small" tag="span">
              {unit}
            </Text>
          </Text>
        </div>
      </div>
    );

    return (
      <ConditionalWrapper
        condition={variant === 'default'}
        wrapper={children => (
          <Tooltip
            container={portalRef.current}
            content={
              tooltip === 'primary' ? <PrimaryTooltip /> : <DefaultTooltip />
            }
          >
            {children}
          </Tooltip>
        )}
      >
        <g className={gClasses} transform={`translate(${x},${y})`}>
          <rect
            fill={color}
            height={height}
            stroke={color}
            strokeWidth="0"
            width={width}
          />
          {variant === 'default' && shouldRenderLabel && (
            <text
              dominantBaseline="central"
              fillOpacity="1"
              style={{
                fill: getLabelColor(),
                fontFamily: 'inherit',
                fontSize: 'inherit',
                pointerEvents: 'none',
              }}
              textAnchor="middle"
              x={width / 2}
              y={height / 2}
            >
              {data.formattedValue}
            </text>
          )}
        </g>
      </ConditionalWrapper>
    );
  };

  return (
    <div
      className={classes}
      ref={portalRef}
      style={{
        ['--b-StackedBar-height' as string]: height,
      }}
    >
      <ResponsiveBar
        animate={animate}
        axisBottom={
          ticks === 'zeroOnly'
            ? {
                renderTick: tickProps => (
                  <ZeroTickOnly
                    unit={unit}
                    zeroValue={zeroValue}
                    {...tickProps}
                  />
                ),
                tickPadding: 4,
                tickSize: 10,
                tickValues: 1,
              }
            : resetAxis
        }
        axisLeft={resetAxis}
        axisRight={resetAxis}
        axisTop={resetAxis}
        barComponent={CustomBarComponent}
        colors={datum => {
          const colorObj = colors.find((obj: any) => obj[datum.id]);
          if (isObject(colorObj)) {
            const color: any = colorObj[datum.id as number];
            return color.color ?? color;
          }
          const index = keys.findIndex(key => key === datum.id);
          return colorsWithoutObjects[index];
        }}
        data={[data]}
        enableGridY={false}
        indexBy=""
        indexScale={{ round: true, type: 'band' }}
        keys={keys}
        labelSkipWidth={labelSkipWidth}
        layout="horizontal"
        margin={margin && { ...margin }}
        padding={0}
        theme={{
          ...(CHART.default.theme as any),
          ...CHART.bar.theme,
        }}
        {...props}
      />
    </div>
  );
};

/**
 * This is a copy paste from the base tick component from @nivo/bar. This removes
 * the extra <line /> which is be added if we used the following code.
 *
 * axisBottom={{
 *   tickValues: 1,
 *   format: (v: number) => {
 *     if (v === 0) return `0.00 ${unit}`;
 *     return '';
 *   },
 * }}
 */
const ZeroTickOnly = (
  tick: AxisTickProps<string> & {
    unit?: string;
    zeroValue?: string;
  },
) => {
  if (toNumber(tick.value) != 0) return <></>;

  return (
    <g transform={`translate(${tick.x}, ${tick.y})`}>
      <line x1="0" x2={tick.lineX} y1="0" y2={tick.lineY} />
      <text
        dominantBaseline="text-before-edge"
        style={{
          fill: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
        textAnchor="middle"
        transform={`translate(${tick.textX}, ${tick.textY}) rotate(${tick.rotate})`}
      >
        {tick.zeroValue ? tick.zeroValue : tick.value} {tick.unit}
      </text>
    </g>
  );
};
