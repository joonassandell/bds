import { type Breakpoint } from '../../types';
import { type GridColSpan, type GridColStart } from './';
import { isNumber, isObject, objectMap } from '../../lib/utils';

/**
 * Make some mapper function to all of these. DRY!.
 */
export const getGridColSpanClass = (colSpan?: GridColSpan) => {
  if (!colSpan) return;

  const createClass = (colSpan: GridColSpan, breakpoint?: Breakpoint) => {
    let bp = breakpoint ? `@${breakpoint}` : '';
    bp = breakpoint === 'base' ? '' : bp;
    return [`b-Grid-col:${colSpan}${bp}`, true];
  };

  if (isNumber(colSpan)) {
    return {
      [`${createClass(colSpan)[0]}`]: true,
    };
  }

  if (isObject(colSpan)) {
    return objectMap(colSpan, ([key, val]) =>
      createClass(val as GridColSpan, key as Breakpoint),
    );
  }
};

export const getGridColStartClass = (colStart?: GridColStart) => {
  if (!colStart) return;

  const createClass = (colStart: GridColStart, breakpoint?: Breakpoint) => {
    let bp = breakpoint ? `@${breakpoint}` : '';
    bp = breakpoint === 'base' ? '' : bp;
    return [`-start:${colStart}${bp}`, true];
  };

  if (isNumber(colStart)) {
    return {
      [`${createClass(colStart)[0]}`]: true,
    };
  }

  if (isObject(colStart)) {
    return objectMap(colStart, ([key, val]) =>
      createClass(val as GridColStart, key as Breakpoint),
    );
  }
};
