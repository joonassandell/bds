import { Alert, AlertContent, AlertIcon, AlertText } from '../Alert';
import { Beacon } from '../Beacon';
import {
  components,
  type DropdownIndicatorProps,
  type GroupBase,
  type OptionProps,
  default as ReactSelect,
  type ValueContainerProps,
} from 'react-select';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { default as CreatableSelect } from 'react-select/creatable';
import { createRoot } from 'react-dom/client';
import { DURATION } from '../../lib/config';
import { getCssSpaceHelper, getMilliSeconds } from '../../lib/utils';
import { Icon } from '../Icon';
import { type SelectOptions, type SelectProps } from './';
import { Tooltip } from '../Tooltip';
import c from 'clsx';
import React, {
  type FC,
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * 1. Open issue which causes jumping: https://github.com/JedWatson/react-select/issues/4640
 */
export const Select = forwardRef<any, SelectProps>(
  (
    {
      animate = true,
      beacon,
      beaconProps,
      className,
      components,
      creatable = false,
      disabled,
      enableMenu = true,
      error,
      formatCreateLabel,
      HelpButtonWrapper = Fragment,
      helpOnClick,
      hint,
      icon = 'select',
      id,
      label,
      labelSuffix,
      loading,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      multi,
      name,
      noOptionsMessage = () => 'No options…',
      onBlur,
      onCreateOption,
      onInputChange,
      onMenuClose,
      onMenuOpen,
      open,
      placeholder = 'Select',
      placeholderColor,
      placeholderIcon,
      tooltip = false,
      variant,
      warning,
      ...props
    },
    forwardedRef,
  ) => {
    const isWarning = !error && warning;
    const hasLabel = label || helpOnClick;
    const classes = c(className, 'b-Select', {
      '-placeholder:color:strong': placeholderColor === 'strong',
      'b-Select--outline': variant === 'outline',
      'is-disabled': disabled,
      'is-error': error,
      'is-warning': isWarning,
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginLeft', marginLeft),
      ...getCssSpaceHelper('marginRight', marginRight),
      ...getCssSpaceHelper('marginTop', marginTop),
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuCloseDelayed, setMenuCloseDelayed] = useState(false);
    const Component = creatable ? CreatableSelect : ReactSelect;

    useEffect(() => {
      if (!animate) return;
      if (open) setMenuOpen(true);
      if (open === false) setMenuOpen(false);
    }, [open, animate]);

    useEffect(() => {
      if (!animate) return;
      let timer: number;
      if (menuCloseDelayed) {
        timer = window.setTimeout(() => {
          setMenuOpen(false);
          setMenuCloseDelayed(false);
        }, getMilliSeconds(DURATION));
      }
      return () => {
        timer && clearTimeout(timer);
      };
    }, [menuCloseDelayed, animate]);

    /**
     * Re-create the b-Select-select__value-container div using components prop is
     * troublesome. so go with this solution instead. Not the best but a
     * working one.
     */
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      let containerDiv: HTMLDivElement | null = null;
      let rootDiv: any = null;

      const mountRoot = () => {
        containerDiv = document.createElement('div');
        containerDiv.className = 'b-Select__placeholder-icon';
        // Using ref since there could be many Select used in the dom.
        const valueContainers = findChildrenWithClassName(
          // @ts-ignore there should be ref.current since we check before running this function
          containerRef.current.children,
          'b-Select__value-container',
        );

        if (valueContainers.length === 1) {
          const valueContainer = valueContainers[0];
          valueContainer.insertBefore(containerDiv, valueContainer.firstChild);
          // we can't insertBefore a React component, so we need to use ReactDOM.render
          // to add the icon inside the new div.
          rootDiv = createRoot(containerDiv);
          rootDiv.render(<Icon name={placeholderIcon} size="xSmall" />);
        }
      };

      const unmountRoot = () => {
        if (rootDiv) {
          rootDiv.unmount();
          rootDiv = null;
        }
        if (containerDiv) {
          containerDiv.remove();
          containerDiv = null;
        }
      };

      if (placeholderIcon && containerRef.current) mountRoot();

      // Remove the new element on clean up so we don't accidentally create
      // a lot of stuff as well when removing has-icon class
      return () => {
        // Unmounting will occur in the next animation frame, ensuring it
        // happens outside of the current render cycle
        requestAnimationFrame(unmountRoot);
      };
    }, [disabled, placeholderIcon]);

    return (
      <div className={classes} ref={containerRef}>
        {hasLabel && (
          <div className="b-Select-heading">
            {label && (
              <div className="b-Select-label">
                <label className="b-Select-label-label" htmlFor={id}>
                  {label}
                </label>
                {labelSuffix && (
                  <span className="b-Select-label-suffix"> {labelSuffix}</span>
                )}
                {beacon && (
                  <span className="b-Select-label-beacon">
                    <Beacon variant={beacon} {...beaconProps} />
                  </span>
                )}
              </div>
            )}
            {helpOnClick && (
              <HelpButtonWrapper>
                <button
                  className="b-Select-help"
                  onClick={helpOnClick}
                  type="button"
                >
                  <Icon name="help" size="xSmall" />
                </button>
              </HelpButtonWrapper>
            )}
          </div>
        )}
        <Component
          captureMenuScroll={false} // [1.]
          className="b-Select-container"
          classNamePrefix="b-Select"
          classNames={{
            groupHeading: () => 'b-Select-groupHeading',
            menu: () => {
              if (animate) {
                if (menuCloseDelayed) {
                  return 'b-Select-menu is-animate is-fadeOut';
                }
                return 'b-Select-menu is-animate';
              }

              return 'b-Select-menu';
            },
            menuList: () => 'b-scrollbar',
            option: () => 'b-Select-option',
          }}
          components={
            components || {
              DropdownIndicator: ({ ...props }) =>
                DropdownIndicator({ icon, ...props }),
              IndicatorSeparator: () => null,
              Option: props => <Option {...props} />,
              ...(tooltip && { ValueContainer: ValueContainerWithTooltip }),
            }
          }
          formatCreateLabel={formatCreateLabel}
          inputId={id}
          isDisabled={disabled}
          isLoading={loading}
          isMulti={multi}
          maxMenuHeight={320}
          menuIsOpen={enableMenu ? (animate ? menuOpen : open) : false}
          name={name ?? id}
          noOptionsMessage={noOptionsMessage}
          onBlur={onBlur}
          onCreateOption={onCreateOption}
          onInputChange={onInputChange}
          onMenuClose={() => {
            onMenuClose && onMenuClose();
            enableMenu && animate && setMenuCloseDelayed(true);
          }}
          onMenuOpen={() => {
            onMenuOpen && onMenuOpen();
            enableMenu && animate && setMenuOpen(true);
          }}
          placeholder={placeholder}
          {...props}
          ref={forwardedRef}
        />
        {error && (
          <Alert
            className="b-Select-error"
            marginTop="base"
            size="small"
            variant="error"
          >
            <AlertIcon />
            <AlertContent>
              <AlertText>{error}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {isWarning && (
          <Alert
            className="b-Select-warning"
            marginTop="base"
            size="small"
            variant="warning"
          >
            <AlertIcon />
            <AlertContent>
              <AlertText>{warning}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {hint && <div className="b-Select-hint">{hint}</div>}
      </div>
    );
  },
);

export const DropdownIndicator: FC<
  Pick<SelectProps, 'icon'> & DropdownIndicatorProps<any, boolean>
> = ({ icon, ...props }) => (
  <div
    className="b-Select__indicator Select__dropdown-indicator"
    {...props.innerProps}
  >
    <Icon name={icon} size="small" />
  </div>
);

const findChildrenWithClassName = (
  children: HTMLCollection,
  className: string,
): Element[] => {
  let result: Element[] = [];

  Array.from(children).forEach(child => {
    if (child instanceof HTMLElement && child.classList.contains(className)) {
      result.push(child);
    }

    if (child.children) {
      result = result.concat(
        findChildrenWithClassName(child.children, className),
      );
    }
  });

  return result;
};

const Option = (
  props: OptionProps<SelectOptions, boolean, GroupBase<SelectOptions>>,
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement) => {
    if (node) ref.current = node;
  }, []);

  useEffect(() => {
    props.isSelected &&
      ref.current?.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      });
  }, [props.isSelected]);

  return <components.Option {...props} innerRef={setRef} />;
};

// Custom ValueContainer to display Tooltip for the selected value if it's truncated
export const ValueContainerWithTooltip = ({
  children,
  ...props
}: ValueContainerProps<SelectOptions>) => {
  const currentOption = props.getValue()[0]?.label;
  const classes = c('b-Select__value-container', {
    'b-Select__value-container--has-value': props.hasValue,
    'b-Select__value-container--is-multi': props.selectProps.isMulti,
  });
  const valueContainerRef = useRef<HTMLDivElement | null>(null);
  const isTruncatedRef = useRef({ isTruncated: false });

  useEffect(() => {
    if (valueContainerRef.current) {
      const element = valueContainerRef.current;
      const optionLabel = element.querySelector('.b-Select__single-value');

      if (optionLabel) {
        const isTruncated = optionLabel.scrollWidth > optionLabel.clientWidth;
        isTruncatedRef.current.isTruncated = isTruncated;
      }
    }
  });

  return (
    <ConditionalWrapper
      condition={!!currentOption}
      wrapper={innerChildren => (
        <Tooltip
          container={valueContainerRef.current}
          content={currentOption}
          delayDuration={isTruncatedRef.current.isTruncated ? 0 : 10000} // There is a bug that causes the placeholder icon to disappear when new option is selected, so instead of conditional rendering based on isTruncated, render it always and set the delay to a long time.
        >
          {innerChildren}
        </Tooltip>
      )}
    >
      <div className={classes} ref={valueContainerRef}>
        {children}
      </div>
    </ConditionalWrapper>
  );
};
