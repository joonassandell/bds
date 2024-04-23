import { type AvatarProps } from './';
import {
  getTwoFirstCharsInUppercase,
  isBoolean,
  isNumber,
  isSvg,
} from '../../lib/utils';
import { Icon, type IconProps } from '../Icon';
import { TooltipIfTruncated } from '../Tooltip';
import c from 'clsx';
import React, { type FC } from 'react';

export const Avatar: FC<AvatarProps> = ({
  backgroundColor,
  borderColor,
  className,
  color,
  hover,
  icon,
  image,
  meta = false,
  name,
  nameCapitalize,
  nameTruncate = true,
  size = 'large',
  text,
  textTruncate = true,
  variant,
}) => {
  const classes = c(className, 'b-Avatar', {
    '-hover:parent': hover === 'parent',
    '-hover:siblings': hover === 'siblings',
    '-name:capitalize': nameCapitalize,
    '-size:2xl': size === '2xLarge',
    '-size:l': size === 'large',
    '-size:ml': size === 'mediumLarge',
    '-size:s': size === 'small',
    '-size:xl': size === 'xLarge',
    '-size:xs': size === 'xSmall',
    'b-Avatar--primary': variant === 'primary',
    'b-Avatar--secondary': variant === 'secondary',
  });
  const svg = isSvg(image);
  const hasIcon = icon;
  const hasImage = image || svg;
  const [firstChar, secondChar] = getTwoFirstCharsInUppercase(name);

  return (
    <div
      className={classes}
      style={{
        ['--b-Avatar-bg' as string]: backgroundColor,
        ['--b-Avatar-border' as string]: borderColor,
        ['--b-Avatar-color' as string]: color,
      }}
    >
      <div className="b-Avatar-id">
        {!hasImage && !hasIcon && (
          <div className="b-Avatar-id-circle">
            {firstChar}
            {secondChar}
          </div>
        )}
        {hasIcon && !hasImage && (
          <div className="b-Avatar-id-circle">
            <Icon name={icon} size={iconSize(size)} />
          </div>
        )}
        {hasImage && (
          <figure className="b-Avatar-id-figure">
            {!svg && (
              <img
                alt={name}
                className="b-Avatar-id-figure-image"
                src={image as string}
              />
            )}
            {svg && image}
          </figure>
        )}
      </div>
      {meta && (
        <div className="b-Avatar-meta">
          <TooltipIfTruncated
            tooltipContent={name}
            truncate={
              isNumber(nameTruncate) && nameTruncate > 1 ? 'clamp' : undefined
            }
          >
            <p
              className={c('b-Avatar-name', {
                'b-textTruncate':
                  (isBoolean(nameTruncate) && nameTruncate) ||
                  (isNumber(nameTruncate) && nameTruncate == 1),
                'b-textTruncateClamp':
                  isNumber(nameTruncate) && nameTruncate > 1,
              })}
              style={{
                ['--b-textTruncateClamp' as string]:
                  isNumber(nameTruncate) && nameTruncate > 1
                    ? nameTruncate
                    : null,
              }}
            >
              {name}
            </p>
          </TooltipIfTruncated>
          {text && (
            <TooltipIfTruncated
              tooltipContent={text}
              truncate={
                isNumber(textTruncate) && textTruncate > 1 ? 'clamp' : undefined
              }
            >
              <p
                className={c('b-Avatar-text', {
                  'b-textTruncate':
                    (isBoolean(textTruncate) && textTruncate) ||
                    (isNumber(textTruncate) && textTruncate == 1),
                  'b-textTruncateClamp':
                    isNumber(textTruncate) && textTruncate > 1,
                })}
                style={{
                  ['--b-textTruncateClamp' as string]:
                    isNumber(textTruncate) && textTruncate > 1
                      ? textTruncate
                      : null,
                }}
              >
                {text}
              </p>
            </TooltipIfTruncated>
          )}
        </div>
      )}
    </div>
  );
};

const iconSize = (size: AvatarProps['size']): IconProps['size'] => {
  if (size === '2xLarge') return 'medium';
  if (size === 'xLarge') return 'small';
  if (size === 'large') return 'xSmall';
  return 'xxSmall';
};
