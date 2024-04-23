import {
  type ColorAccent,
  type ColorBackground,
  type ColorState,
} from '../../types';
import {
  type Datum,
  type LineProps as NivoLineProps,
  type Point,
  type PointTooltipProps,
  type Serie,
  type SliceTooltipProps,
} from '@nivo/line';
import { type ReactNode } from 'react';
import type * as CSS from 'csstype';

type LineTooltipProps = {
  children?: ReactNode;
  description?: string;
  heading?: string;
};

type LineColor =
  | ColorAccent
  | ColorBackground
  | ColorState
  | CSS.Property.Color;

export interface LineDatum extends Datum {
  point?: {
    color?: LineColor;
    display?: boolean;
    isActive?: boolean;
    isSuccess?: boolean;
  };
  tooltip?: LineTooltipProps;
}

export interface LineDataSerie extends Serie {
  data: Datum[] & LineDatum[];
}

interface LineComponentProps {
  className?: string;

  /**
   * Add custom colors which follow the data order.
   */
  colors?: LineColor[] | false;

  /**
   * Add data objects with id and x/y values to data array
   */
  data: LineDataSerie[];

  /**
   * Global point settings
   */
  points?: {
    innerColor?: {
      base?: string;
    };
  };

  /**
   * Global tooltip settings
   */
  tooltips?: {
    displayDefaults?: boolean;
  };
}

export type LineProps = NivoLineProps & LineComponentProps;

interface PointExtended extends Point {
  data: Point['data'] & LineDatum;
}

export type TooltipExtended = PointTooltipProps & {
  point: PointExtended;
};

export type SliceTooltipExtended = SliceTooltipProps & {
  slice: {
    points: PointExtended[];
  };
};

export interface LineClimateActionProps {
  className?: LineComponentProps['className'];

  /**
   * Apply progress data array with single object only. You need to provide
   * logic for the achieved actions (`point.isSuccess`) yourself.
   */
  data: LineDataSerie[];

  /**
   * Starting point text to clarify the y-axis
   */
  startingPointText?: string;

  /**
   * Apply target years.
   */
  targets?: LineDatum[];

  /**
   * Excerpt text which is visible if there is more than 3 description items
   * in the tooltip list.
   */
  tooltipExcerpt?: string;
}

export interface LineCarbonFootprintProgressProps {
  className?: LineComponentProps['className'];

  /**
   * Apply progress data array with single object only.
   */
  data: LineDataSerie[];

  /**
   * Apply target year.
   */
  target?: LineDatum & {
    description?: string;
    subtitle?: string;
  };
}

export interface LineSymbolProps {
  borderColor: string;
  borderWidth: number | string;
  color: string;
  innerPointColor: string;
  size: number;
}
