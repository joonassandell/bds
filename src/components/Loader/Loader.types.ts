export interface LoaderProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Apply the wanted loader
   */
  name?: 'default' | 'product' | 'producer';

  /**
   * Set to `true` to animate the Loader out from the React tree
   */
  unmount?: boolean;

  /**
   * Delay the unmount animation
   */
  unmountDelay?: number;

  /**
   * Variant
   */
  variant?: 'default' | 'fullscreen';
}
