import { BREAKPOINT } from '../../lib/config';
import { createMedia } from '@artsy/fresnel';

export const MediaQuery = createMedia({
  breakpoints: BREAKPOINT,
});
export const mediaStyle = MediaQuery.createMediaStyle();
export const { MediaContextProvider } = MediaQuery;
