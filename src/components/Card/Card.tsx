import { Avatar, type AvatarProps } from '../Avatar';
import { Badge } from '../Badge';
import { type CardImage, type CardProps } from './';
import { Donut } from '../Donut';
import { FigureOverlay } from '../FigureOverlay';
import { Heading } from '../Heading';
import { isObject, isString } from '../../lib/utils';
import { Skeleton } from '../Skeleton';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import c from 'clsx';
import React, {
  type ElementType,
  forwardRef,
  isValidElement,
  type RefObject,
} from 'react';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      avatar = true,
      backgroundColor,
      border,
      className,
      heading,
      headingCapitalize,
      headingSize,
      href,
      imageLayout,
      onClick,
      skeletonLoading,
      style,
      ...props
    },
    forwadedRef,
  ) => {
    const {
      donut,
      badge,
      logo,
      subtitles,
      description,
      image,
      footer,
      ...restProps
    } = props;
    const classes = c(className, 'b-Card b-Card--default', {
      '-border:size:l': border?.size === 'large',
      '-heading:capitalize': headingCapitalize,
    });
    const hasLinkOrButton = href || onClick;
    const ButtonOrLink = href
      ? ('a' as ElementType)
      : ('button' as ElementType);
    const img = image as CardImage;
    const imageCustom = isValidElement(image);

    /**
     * Top components
     */
    const hasAvatar =
      !props.hasOwnProperty('logo') &&
      !props.hasOwnProperty('donut') &&
      avatar != false;
    const topLeftComponents =
      hasAvatar ||
      props.hasOwnProperty('logo') ||
      props.hasOwnProperty('donut');
    const topRightComponents = props.hasOwnProperty('badge');

    /**
     * Footer components
     */
    const hasFooterLeftComponent = !isString(footer?.left);
    const hasFooterRightComponent = !isString(footer?.right);
    const footerLeftComponents = footer?.hasOwnProperty('left');
    const footerRightComponents = footer?.hasOwnProperty('right');

    return (
      <div
        className={classes}
        ref={
          !hasLinkOrButton ? (forwadedRef as RefObject<HTMLDivElement>) : null
        }
        style={{
          ['--b-Card-background-color' as string]: backgroundColor,
          ['--b-Card-border-color' as string]: border?.color,
          ['--b-Card-border-style' as string]: border?.style,
          ['--b-Card-image-aspect-ratio' as string]: imageLayout?.aspectRatio,
          ...style,
        }}
        {...(!hasLinkOrButton && { ...restProps })}
      >
        {hasLinkOrButton && !skeletonLoading && (
          <ButtonOrLink
            className="b-Card-link"
            href={href}
            onClick={onClick}
            ref={forwadedRef}
            {...restProps}
          />
        )}
        {(topLeftComponents || topRightComponents) && (
          <div className="b-Card-top">
            {topLeftComponents && (
              <div className="b-Card-top-left">
                {hasAvatar &&
                  (skeletonLoading ? (
                    <Skeleton variant="circle">
                      <Avatar size="xLarge" />
                    </Skeleton>
                  ) : (
                    <Avatar
                      {...(avatar as AvatarProps)}
                      className="b-Card-name"
                      hover="siblings"
                      meta={false}
                      name={
                        isString(avatar)
                          ? avatar
                          : isObject(avatar) && avatar.name
                          ? avatar.name
                          : isString(heading)
                          ? heading
                          : ''
                      }
                      size="xLarge"
                    />
                  ))}
                {props.hasOwnProperty('donut') &&
                  (skeletonLoading ? (
                    <Skeleton variant="circle">
                      <Donut data={[]} digitUnit="" size="small" />
                    </Skeleton>
                  ) : (
                    donut && (
                      <Donut
                        border={donut.data.length === 0}
                        {...donut}
                        size="small"
                      />
                    )
                  ))}
                {props.hasOwnProperty('logo') &&
                  (skeletonLoading ? (
                    <Skeleton variant="circle">
                      <figure className="b-Card-logo" />
                    </Skeleton>
                  ) : (
                    <figure className="b-Card-logo">
                      <img
                        alt={
                          logo?.alt ??
                          (isString(heading) ? `Logo of ${heading}` : 'Logo')
                        }
                        height={logo?.height}
                        loading="lazy"
                        src={logo?.src}
                        width={logo?.width}
                      />
                    </figure>
                  ))}
              </div>
            )}
            {topRightComponents && (
              <div className="b-Card-top-right">
                {props.hasOwnProperty('badge') && skeletonLoading ? (
                  <Skeleton variant="round" width="var(--b-space-4xl)">
                    <Badge />
                  </Skeleton>
                ) : (
                  badge && (
                    <Badge variant="info" {...badge} className="b-Card-badge">
                      <Text truncate>{badge.children}</Text>
                    </Badge>
                  )
                )}
              </div>
            )}
          </div>
        )}
        <div className="b-Card-inner">
          <header className="b-Card-header">
            <Heading
              className="b-Card-heading"
              marginBottom={0}
              size={headingSize ?? 'h2'}
              tag="h2"
              truncate={3}
            >
              {(skeletonLoading && <Skeleton />) || heading}
            </Heading>
            {props.hasOwnProperty('subtitles') && (
              <div className="b-Card-subtitles">
                {skeletonLoading ? (
                  <Subtitle
                    className="b-Card-subtitle"
                    marginBottom={0}
                    tag="span"
                  >
                    <Skeleton width="50%" />
                  </Subtitle>
                ) : (
                  subtitles?.map((subtitle, i) => (
                    <Subtitle
                      {...subtitle}
                      className="b-Card-subtitle"
                      key={i}
                      marginBottom={0}
                      tag="span"
                    />
                  ))
                )}
              </div>
            )}
          </header>
          {props.hasOwnProperty('description') && (
            <div className="b-Card-content">
              <Text className="b-Card-description" truncate={4}>
                <p>
                  {(skeletonLoading && <Skeleton lines={3} width="90%" />) ||
                    description}
                </p>
              </Text>
            </div>
          )}
        </div>
        {props.hasOwnProperty('image') && (
          <FigureOverlay asChild>
            <figure
              className={c('b-Card-figure', {
                '-layout:fill': imageLayout?.mode === 'fill',
                'b-Card-figure--custom': imageCustom,
              })}
            >
              {/* Skeleton with custom image isn't tested with Next.js */}
              {(skeletonLoading && (
                <Skeleton height="100%" variant="rectangle" width="100%">
                  {!imageCustom && imageLayout?.mode != 'fill' && (
                    <img height={img?.height} width={img?.width} />
                  )}
                </Skeleton>
              )) ||
                (imageCustom && image) ||
                (image && (
                  <img
                    alt={
                      img?.alt ??
                      (isString(heading) ? `Image of ${heading}` : 'Image')
                    }
                    height={img?.height}
                    loading="lazy"
                    src={img?.src}
                    width={img?.width}
                  />
                ))}
            </figure>
          </FigureOverlay>
        )}
        {(footerLeftComponents || footerRightComponents) && (
          <footer className="b-Card-footer">
            {footerLeftComponents && (
              <div className="b-Card-footer-left">
                {!hasFooterLeftComponent && (
                  <Text className="b-Card-footer-text" color="light" truncate>
                    {(skeletonLoading && <Skeleton />) || footer?.left}
                  </Text>
                )}
                {hasFooterLeftComponent &&
                  ((skeletonLoading && <Skeleton>{footer?.left}</Skeleton>) ||
                    footer?.left)}
              </div>
            )}
            {footerRightComponents && (
              <div className="b-Card-footer-right">
                {!hasFooterRightComponent && (
                  <Text className="b-Card-footer-text" color="light" truncate>
                    {!skeletonLoading && footer?.right}
                  </Text>
                )}
                {hasFooterRightComponent && !skeletonLoading && footer?.right}
              </div>
            )}
          </footer>
        )}
      </div>
    );
  },
);
