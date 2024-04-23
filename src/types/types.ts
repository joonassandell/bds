import {
  type COLOR_ACCENT,
  type COLOR_ACCENT_ORDER,
  type COLOR_BACKGROUND,
  type COLOR_BORDER,
  type COLOR_OTHER,
  type COLOR_PRIMARY,
  type COLOR_STATE,
  type COLOR_TEXT,
  type HELPER_MARGIN,
  type HELPER_PADDING,
} from '../lib/config';
import { Primitive } from '@radix-ui/react-primitive';
import type * as Radix from '@radix-ui/react-primitive';

/* =======================================
 * Color
 * ======================================= */

export type ColorAccent = (typeof COLOR_ACCENT)[number];
export type ColorBackground = (typeof COLOR_BACKGROUND)[number];
export type ColorBorder = (typeof COLOR_BORDER)[number];
export type ColorOther = (typeof COLOR_OTHER)[number];
export type ColorPrimary = (typeof COLOR_PRIMARY)[number];
export type ColorState = (typeof COLOR_STATE)[number];
export type ColorText = (typeof COLOR_TEXT)[number];
export type Color =
  | ColorAccent
  | ColorBackground
  | ColorBorder
  | ColorOther
  | ColorPrimary
  | ColorState
  | ColorText;
export type ColorAccentOrder = (typeof COLOR_ACCENT_ORDER)[number];

/* =======================================
 * Breakpoint
 * ======================================= */

export type Breakpoint =
  | 'base'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'ml'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl'
  | 'xxxxxxl';

/* =======================================
 * Various CSS Properties
 * ======================================= */

export type Border = 'default' | 'small' | 'large';
export type BorderRadius = 'default' | 'large' | 'pill' | 'full';

/* =======================================
 * Transitions
 * ======================================= */

export type Transition = 'default' | 'medium';

/* =======================================
 * Space
 * ======================================= */

export type Space =
  | '--b-space-6xl'
  | '--b-space-5xl'
  | '--b-space-4xl'
  | '--b-space-3xl'
  | '--b-space-2xl'
  | '--b-space-xl'
  | '--b-space-l'
  | '--b-space-ml'
  | '--b-space-m'
  | '--b-space-ms'
  | '--b-space'
  | '--b-space-xs'
  | '--b-space-2xs'
  | '--b-space-3xs'
  | '--b-space-4xs';

/* =======================================
 * Helpers
 * ======================================= */

/**
 * Helper space
 */
export type HelperSpaceStaticSmall = 1 | 2 | 3 | 4;
export type HelperSpace =
  | 'small'
  | 'base'
  | 'medium'
  | 'large'
  | 'xLarge'
  | '2xLarge'
  | '4xLarge'
  | false
  | 0;
export type HelperSpaceValue =
  | HelperSpace
  | {
      [key in Breakpoint]?: HelperSpace;
    };

/**
 * Helper props
 */
export type HelperMargin = (typeof HELPER_MARGIN)[number];
export type HelperPadding = (typeof HELPER_PADDING)[number];
export type Helper = HelperMargin | HelperPadding;

export type HelperMarginProps = {
  [key in HelperMargin]?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      }
    | HelperSpaceStaticSmall;
};

export type HelperMarginTopProps = {
  ['marginTop']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperMarginRightProps = {
  ['marginRight']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperMarginLeftProps = {
  ['marginLeft']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperMarginBottomProps = {
  ['marginBottom']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperPaddingProps = {
  [key in HelperPadding]?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      }
    | HelperSpaceStaticSmall;
};

export type HelperPaddingTopProps = {
  ['paddingTop']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperPaddingRightProps = {
  ['paddingRight']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperPaddingBottomProps = {
  ['paddingBottom']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export type HelperPaddingLeftProps = {
  ['paddingLeft']?:
    | HelperSpace
    | {
        [key in Breakpoint]?: HelperSpace;
      };
};

export interface Helpers extends HelperMarginProps, HelperPaddingProps {}

/* =======================================
 * Various types
 * ======================================= */

export type Integer = number;

/**
 * Define in which language component is used
 */
export type Language = 'en' | 'fi' | undefined;

/**
 * Define in which environment component is used
 */
export type Environment = 'development' | 'staging' | 'production' | undefined;

/**
 * Primitives etc. from @radix-ui/react-primitive
 */
export { Primitive };
export type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.div
>;
export type PrimitiveLiProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.li
>;
export type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.button
>;
export type PrimitiveLinkProps = Radix.ComponentPropsWithoutRef<
  typeof Primitive.a
>;
export type PrimitiveDivPropsWithRef = Radix.PrimitivePropsWithRef<
  typeof Primitive.div
>;
export type PrimitiveButtonPropsWithRef = Radix.PrimitivePropsWithRef<
  typeof Primitive.button
>;
export type PrimitiveLinkPropsWithRef = Radix.PrimitivePropsWithRef<
  typeof Primitive.a
>;

/* =======================================
 * Tools
 * ======================================= */

/**
 * Optional
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * Required property
 */
export type Required<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

/**
 * At least one key is required
 */
export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
