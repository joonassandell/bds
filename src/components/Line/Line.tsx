import { CHART, COLOR_ACCENT_ORDER } from '../../lib/config';
import { type LineProps, type TooltipExtended } from './';
import { LineSymbol } from './LineSymbol';
import { NivoTooltip } from '../NivoTooltip';
import { ResponsiveLine } from '@nivo/line';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import c from 'clsx';
import React, { type FC, type MutableRefObject, useRef } from 'react';

export const Line: FC<LineProps> = ({
  className,
  data,
  colors,
  points,
  tooltips,
  ...props
}) => {
  const classes = c(className, 'b-Line');
  const colorsWithAdditional = [
    ...(colors ? [...colors] : []),
    ...(data.length === 1 ? ['var(--b-border-mute-900)'] : []),
    ...COLOR_ACCENT_ORDER,
  ];
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { margin, axisBottom, axisLeft, axisRight } = props;
  const hasAxisLeft = axisLeft != null || axisLeft === undefined;
  const hasAxisRight = axisRight;
  const hasAxisBottom = axisBottom != null || axisBottom === undefined;
  const resetAxis = {
    format: () => '',
    tickPadding: 0,
    tickSize: 0,
  };
  const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div className={classes} ref={ref}>
      <ResponsiveLine
        colors={datum => {
          if (datum.color) return datum.color;
          const index = data.findIndex((obj: any) => obj.id === datum.id);
          return colorsWithAdditional[index];
        }}
        curve="monotoneX"
        data={data}
        margin={{
          bottom: margin?.bottom ?? 40,
          left: margin?.left ? margin.left : !hasAxisLeft ? 16 : 48,
          right: margin?.right ? margin.right : !hasAxisRight ? 16 : 48,
          top: margin?.top ?? 16,
        }}
        pointBorderColor={{
          from: 'color',
        }}
        pointBorderWidth={2}
        pointSize={16}
        pointSymbol={props => {
          const { point } = props.datum;
          const { display, color, isSuccess, isActive } = point || {};
          if (display === false) return <></>;
          const baseColor = points?.innerColor?.base;
          const pointColor = isSuccess
            ? 'var(--b-success)'
            : isActive
            ? 'var(--b-primary-highlight)'
            : color;

          return (
            <LineSymbol
              innerPointColor={pointColor}
              {...(baseColor && !pointColor && { innerPointColor: baseColor })}
              {...props}
            />
          );
        }}
        theme={{
          ...(CHART.default.theme as any),
          ...CHART.line.theme,
        }}
        tooltip={({ point }: TooltipExtended) => {
          const { color, data: tooltipData } = point;
          const { tooltip, x, y } = tooltipData || {};
          const displayDefaults = tooltips?.displayDefaults != false;
          const width =
            (tooltipRef.current && tooltipRef.current.offsetWidth / 2 + 24) ||
            0;
          const lineWidth = ref.current?.offsetWidth;
          const isFirstHalf = Math.abs(lineWidth - point.x) > lineWidth / 2;
          if (tooltipData.point?.display === false) return null;

          return (
            <NivoTooltip
              className="b-Line-tooltip"
              ref={tooltipRef}
              style={{
                top: '28px',
                transform: isFirstHalf
                  ? `translate3d(${width}px, 0, 0)`
                  : `translate3d(${-width}px, 0, 0)`,
              }}
            >
              {displayDefaults && (
                <div className="b-NivoTooltip-legend">
                  <div
                    className="b-NivoTooltip-legend-dot"
                    style={{ backgroundColor: `${color}` }}
                  />
                  <div className="b-NivoTooltip-legend-content">
                    {tooltip?.heading && (
                      <Subtitle color="strong" subtitle={tooltip.heading} />
                    )}
                    <Text size="small">
                      <>
                        x: {x} y: {y}
                        <p>{tooltip?.description}</p>
                      </>
                    </Text>
                  </div>
                </div>
              )}
              {tooltip?.children}
            </NivoTooltip>
          );
        }}
        useMesh={true}
        {...props}
        axisBottom={{
          tickPadding: 16,
          tickSize: 0,
          ...axisBottom,
        }}
        axisLeft={{
          tickPadding: 16,
          tickSize: 0,
          ...axisLeft,
        }}
        {...(!hasAxisLeft && { axisLeft: resetAxis })}
        {...(!hasAxisBottom && { axisBottom: resetAxis })}
        {...(hasAxisRight && {
          axisRight: {
            tickPadding: 16,
            tickSize: 0,
            ...axisRight,
          },
        })}
      />
    </div>
  );
};
