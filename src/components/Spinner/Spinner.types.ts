export interface SpinnerProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Size
   *
   * @defaultValue medium
   */
  size?: 'medium' | 'large' | 'small' | 'xSmall';

  /**
   * Variant
   *
   * @defaultValue primary
   * @param primary Primary color
   * @param primaryForeground Apply if used on top of a primary background color
   * @param success Success color
   * @param warning Warning color
   * @param error Error color
   */
  variant?: 'primary' | 'primaryForeground' | 'success' | 'warning' | 'error';
}
