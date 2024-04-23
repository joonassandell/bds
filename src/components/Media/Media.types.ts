import { type Breakpoint, type PrimitiveDivPropsWithRef } from '../../types';
import {
  type MediaBreakpointProps,
  type MediaContextProviderProps,
  type RenderProp,
} from '@artsy/fresnel/dist/Media';
import { type ReactNode } from 'react';

export interface MediaProps
  extends MediaBreakpointProps<Breakpoint>,
    Omit<PrimitiveDivPropsWithRef, 'children'> {
  children: ReactNode | RenderProp | JSX.Element;
}

export interface MediaProviderProps
  extends MediaContextProviderProps<Breakpoint> {}
