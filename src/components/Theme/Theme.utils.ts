import { type ThemeColorMode } from './';

/**
 * Make <picture> <source> elements with media="(prefers-color-scheme:*)"
 * respect custom theme preference overrides. Otherwise the `media` preference
 * will only respond to the OS-level setting.
 */
export const updateSourceMedia = (themeColorMode: ThemeColorMode): void => {
  const pictures = document.querySelectorAll('picture');

  pictures.forEach(picture => {
    const sources: NodeListOf<HTMLSourceElement> = picture.querySelectorAll(`
      source[media*="prefers-color-scheme"],
      source[data-media*="prefers-color-scheme"]
    `);

    sources.forEach(source => {
      // Preserve the source `media` as a data-attribute to be able to switch
      // between preferences
      if (source?.media.includes('prefers-color-scheme')) {
        source.dataset.media = source.media;
      }

      // If the source element `media` target is the `preference`,
      // override it to 'all' to show or set it to 'none' to hide
      if (source?.dataset?.media?.includes(themeColorMode)) {
        source.media = 'all';
      } else if (source) {
        source.media = 'none';
      }
    });
  });
};
