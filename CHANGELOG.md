# Changelog

# Version 0.5.2

This major release focuses mainly on converting all SCSS variables to CSS custom properties and applying new surface colors. It also includes major font size and UI scaling related deletions and changes. Loads of API changes in components. This version starts the conversion of naming conventions in props, modifiers, sizing modifiers and CSS custom properties etc. Everything documented below, read with care, please.

## Token changes

Includes the conversion of SCSS variables to CSS custom properties.

| Old variable                               | New variable                             |
| :----------------------------------------- | :--------------------------------------- |
| $space-xxxl                                | var(--b-space-6xl)                       |
| $space-xxl                                 | var(--b-space-4xl)                       |
| $space-xl                                  | var(--b-space-2xl)                       |
| $space-l                                   | var(--b-space-xl)                        |
| $space-ml                                  | var(--b-space-l)                         |
| $space-m                                   | var(--b-space-m)                         |
| $space-sm                                  | var(--b-space-ms)                        |
| $space-s                                   | var(--b-space-s)                         |
| $space-xs                                  | var(--b-space-xs)                        |
| $space-xxs                                 | var(--b-space-2xs)                       |
| $space-xxxs                                | var(--b-space-3xs) OR var(--b-space-2xs) |
| $space                                     | var(--b-space)                           |
| $font-familySans                           | var(--b-font-family-sans)                |
| $font-familyMono                           | var(--b-font-family-mono)                |
| $font-family                               | var(--b-font-family)                     |
| $font-featureSettings                      | var(--b-font-feature-settings)           |
| $root-minWidth                             | var(--b-root-min-width)                  |
| $ease-inOut                                | var(--b-ease-in-out)                     |
| $trans-duration                            | var(--b-trans-duration)                  |
| $trans-duration-s                          | var(--b-trans-duration-s)                |
| $trans-duration-m                          | var(--b-trans-duration-m)                |
| $trans-duration-l                          | var(--b-trans-duration-l)                |
| $trans-duration-xl                         | var(--b-trans-duration-xl)               |
| $zIndex-1000                               | var(--b-z-index-1000)                    |
| $zIndex-900                                | var(--b-z-index-900)                     |
| $zIndex-800                                | var(--b-z-index-800)                     |
| $zIndex-700                                | var(--b-z-index-700)                     |
| $zIndex-600                                | var(--b-z-index-600)                     |
| $zIndex-500                                | var(--b-z-index-500)                     |
| $border-radius-l                           | var(--b-border-radius-l)                 |
| $border-radius                             | var(--b-border-radius)                   |
| $border-radiusPill                         | var(--b-border-radius-pill)              |
| $border-radiusFull                         | var(--b-border-radius-full)              |
| $border-width-s                            | var(--b-border-width-s)                  |
| $border-width                              | var(--b-border-width)                    |
| var(--b-fontWeight)                        | var(--b-font-weight)                     |
| var(--b-fontWeight-medium)                 | var(--b-font-weight-medium)              |
| var(--b-fontWeight-strong)                 | var(--b-font-weight-strong)              |
| var(--b-fontWeight-700)                    | var(--b-font-weight-700)                 |
| var(--b-fontWeight-500)                    | var(--b-font-weight-500)                 |
| var(--b-fontWeight-400)                    | var(--b-font-weight-400)                 |
| var(--b-fontWeight-100)                    | var(--b-font-weight-100)                 |
| var(--b-fontWeight-heading)                | var(--b-font-weight-heading)             |
| var(--b-browser-removedBodyScrollBarWidth) | var(--removed-body-scroll-bar-size)      |
| var(--b-scrollbar-minLength)               | var(--b-scrollbar-min-length)            |
| var(--b-primary-text)                      | var(--b-primary-highlight)               |
| var(--b-scrollbar-color)                   | var(--b-scrollbar-thumb)                 |
| var(--b-scrollbar-color-hover)             | var(--b-scrollbar-thumb-hover)           |
| var(--b-scrollbar-track-color)             | var(--b-scrollbar-track)                 |
| var(--b-layer-0)                           | var(--b-surface-0)                       |
| var(--b-layer-0-border)                    | var(--b-surface-0-border)                |
| var(--b-layer-1)                           | var(--b-surface-1)                       |
| var(--b-layer-1-border)                    | var(--b-surface-1-border)                |
| var(--b-layer-2)                           | var(--b-surface-2)                       |
| var(--b-layer-2-border)                    | var(--b-surface-2-border)                |
| var(--b-layer-3)                           | var(--b-surface-3)                       |
| var(--b-layer-3-border)                    | var(--b-surface-3-border)                |

Deleted tokens: `$font-familySerif`, `$font-familyAlt`, `$root-fontScale`, `--b-scrollbar-color-active`, `--b-scrollbar-size`, `--b-scrollbar-min-length`, `--b-scrollbar-ff-width`, `--b-scrollbar-track-color`, `--b-shadow-hover`

New tokens: Multiple `--b-surface-x` tokens, multiple `--b-figure-overlay-x` tokens, `--b-font-feature-settings-numeric`, `--b-root-user-select`

All components have been converted to use surface tokens. **Note that for many of the components (Input, Textarea, Button, Grid, Wrap etc.) the naming convention has changed to be similar like above (e.g. `var(--b-Input-textColor)` -> `var(--b-Input-color)`) and some components tokens have been simplified. See new custom properties from each component's scss file.**

## Helper (margin/padding) property value changes

Multiple components use the `marginBottom`, `margin`, `paddingLeft` etc. props to apply spacings. **Padding and margin helpers don't automatically apply all of the spacing conversions and instead apply the new sizing values.** Largest values also contain naming convention changes. In some cases these new spacings might not work properly like they used to. To convert these, see the follow table:

| Old value             | New value |
| :-------------------- | :-------- |
| mediumLarge (Deleted) | large     |
| large                 | xLarge    |
| xLarge                | 2xLarge   |
| xxLarge               | 4xLarge   |

## Component changes

- New component: `<Link />` which replaces the old style of `<Button modifier="plain">`
- New component: `<Spinner />` which is used by default in Button and Loader
- New component: `<Skeleton />` to display a placeholder preview of content before the data gets loaded. Built-in by to Card.
- Deprecated components: `<CardPrimary />`
- Removed components: `<Dropdown />`, use `<Menu />` instead
- Alert:
  - Remove :has polyfills, [Firefox supports :has now](https://caniuse.com/?search=%3Ahas) 🙌
  - Convert to use @container queries if the `<AlertButton />` is used
  - AlertButton: Allow changing the variant if needed. Fix private props accidentally passing as attributes.
  - Simplify children mutations
  - `animate` prop is now boolean
  - `modifier` prop changed to `variant`. Default variant is now `neutral`.
  - Add new variant based icons
- Aside:
  - `placement` prop changed to `align`
  - `closePlacement` prop changed to `closeAlign`
  - Add new design changes such as spacings etc.
  - Remove `--right` (?) override of StackedNav beacon
  - Remove margin override for `<Separator />`. Margin should be handled individually by the surrounding elements instead.
  - Use :has with Avatar
  - Add padding bottom to `<AsideMain />` to that there's some space when scrolling
- AuthLayout:
  - Fix mobile scrolling issues
- Avatar:
  - Added couple of new sizes and refactored sizes:
    - `<Avatar size="large">` -> `<Avatar size="2xLarge" />`
    - `<Avatar size="medium">` -> `<Avatar size="xLarge" />`
    - `<Avatar size="small">` -> `<Avatar size="large" />`
    - `<Avatar size="xSmall">` -> `<Avatar size="mediumLarge" />`
  - Avatar accepts now only one line of text (`text` prop) underneath the name which can be email; removed `subscription` and `email` prop
  - Change single line truncation work without the clamp, as it truncates better single lines
  - `meta` props is now false by default. If you need to display name or text you need to set `meta` to `true`
  - `modifier` prop changed to `variant`
- Badge:
  - `modifier` prop changed to `variant`
  - `text` prop removed, use `children` instead
  - Badges removed, use `<Flex alignItems="center" gap="xSmall"> ... </Flex>` instead, see story
  - Default truncating removed, use `<Text truncate />` instead, see story
  - `beacon` prop removed, use `<Beacon />` as children instead, see story
- Beacon:
  - `modifier` prop changed to `variant`
  - Old `white` modifier prop is now `primaryForeground` variant
  - Add highlight variant
- Breadcrumb: `mode` prop value `presentation` -> `decorative`
- Button:
  - Add new design changes such as icon sizes and surface color tokens etc. Isolated default button styles to proper variants instead to prevent unnecessary style overriding
  - Allow disabling truncating. Add bottom/top paddings in case truncating is disabled.
  - Simplify margin helpers
  - Convert plain modifier to have padding etc. and remove state variants. If you need the plain text like button/link, use the new `<Link />` component instead.
  - Allow overriding icon size in certain cases with `iconSize` prop
  - Allow overriding color in certain cases with `color` prop
  - Button really needs to be refactored: make it composable, better loading, isolate justify="block" as IconButton etc.
  - Remove `hover` property
  - Fix programmatic focus (when using mouse) when Button is used as "Trigger"
  - Remove variants: `errorHover`, `warningHover` and `successHover`
  - Use Spinner and remove the old loading styles
  - Keep disabled opacity even if loading
  - Add `loadingText` to be used during loading
  - `modifier` prop removed, values are now located in `variant`
  - Removed `outline` property, use `<Button variant="secondary" />` for outlined/transparent button
  - Add slight :active interaction
  - Removed all forwarded button tokens, if they're needed inspect the button to match spacings etc.
  - Buttons: Removed `0` and `false` gaps, they're not used nor styled properly
- Card:
  - Added built-in Skeletons
  - Remove the built-in Button, this has to be manually added to `footer.right` now
  - Add better type descriptions
  - DebouncedInput/DebouncedTextarea: Try to explain the `enableInitialStateSync` more clearly
- Digit:
  - Add `font-variant-numeric: tabular-nums;` for better animations. This also prevents jumping of the unit and other surrounding elements. Drawback is that the number 1 looks a bit off regarding our brand and the digit takes a bit more horizontal space.
  - Change `xxLarge` size prop -> `2xLarge` and tweak its sizing
  - `changeValue.size` prop -> optional
  - Fix margin types
- Flex: Change sizing modifiers smaller to reduce space by default
- Heading (and heading helpers):
  - Removed `large` size
  - Fix truncation classes
  - Add balance prop: [text-wrap: balance](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap#balance)
- Icon:
  - Change proper icon sizes
  - Change default size to `small`
  - New icons: `chalkboard`, `building`, `caretUp`, `caretDown`, `users`, `cog`, `logOut`, `barcode`, `lifeRing`, `exclamationTriangle`, `lightBulb`
  - Updated icons: `select`, `selectAsc`, `selectDesc`, `user`, `times`, `facebook`
  - Deleted unnecessary `times-small` icon
- Input:
  - Remove Tooltip from label. Why would you need that? It didn't even work.
  - Fix heading area element positioning (align suffix and beacon properly)
  - Add less horizontal space
  - `color` prop value `layer:3` -> `surface:3`
- Layout:
  - Add `LayoutMainInner` and `LayoutMainAside` components to apply second right aligned Aside
  - Isolate context to its own file
  - Controlling of the asides is possible now only with the provided context to reduce confusion
  - Add smaller spacings to LayoutBox and in general tweak spacings to give more space to the main content
  - Add smaller LayoutBarLabel and apply tooltip if truncated
  - LayoutBarLabel behaviour such as width need to be controlled in the consuming app, see story for proper implementation together with Tabs etc.
  - Add better story examples with LayoutMainAside, Menu etc.
  - Example story of how to apply tabs in LayoutBar has now better method to work various viewports. Mainly Grid to Flex changes which fixes the tabs overflowing properly.
- Line: LineClimateAction/LineCarbonFootprintProgress SCSS needs to be imported explicitly e.g. `@use '@biocode/ds/Line/LineClimateAction';`
- List:
  - Fixed truncating
  - Added new required `<ListItemHeadingText />` especially if truncating is used. Replaces the old `ListItemHeading` which now acts as a parent for this new subcomponent.
  - Use helpers to truncate instead
- Loader:
  - Add product loader with name prop `product`
  - Use Spinner as the default loader
  - `modifier` prop changed to `variant`
- Media: Relocate `useMediaQueries` hook here
- Menu:
  - Add new initial stylings
  - Remove unnecessary checks of incorrect children, we don't do it anywhere else either
  - Remove "others" from modified children, there shouldn't be anything else??
  - Fix jumping Menu (especially on window resize) by moving the framer animation to `MenuContent` instead and fix similarly for `SubMenuContent`
  - Set max height automatically based on the the available space in the viewport
  - `minWidth` -> `width`. Move `width` and `align` to `MenuContent` as properties. Change the alignment to match radix API.
  - Add new width props
    - `fit` which will respect the width of the content
    - `trigger` which will match the width of the trigger button
  - Allow using `MenuItem` without the `MenuGroup`
  - Add `MenuText` which need to be used to truncate text and align elements
  - MenuItem:
    - Remove unnecessary children mutations (Badge)
    - Fix asChild usage and add proper examples
    - Remove coloring, this is not needed or designed like so. If needed for some reason `MenuText` can be used. Also LET'S NOT USE ENUMS!
    - Icons are automatically resized
  - Add `<MenuSelect />` to apply Select usage inside Menu. It applies essential props and styles to make Select work properly inside Menu.
  - MenuGroup: Add labelVariant prop to apply plain text
  - Fix story examples and simplify code
  - This component still needs to be partially refactored
- Progress:
  - Fix class without the prefix
  - Add tabular-nums like in Digit
- Select:
  - Add new styling, allow search icon
  - Fix heading area element positioning (align suffix and beacon properly)
  - Add less horizontal space and in general tweak spacings of icons etc.
  - Remove unnecessary `help` boolean, uses `helpOnClick` logic like in Input
  - Fix placeholderIcon styling hacks and use grid area instead and use :has for detecting
  - Fix so that select grows in height if there's multiple select options
  - Remove separator with components prop
  - Add `animate` prop to disable the animation which disables also the inner open state handling
  - Add `variant` prop with `outline` variant
  - Allow search icon
  - Simplify the CSS animation related code
  - Use default classes in custom ValueContainerWithTooltip so that styles work even without using it
  - Disable the automatic tooltip with `tooltip` prop by default as the tooltip causes issues with focus when value is selected and the tooltip also keeps popping up for no reason. This is especially noticeable with multi select. Can be enabled but this should be fixed.
- Separator: By default the size is now small, if you need to use the thicker version use `size="large"`
- StackedNav:
  - Add initial new design changes such as spacings and removed unnecessary code etc.
  - Added `<StackedNavIndicator />` which should only be used to indicate collection of "wizard-like"/"stepper" navigation items and their active states. Use `<Beacon />` or `<Icon />` inside.
  - Default "active" behaviour of beacon removed including related props removed. Use StackedNavIndicator instead.
  - Alignment of the StackedNavIndicator (old beacon prop alignment) have been removed to the root StackedNav
  - StackedNavLink: Removed `modifier` property entirely
- Tabs:
  - `activationMode` value changed to default radix one: `automatic`
  - `modifier` prop changed to `variant`
  - `pullEdge` prop removed, use paddingLeft prop if needed and tweak the surrounding area's spacings instead
  - TabLink: `isActive` -> `active`
- Textarea:
  - Fix heading area element positioning (align suffix and beacon properly)
  - Add less horizontal space
  - Add smaller minimum height by default
  - `color` prop value `layer:3` -> `surface:3`
  - `modifier` prop changed to `variant`
- Text:
  - Remove xLarge size
  - Add [text-wrap: pretty](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap#pretty)
  - Default color prop value changed: `default` -> `neutral`
  - Added highlight color
- Table: Apply initial new styling
  - Remove unneeded props (from which many didn't even have any effect): `strongHeader`, `plain` modifier, `textTransform` and `suffixCase`
- Tabs:
  - Add new initial styling
  - Simplify helper prop omitting
  - Fix default `TabsListPrimary` scrolling mask
- Toast:
  - Fix mobile positioning, spacing and styling
  - Fix other positioning also, but some drag swipe directions doesn't remove the toast properly...
  - `modifier` prop changed to `variant`, set default variant to `default` instead of info
  - Remove gap option which didn't have any effect, add default gap
  - **This component really needs to be refactored asap**
- Tooltip:
  - Add `500` delay duration by default
  - Remove delay duration overrides here and there and just use the default set by the Provider
- Subtitle:
  - Add `medium` sizing prop which is the default. Sizings have been tweaked in general.
  - Add `small` sizing prop
  - Change default `tag` property to `div`

## Other changes

- Storybook:
  - Fix code preview colors
  - Remove our custom font for now since it doesn't work in Chromatic because the font is not loaded in Storybook's manager in any way. Maybe add this back later when we add fonts to CDN.
  - Fix various Story related issues and add better stories in general
  - Isolate `#storybook-root`
  - All stories converted to CSF 3
- \_heading.scss mixin: Remove large size
- \_text.scss mixin:
  - Remove xLarge size
  - Subtitle sizes tweaked, if something looks odd try to change `@include text(subtitle-s)` -> `@include text(subtitle)`
  - Remove `meta` and `lead` styles
- Sizing helpers & \_helper.scss mixin: **Note that padding and margin helpers don't follow the spacing conversion and instead apply the new values sizing values.**
- Added better colors, especially muted colors in dark theme (backgrounds, text, borders etc.)
- Enhanced contrast in shadows
- Add `font-size: 16px` for iOS devices in form elements to disable automatic zooming
- Add default line-height to textarea and input base elements
- Change `--b-shadow-invisible` value so that it can be transitioned to `--b-shadow`
- Removed the entire UI scaling with the font-size
- Remove the `Space Grotesk 1.1.6` alternative font which was used just for `%` glyph, we can manage without this. Delete unnecessary related font files.
- Set global `user-select` as `none` by default to create more app-like feel. Can be overridden with `--b-root-user-select`;
- **Remove (commented out for now) all z-indexes from overlay-like components (Menu, Dialog etc.) to see if this fixes all the stacking issues there could be relatd to portals/non-portals. So far at least in Storybook, everything seems to stack nicely.**
- Fix unintentional focus styles when using mouse and programmatic focus happens in many radix-ui "Trigger" components. See Note 4. in README.
- Naming convention changes have been started, eventually `modifier` in bunch of components will be renamed to `variant` and sizing props will change, e.g. `xxLarge` -> `2xLarge`
- Remove `var(--b-pop-shadow)` and use `var(--b-shadow)` like before. This was initially a quick fix to reduce shadows in forced dark themed components. Now instead just convert all essential shadows to "ring-like" shadows in forced dark theme (Theme component).
- Apply tabular-nums like in Digit to ChangeValue hook thing
- Add `TRANS_DEFAULT_EASE` and `EASE_IN_OUT` for simple opacity based fades
- Scrollbar helper (b-scrollbar): Removed legacy declarations and renamed color/width tokens
- Add "HeadingSelect" component example to be used as a starting point inside consuming apps
- Clarify default values in various component properties
- displayName removed from all components
- \_variables.scss -> \_tokens.scss
- Removed \_displayResponsive.scss, if this is in use somewhere, use Media or useMediaQueries instead
- Renamed all <ComponentName>.variables.scss -> <ComponentName>.tokens.scss and removed empty/unnecessary imports and unused styles
- Lint with `canonical/prefer-inline-type-import` to inline type imports without dedicated `import type`
- Documentation from storybook has been moved to docs/. Unnecessary <DocBlock /> components removed.
- Replace `classnames` package with `clsx`, it's faster and smaller. This affects peerDependencies and the conversion should be made in the consuming application also.

# Version 0.4.31

- Select: Add scroll to selected item when opening the select menu (see [react-select issue](https://github.com/JedWatson/react-select/issues/3769))

# Version 0.4.30

- Update packages.
- DebouncedTextarea: same thing with DebouncedInput in previous version.
- Textarea: remove readonly when loading

# Version 0.4.29

- DebouncedInput: add enableInitialStateSync to enable / disable synchronisation initialValue and value, so that we only need to sync them once.

# Version 0.4.28

- Input: remove readonly when loading.
- Table: update some types

# Version 0.4.27

- Beacon: replace pulse with repeat.
- useDisplayChangeValue: update types description, add infinity delay & reset, in case of keeping the delta value.
- AsideBox: add forwardRef

# Version 0.4.26

- Select: add forwardRef
- Avatar: add subscription prop

# Version 0.4.25

- Tooltip: touch devices: long touch will now display the tooltip.
- Select: add tooltip for truncated selected option.

# Version 0.4.24

- SiteHeader:
  - Change reports label
  - Change desktop navigation's visibility
- Donut:
  - Allow changing border/bg color w/ CSS variables
  - Allow overriding Digit props
- Storybook
  - Remove docs font size and family overrides. These affected the component layouts; **let's be careful with these**.
  - Remove code highlight colors (prism.js) and use static white background
  - Fix heading colors in mdx
  - Popover/ThemeProvider mdx docs stories:
    - Remove unnecessary Meta titles, they didn't seem to have any effect and they were wrongly applied
    - Use Subtitle from '@storybook/blocks'
    - Remove duplicate content

# Version 0.4.23

- ThemeProvider: Fix issues when using Menu story

# Version 0.4.22

- Fix Info colors when using color mode overriding with Theme
- Remove unnecessary "@svgr/webpack"
- Storybook: Add `clearScreen: true` to Vite by default

# Version 0.4.21

- Menu: Fix jumping issue when open the menu
- Popover: Fix the same issue with Menu
- Textarea, DebouncedTextarea: add forwardRef
- DocBlock: Move to `stories/components/DockBlock`

# Version 0.4.20

- Theming: Handle color modes with class only (= without extra system media queries). This reduces bundle size!
  - Changed `$theme` to `$theme-mode`. Don't set it to any other value than `class` if you're using ThemeProvider. Basically you don't need to apply the variable to config at all; `$theme` can simply be removed if used. Other values override the class approach by using CSS only approaches.
  - \_theme.scss: Set the color mode to accept only one type of color mode
  - ThemeProvider: Remove the old cookie deleting
  - Add script example for server rendered apps (e.g. Next.js/MPA) to prevent theme flasing
- Select: Remove unnecessary classes

# Version 0.4.19

- Popover: Add ScrollArea for vertical overflow, adjust styles, update stories
- Z-index: Add 1000 for loader, lift tooltip z-index to 900
- Select: Update CSS classnames to fix issue with styles when portalling select menu to other places (eg. document.body)
- Input: Add helperText prop to display a tooltip when hover the help icon
- ListItemValue: Remove flex display

# Version 0.4.18

- Add new component: Popover
- Add new way of writing component docs with mdx (not working well with dark mode yet)
- Table: Add option to hide table header

# Version 0.4.17

- Select:
  - Added Creatable feature where user can create new option
  - Select component can now mimic Input component by hiding dropdown indicator and options

# Version 0.4.16

- Select:
  - Change default placeholder color to lighter version
  - Add property `placeholdeColor` with `strong` value to allow previous stronger text color
  - Simplify styling which reduces SCSS bundle size
  - Fix menu fade out if used in portal

# Version 0.4.15

CSS Variable changes this time include state color changes to be more semantic:

| Old variable             | New variable              |
| :----------------------- | :------------------------ |
| var(--b-success-400)     | var(--b-success-fg)       |
| var(--b-success-100)     | var(--b-success-border)   |
| var(--b-success-50)      | var(--b-success-bg)       |
| var(--b-warning-400)     | var(--b-warning-fg)       |
| var(--b-warning-100)     | var(--b-warning-border)   |
| var(--b-warning-50)      | var(--b-warning-bg)       |
| var(--b-error-400)       | var(--b-error-fg)         |
| var(--b-error-100)       | var(--b-error-border)     |
| var(--b-error-50)        | var(--b-error-bg)         |
| var(--b-info-400)        | var(--b-info-fg)          |
| var(--b-info-100)        | var(--b-info-border)      |
| var(--b-info-50)         | var(--b-info-bg)          |
| var(--b-primary-text-50) | var(--b-primary-fg-light) |

- Moved all dependencies to devDependencies, add @radix-ui/react-primitive to peerDeps since all of the dependencies are really devDependencies. FYI: Rollup build handles non-externals (e.g. react-accessible-dropdown-menu-hook) automatically.
- Eslint:
  - Remove unnused eslint packages: eslint-plugin-jsonc, eslint-plugin-react-refresh, @html-eslint
  - Remove unnecessary ignore patterns
  - Set proper lint script
  - Run lint before build
- Add prettier, remove unnecessary prettier config. Note that prettier was automatically added by one of the eslint plugins but it makes sense to have it here.
- Remove unnecessary react-table-config and rollup copy package
- Dark mode: Tweak muted colors to match better with the non-muted versions
- Palette: Simplify story
- Input/Textarea:
  - Add proper muted colors and new state colors
  - Fix alert override w/ correct size
  - Remove unnecessary text color from layer:3 prop
- Menu: Change the Color enum to MenuColor to fix conflicts
- Alert: Add new state vars, remove unnecessary 'has-button' class
- \_heading.scss mixin: Remove the xxxl mq size modifier from size "l"
- Text: Allow custom colors. Apply new state vars. Fix light color button/links.
- Box: Add text color prop and add/combine/export box color types
- Heading: Add color prop
- Export types in index.ts, remove now unnecessary type exports from package.json. Note that now importing types like `import type { Color } from '@biocode/ds/types';` is `import type { Color } from '@biocode/ds';`
- Add initial design system documentation
- Update recommended node version: Add .nvmrc & engines.

# Version 0.4.14

- StackedBar: Update classname, add rounded corner when the data is null / undefined
- Alert: Add shake animation

# Version 0.4.13

- useMediaQueries: Fix issue when changing viewport doesn't trigger the mq function.

# Version 0.4.12

- StackedBar: Add mute variant to remove label & tooltip. Update the rounded corner to work correctly.

# Version 0.4.11

- UseMediaQueries: Change eventListener method to reduce rerender
- ButtonBlockToggle: Add effect to update the active state from prop

# Version 0.4.10

- CSS Variable changes:
  - `--b-border-300`, `--b-border-200`, `--b-border-100` and `--b-border-50` now use the muted version in dark theme
  - Tweak light shadow color
- \_theme.scss mixin:
  - Allow using the mixin in root level
  - Add system light query if used with `$mode: 'light'`
  - `$extend` -> `$append` to not confuse with the real SCSS extend rule
  - `$systemDarkQuery` -> `$useSystemDarkQuery`
- FigureOverlay: Simplify styles
- ScrollArea: Fix story, convert to CSF 3
- Card
  - Simplify link hover
  - CardPrimary: Set correct border color

# Version 0.4.9

- Icon: cart, exchange note - remove unnecessary svg attributes

# Version 0.4.8

- List: add default text color.
- Progress: change label type to receive a node instead of string.
- Select: add style when portal menu outside of current context.
- Icon: add cart, exchange, note.
- Button: remove tag prop.

# Version 0.4.7

- Theme:
  - ThemeProvider:
    - Change the cookie name from `b-theme` to `b_theme` because of our website hosting provider requires it to be snake_case in order to fix cache issues. There is now also a temporary solution which uses the old cookie's value to apply it to the new one and then deletes the old cookie entirely.
    - Add biocode.io domain that handles subdomains to the cookie if the current application is hosted there. Delete the old cookie (domain or subdomain of the page where the cookie was created) for a while.
- Tweak preferred colors
- Donut: Add preferred colors to donut xl story
- FigureOverlay: Add default `z-index: 1`, add lighter overlay border
- Card: Add FigureOverlay as dependency
- Tabs:
  - TabsList: Add stronger active color to default modifier
- SiteFooter: Fix gradient and bg/border colors
- Media: Fix types especially for render props usage in children
- Update: `@types/react`, `@artsy/fresnel` packages
- Add `@types/react` and `@types/react-dom` as peer dependencies
- Dropdown: Remove unnecessary DropdownArticle/DropdownServiceSelect types & component, fix types
- Donut: Allow disabling Digit animation
- Provider: Add MediaProvider props
- Alert: Tweak small modifier's font-weight

# Version 0.4.6

- Theme:
  - ThemeProvider:
    - Add long expiry date to the cookie. Cookie was accidentally set per Session e.g. If browser was closed, bye bye dark/light mode override setting.
    - Do not recreate the cookie if it matches with the color mode on mount
- Tabs:
  - Fix possible "hole" in the background color of defaults TabsList
- List:
  - Allow changing the separator color, set smaller border by default
  - Add list as dependency
- Line:
  - Add mesh stroke color
  - Add correct border to LineClimateAction
- Icon: Add searchCo2 icon, fix middot/youtube icons
- Minor fixes and tweaks here and there

# Version 0.4.5

- Switch: Add success color back
- Icon: Fix youTube icon color
- Dropdown: Fix story. Test if importing the hook fixes odd import error with vite.
- Table: Remove default Select SCSS dependency

# Version 0.4.4

## Heading/link color variable changes

| Old variable                | New variable                |
| :-------------------------- | :-------------------------- |
| var(--b-heading)            | var(--b-text-heading)       |
| var(--b-link)               | var(--b-text-link)          |
| var(--b-link-hover)         | var(--b-text-link-hover)    |
| var(--b-heading-fontWeight) | var(--b-fontWeight-heading) |

## Other changes

- Add `var(--b-primary-static-300)`, `var(--b-primary-static-200)` and `var(--b-primary-static-100)` variables. Tweak light primary colors to match with the background color (slightly less purple shade)
- Match accent color var logic with other color vars
- Textarea:
  - Add `plain` modifier back
  - Simplify disabled styling
- Input:
  - Fix overlapping unit/input value
  - Simplify disabled styling
- Palette: Add better colors to texts with background
- SiteHeader: Add texts (fi/en) to language switcher
- Button:
  - Allow applying text shadow
  - Remove unncessary overriding of the hover color
  - Remove margin from plain modifier
- Select: Add smaller Alerts
- Storybook:
  - Convert some (e.g. Input, Button) stories to use the CSF 3 format entirely and fix the mixed CSF 2 and CSF 3 formats. **If story is converted to CSF 3, please convert the all the stories in that story**
  - Fix duplicate stories
  - Fix correct types to CSF 3 subcomponents
- Overlay: Add more opacity for more contrast
- SiteFooter:
  - Add YouTube icon
  - Add \_blank links to icons
  - Fix translations
- Remove ServiceNavbar & DropdownServiceSelect
- Dropdown: Add smaller font size, remove unnecessary styles

# Version 0.4.3

- UseMediaQueries: Update using window.matchMedia, add more conditions to run

# Version 0.4.2

## Text color variable changes

Sorry, more major color variable changes. This time, the text colors have been edited to have less variables to simplify the shades of the text.

| Old variable             | New variable             |
| :----------------------- | :----------------------- |
| var(--b-text-400)        | var(--b-text-200)        |
| var(--b-text-300)        | var(--b-text-200)        |
| var(--b-text-200)        | var(--b-text) \*         |
| var(--b-text-100)        | var(--b-text-50)         |
| var(--b-text-static-900) | var(--b-text-static-500) |
| var(--b-text-static-800) | var(--b-text-static-500) |
| var(--b-text-static-700) | var(--b-text-static-400) |
| var(--b-text-static-600) | var(--b-text-static-400) |
| var(--b-text-static-500) | var(--b-text-static-300) |
| var(--b-text-static-400) | var(--b-text-static-200) |
| var(--b-text-static-300) | var(--b-text-static-200) |
| var(--b-text-static-200) | var(--b-text-static-100) |
| var(--b-text-static-100) | var(--b-text-static-50)  |

- \* Note that you may not have to add (or keep) this variable because the color inherits from the root default color

## Other changes

- Button:
  - Disable initial icon animation properly
  - Set hover/focus opacity
  - ButtonBlockToggle: Remove unnecessary useFx
- Fieldset/Input: Fix disabled colors across layers
- Select: Fix disabled hover
- Switch:
  - Fix accessibility issues
  - Fix label to check the switch also
  - Remove unnecessary icons
  - Use primary color instead in checked state
  - Fix shrinking width
- Palette: Reorder
- Add missing static colors to bg/border colors.
- Storybook: Add missing heading styles
- Tweak primary text color
- Remove unnecessary @ts-ignores

# Version 0.4.1

- Issues with CSF 3: https://github.com/storybookjs/storybook/issues/15954
- Issues with subcomponents: https://github.com/storybookjs/storybook/issues/20782
- Switch: used radix's react-switch
- Add CSF3 to some components' stories.

# Version 0.4.0

See the table below for essential color variable changes and pay attention to the bold texts below as well for breaking changes that need to be applied to the consuming applications. There are most likely some human errors or missing points in the following contents, so PM @joonassandell if there's anything to ask.

## Color variable changes

| Old variable                    | New variable                                                       |
| :------------------------------ | :----------------------------------------------------------------- |
| var(--b-bg-\*)                  | var(--b-bg-mute-\*)                                                |
| var(--b-bg-900)                 | var(--b-bg-600)                                                    |
| var(--b-bg-500)                 | var(--b-bg-mute-300) or var(--b-bg-mute-200)                       |
| var(--b-bg-400)                 | var(--b-bg-mute-400)                                               |
| var(--b-bg-300)                 | var(--b-bg-mute-100) or keep as is                                 |
| var(--b-bg-static-700)          | var(--b-bg-static-600)                                             |
| var(--b-bg-static-50)           | var(--b-static-white)                                              |
| var(--b-bg-400-light)           | var(--b-layer-3)                                                   |
| var(--b-bg-300-light)           | var(--b-layer-3)                                                   |
| var(--b-bg-200-light)           | var(--b-layer-3)                                                   |
| var(--b-bg-50-light)            | var(--b-layer-3)                                                   |
| var(--b-bg)                     | var(--b-layer-0)                                                   |
| var(--b-border-\*)              | var(--b-border-mute-\*)                                            |
| var(--b-border)                 | var(--b-border-mute-100)                                           |
| var(--b-border-900)             | var(--b-border-mute-strong)                                        |
| var(--b-border-200-transparent) | var(--b-border-mute-200-translucent)                               |
| var(--b-border-100-transparent) | var(--b-border-mute-100-translucent)                               |
| var(--b-border-300)             | var(--b-border-mute-900)                                           |
| var(--b-border-100)             | var(--b-layer-0-border) or var(--b-border-mute-100)                |
| var(--b-border-disabled)        | var(--b-border-mute-50) or var(--b-border-mute-100)                |
| var(--b-border-strong)          | var(--b-border-mute-strong)                                        |
| var(--b-text-200)               | var(--b-text-300)                                                  |
| var(--b-text-50)                | var(--b-text-100)                                                  |
| var(--b-text-static-50)         | var(--b-static-white) or keep as it is depending on the background |
| var(--b-text-placeholder)       | var(--b-text-50)                                                   |
| var(--b-text-disabled)          | var(--b-text-50)                                                   |
| var(--b-accent-1-400)           | var(--b-accent-1-600)                                              |
| var(--b-accent-1-500)           | var(--b-accent-1-900)                                              |
| var(--b-accent-1-100)           | var(--b-accent-1-200)                                              |
| var(--b-accent-1-70)            | var(--b-accent-1-100)                                              |
| var(--b-accent-1-20)            | var(--b-accent-1-50)                                               |
| var(--b-accent-2-500)           | var(--b-accent-2-700)                                              |
| var(--b-accent-2-400)           | var(--b-accent-2-900)                                              |
| var(--b-accent-2-100)           | var(--b-accent-2-200)                                              |
| var(--b-accent-2-70)            | var(--b-accent-2-100)                                              |
| var(--b-accent-2-50)            | var(--b-accent-2-100)                                              |
| var(--b-accent-2-20)            | var(--b-accent-2-50)                                               |
| var(--b-accent-3-500)           | var(--b-accent-3-900)                                              |
| var(--b-accent-3-400)           | var(--b-accent-3-800)                                              |
| var(--b-accent-3-100)           | var(--b-accent-3-300)                                              |
| var(--b-accent-3-70)            | var(--b-accent-3-200)                                              |
| var(--b-accent-3-50)            | var(--b-accent-3-100)                                              |
| var(--b-accent-3-20)            | var(--b-accent-3-50)                                               |
| var(--b-accent-4-500)           | var(--b-accent-4-700)                                              |
| var(--b-accent-4-400)           | var(--b-accent-4-800)                                              |
| var(--b-accent-4-100)           | var(--b-accent-4-300)                                              |
| var(--b-accent-4-70)            | var(--b-accent-4-200)                                              |
| var(--b-accent-4-50)            | var(--b-accent-4-100)                                              |
| var(--b-accent-4-20)            | var(--b-accent-4-50)                                               |
| var(--b-accent-5-500)           | var(--b-accent-5-700)                                              |
| var(--b-accent-5-400)           | var(--b-accent-5-600)                                              |
| var(--b-accent-5-100)           | var(--b-accent-5-300)                                              |
| var(--b-accent-5-70)            | var(--b-accent-5-200)                                              |
| var(--b-accent-5-50)            | var(--b-accent-5-100)                                              |
| var(--b-accent-5-20)            | var(--b-accent-5-50)                                               |
| var(--b-error-70)               | var(--b-error-100)                                                 |
| var(--b-error-20)               | var(--b-error-50)                                                  |
| var(--b-warning-70)             | var(--b-warning-100)                                               |
| var(--b-warning-20)             | var(--b-warning-50)                                                |
| var(--b-success-700)            | var(--b-success-100)                                               |
| var(--b-success-200)            | var(--b-success-100)                                               |
| var(--b-success-70)             | var(--b-success-100)                                               |
| var(--b-success-20)             | var(--b-success-50)                                                |
| var(--b-info-70)                | var(--b-info-100)                                                  |
| var(--b-info-20)                | var(--b-info-50)                                                   |

- StackedBar success colors: see the new colors from the StackerBar story. Success colors are intented to be used only with border-like elements only (such as Badge) thus doesn't work with StackedBar currently.
- There's also an example story of custom Card with colors
- Some color variables could already work as they are

## Other changes

- Added Provider and BaseProvider. **Note that adding the Provider is not recommended yet unless the consuming application has dark/light toggle or otherwise dark/light modes could be accidentally added from user's cookie.** Add BaseProvider to consuming app with the required child providers instead to make sure that certain framer animation methods aren't used (Note that this isn't required but recommended):

```jsx
<BaseProvider>
  <MediaContextProvider>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </MediaContextProvider>
</BaseProvider>
```

- Update to Storybook v7
  - Use Vite (= remove all Webpack stuff)
  - Use TypeScript
  - Use storybook-dark-mode with ThemeProvider
  - PostCSS works now in Storybook correctly
  - Update all stories with proper informations (parameters: `componentSubtitle` & `docs.description.component`)
  - Categorize all components (e.g. `Components/Disclosue/Accordion`) for better organization in the Storybook sidebar
  - Keep the [deprecated subcomponents :(](https://github.com/storybookjs/storybook/issues/20782#issuecomment-1482771013) for now. This is useful to display the props subcomponents have when we have no time to write stories to each subcomponent.
  - Add more background colors for testing
  - Clean up and enhance bunch of stories. e.g.:
    - Add more modifiers visibile immediately to some stories
    - Remove unnecessary data files
    - Remove `COMPONENT_NAME` const since Storybook doesn't allow template literals in story names anymore
    - Fix duplicate table stories
    - Upgrade Accordion to use the new [CSF 3 format](https://storybook.js.org/docs/react/api/csf#upgrading-from-csf-2-to-csf-3) with types as an example. Each story should be converted to this later on.
    - Add Biocode Logomark to storybook with links to homepage
  - Read more about the changes from Storybook [CHANGELOG](https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md) and [MIGRATION](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md)
- Theme
  - Add ThemeProvider/ThemeContext. **Note that adding the ThemeProvider it not recommended yet unless the consuming application has dark/light toggle or otherwise dark/light modes could be accidentally added from user's cookie unless this feature is disabled with updateWithCookie.**
  - **Add `@use '@biocode/ds/scss/Theme';`**
- Illustration
  - **`name="packagingAccent5"` & `name="landUseAccent5"` has been removed, use `color="accent:5"` instead**
  - Apply dark themed colors, apply color overriding
  - Outline svgs removed, use outlines from the colored versions
  - Convert story to CSF 3
- SiteHeader: Add dark/light mode toggle
- Badge: Fix inconsistent CSS classes and alignments, add proper "notify" colors for the animation
- StackedBar: Fix tooltip text colors
- Toast: Remove some odd style namings and classes. This component needs a complete rewrite.
- Digit: Remove totally inconsistent changeValue positioning which also had wrong syntax. Add consistent changeValue text size.
- Input: Allow changing the layer colors easily. **Apply `color="layer:3"` prop if Input is used inside Fieldset**
- Textarea: Allow changing the layer colors easily. Add color transition. Remove plain modifier (not really sure if this was used somewhere). **Apply `color="layer:3"` prop if Textarea is used inside Fieldset**
- Select: Fix placeholder icon affecting the Select's layout, fix odd CSS stylings, inherit to disabled color to Icon, fix spacings
- Fieldset: Remove Input color overrides. **Remove `b-Fieldset-help`, use e.g. `<Text color="light" />` instead whatever this was originally intended for.**
- Text: Remove extra color options (`success:400` etc.), added `info` color option
- Alert: Use the new Text color options (AlertText)
- Progress: prop **`isLoading` -> `loading`**
- Beacon: color **`light` -> `white`**. Fix story.
- Switch: Fix transitions, fix story
- Avatar: Remove global `--b-Avatar-borderColor` variable from :root
- Menu: Do some quick sizing adjustments
- Card & Box: Add `background-clip: padding-box` so that the possible transparent border stays outside of the background color
- Form-like components (Input etc.): Disallow selecting labels
- AuthLayout: Fix wrapping and spacings
- Icon:
  - Add day & night icons
  - Convert the story to list all the icons for easier discovery and convert to CSF 3
  - Add `Icon.config.ts` with `ICON_NAMES` to be used for types and the story more easily
  - Fix ChartLine icon
  - Remove "disabled" color, it should be inherited from the parent
- Remove IconPalette story
- Remove ColorPalette story
- Add Colours story with palette and component examples
- Button: Add animate related JSX only to icons that animate
- Toast: Add correct modifier naming convention, add new color variables. There are still loads of issues especially with accessibility with this component.
- \_text.scss mixin: Remove unnecessary args, tweak font sizes
- Allow setting/forcing dark mode styles with media query/config
- Remove the `motion` usage for framer-motion to reduce bundle size with the https://www.framer.com/motion/guide-reduce-bundle-size `domMax` feature. Essentially this will be converted to use the `domAnimation` once we remove the dragging props from Toast.
- Add useCookie
- Remove direct component imports
- Remove all test related config. Let's add these back or add some other solution once we start testing.
- Remove CommonJS from build
- Convert src/recipes to src/stories with proper story names. Ignore src/stories from build.
- Update essential packages
  - Remove duplicate @types/react-table
  - Add missing radix-ui dependencies
- Fix TS issues caused by the new TS version
- Component utility
  - Remove/convert default export, remove `COMPONENT_NAME` (New Storybook doesn't support string literals)
  - Convert to [CSF 3 format](https://storybook.js.org/docs/react/api/csf#upgrading-from-csf-2-to-csf-3) with types
  - Add more info after generation
  - Add more possibly needed boilerplate

# Version 0.3.47

- useMediaQueries: check the current viewport, used for conditional props change, etc.

# Version 0.3.46

- List: redo, works as definition list, at least for now.
- Illustrations: add packaging accent 5

# Version 0.3.45

- Input: Remove label truncation
- Menu: Remove MenuItem truncation. Update stories.
- Upgrade packages

# Version 0.3.44

- SiteHeader: Remove unnecessary aria-labels, translate logo
- CookieBot: Hide small consent text in mobile and prefer using the "Show details"

# Version 0.3.43

- Upgrade to React 18
- Badge: Add animation
- Add delay duration for tooltip in Avatar, MenuItem
- Progress: Add percentage (%)
- GridCol: Add asChild prop
- Button: Add tag prop (avoid nesting button with button)

# Version 0.3.42

- Donut: update stories with new colour.
- GridCol: add css helpers.
- Input: truncate label.

# Version 0.3.41

- SiteHeader + SiteFooter: add aria-label for <a> tag.

# Version 0.3.40

- DebouncedInput, DebouncedTextarea: fixed bug with onChange property.

# Version 0.3.39

- Icon: Added lock, lockOpen, eye
- Card: The heading can be both an element or a string

# Version 0.3.38

- Menu: remove button modifier, add text modifier, add color prop for MenuItem, update stories.
- Menu, Dialog, AlertDialog: move the fix in 0.3.35 to Content instead.

# Version 0.3.37

- Button: Use gap instead of margins in button elements. This fixes mobile safari truncating issues in some cases.
- Icon: Add chicken and fish
- Fieldset: Add proper coloring
- Dialog: Tweak footer padding

# Version 0.3.36

- Avatar: Allow changing circle bg/border color. Fix circle text size from not inheriting.
- Card: Add proper bg colors, fix color variables
- Icon: Add correct color var
- Remove false information, fix accent colors
- Simplify Menu stories

# Version 0.3.35

- Update Radix packages in peerDevs
- Menu: Add story for Dialog & AlertDialog
- Dialog, Menu, AlertDialog: remove pointer-event on clean-up.
  - Note: In dialog components (Dialog, Menu, AlertDialog etc.) when opened, Radix creates a layer that handle any action outside of them called DismissableLayer. This layer applies `pointer-events: none` style to the body for accessibility functionalities. There is a bug that when Dialog inside a Menu is opened and navigation (with router) happens and Dialog is closed, the pointer-events is not removed from the body although it should.

# Version 0.3.34

- Update all radix packages to latest version. This should now fix pointer-event issue when closing Dialog, Menu, etc.
- Dialog & Menu: revert the changes in 0.3.33
- Link to their issues: https://github.com/radix-ui/primitives/issues/1241, https://github.com/radix-ui/primitives/issues/1236. This is related to Radix's Dismissable-layer package.

# Version 0.3.33

- Dialog & Menu: fix issue with pointer-event. [Read more](https://github.com/radix-ui/primitives/issues/2023)

# Version 0.3.32

- BiocodeWordmark: Prevent mobile Safari from cutting the edges in some situations
- Icon: Allow changing the icon color with CSS variable

# Version 0.3.31

- TabsList (default): Draw the shape with CSS to fix loads of rendering errors

# Version 0.3.30

- Add Radix Portal for portaling components that doesn't come with it.
- Toast: now can portal to specific place (resolve issue with stacking context) without creating a placeholder component first.

# Version 0.3.29

- Remove [hidden] from normalize which could create specifity issues

# Version 0.3.28

- Illutration: Remove computerLady & runningMan
- SiteHeader: Tweak signup strings, fix props

# Version 0.3.27

- Wrap: Set correct variables for maxWidth (doesn't affect the maxWidth value) and add component naming convention for the bp (wrapWidth -> Wrap-width; wrapMaxWidth -> Wrap-maxWidth) to prevent possible conflicts
- Remove unnecessary comments

# Version 0.3.26

- StackedBar: fix issues in Safari + IOS devices
- useDisplayChangeValue, Digit, Progress: increase delta displaying duration
- useDisplayChangeValue: don't display delta when changing from or to '--.--' (null, undefined value)
- Select: add placeholderIcon
- Icon: add disabled color

# Version 0.3.25

- Dropdown: Fix heading paddings (if used w/ postcss combine media queries, it'll break)

# Version 0.3.24

- Change all collective urls and related to report urls/related

# Version 0.3.23

- Remove unnecessary double utils export
- SiteHeader: Fix safari icon rendering, fix active report class
- SiteHeader/SIteFooter: Force specific viewports which cannot be overridden
- TabsList: Add scrollArea as optional. Useful if TabsList is used fullscreen e.g. w/ Wrap and outer ScrollArea with other elements in the same row.
- TabsList (Primary): Set smaller height for smaller viewports, fix safari/ios safari rendering
- Add utils to test browser/server for nextjs usage, fix Aside for nextjs, fix smallest breakpoint

# Version 0.3.22

- Card: Fix footer text truncation, fix logo spacing. CardPrimary: don't force children.
- Dropdown: fix cloning if undefined/null children
- Subtitle: Add better single line truncation (clamp otherwise)
- Heading: Fix correct size helper
- Text: Don't apply clamp variable if single line truncation

# Version 0.3.21

- Alert: Convert to new way of creating components, apply proper coloring, add AlertButton option, add AlertBadge option, allow truncating, fix responsive behavior.

```tsx
// Before
<Alert modifier="info">
  This is alert component
</Alert>

// After
<Alert modifier="info">
  <AlertIcon />
  <AlertContent>
    <AlertText>
      This is alert component with a <a href="#">link</a>
    </AlertText>
  </AlertContent>
</Alert>
```

- Text: Add more state colors, remove textColor (use style instead), add multi-line truncation and uses single line truncation if only one line
- Various color, size and other tweaks/fixes
- Add TooltipProvider to Storybook and remove the TooltipProviders from all of the components.
  - As per https://www.radix-ui.com/docs/primitives/components/tooltip#provider it makes sense to use only a single provider for tooltips, otherwise our apps are filled with TooltipProviders especially if we use the "AddTooltipIfTruncated" / "AddTooltipIfTruncated" a lot
  - Fix default props to be used in addTooltipIfTruncated (fixed ColorPalette)
  - Remove inconsistent delays in tooltips
- Badge: Allow react nodes in text, use truncate with the helper class
- Add correct lineheight to smaller screens, align icons better + related pixel tweaks
- Fix: Aside beacon placements, border colors, icon svg dimensions, correct Facebook icon in SiteFooter etc.

# Version 0.3.20

- useDisplayChangeValue: The delta is not shown if the previous or new value is not a number.

# Version 0.3.19

- Fix useDisplayChangeValue when receiving non-number input.

# Version 0.3.18

- Textarea: Add correct focus color
- Add xl transition
- Remove old accent colors from ts
- Make Cookiebot a bit larger

# Version 0.3.17

- Fix issue with inputs, textareas/inputs didn't inherit font-feature-settings.

# Version 0.3.16

- Add useDisplayChangeValue hook to display the delta Δ if the value change when rerendering. This currently applies to Digit and Process.
- Avatar: Add tooltip to avatar text if truncated.
- Text: Add 'success' and 'error' color.
- Menu: Fix exit animation. Menu open state now should always be controlled for the animation to work.
- StackedBar: remove animation, apply our tooltip for better performance & prevent overflow issue.

# Version 0.3.15

- Add initial Cookiebot styles
- Remove unnecessary boxShadow mixin and replace instances with css variables instead

# Version 0.3.14

- Fix contact links

# Version 0.3.13

- Change dark theme default font weight to 400, since this works better with hidpi screens. It was 500 before because small text rendered badly in non hidpi screens. We should later add media query etc. to apply stronger font weight for dark theme/non hidpi screens. Remove related unnecessary vars.
- Correct --b-border-100 color
- Add --b-fontWeight-medium varying font weight
- Mark: Fix Safari rendering
- SiteHeader/SiteFooter: Tweak copys, apply new vars

# Version 0.3.12

- Mark: Fix Firefox rendering
- Fix/add links to old application urls temporarily

# Version 0.3.11

- Fix hovers that would have wrong styles in touch devices
- Add proper ease var

# Version 0.3.10

- Move accent colors to variables since they're the same
- Add new state colors and remove "stage" colors
- Remove unnecessary color vars
- --b-border-300-transparent -> --b-border-100-transparent
- Button: change strong font weight, allow changing default button coloring
- textLinkLight: add correct color

# Version 0.3.9

- Added correct signup/login urls
- scrollbar (= SS only helper): Add transparent version
- Tweak SiteFooter & SiteHeader

# Version 0.3.8

- SiteHeader/SiteFooter: combine scaling style overrides to \_fixedScale.scss helper
- StackedNav: fix spacings and add correct modifiers

# Version 0.3.7

- Added new icons: co2, share, chartLine
- Fixed missing SiteHeader/SiteFooter exports

# Version 0.3.6

- Subtitle: colorType -> color
- SCSS:
  - Add `$root-fontScale` option
  - Add possibility to override breakpoints
  - Added `--b-text-s-fontWeight`, `--b-primary-text`, `--b-black` and `--b-white` vars
  - Added $helper-breakpoints to reduce generated helpers
  - Added border css variables (`--b-border-*`)
  - Export individual helpers in package.json, we need to figure out better way for this
- Mark: Change MarkBiocodePrimary -> MarkBiocodeIcon
- Icons: Add loads of new icons (ruler, export, import etc. see Icon.types.ts)
- Wordmark: Added newly updated BiocodeWordmark
- Tweak SiteHeader/SiteFooter
- Table: Bug fix for tables without sorting enabled
- Add Menu component
- Tooltip: Add addTooltipIfTruncated HOC
- Fix overflow issue in Aside
- StackedNav: add beacon position
- Change export in index.ts file && all components

# Version 0.3.5

- Table: MultiSelectFilter: Added optional sortFn prop for sorting options. Removed default sortby title tooltip.
- Select: Moved close timout inside useEffect with cleanup to avoid errors when timeout fires after the component has unmounted.
- Aside: Added forwardRef-wrapper to fix error when used asChild of its parent, e.g. Theme.

# Version 0.3.4

- Input: Add extra filter for controlled numeric inputs, remove event.target.validity.valid check.
- Subtitle: suffix case will be default to <br>true</br> to match subtitle case.

# Version 0.3.1

- Input: For controlled numeric inputs, commas are changed to periods in onChange and extra periods are removed. The event.target.value property is mutated.
- Textarea: Added beacon prop.

# Version 0.3.0 (Published 25.01.2023)

Changelog created, for earlier versions (< 0.3.0) see commit history.

## Dark mode

- Requires to change bunch of color variables especially in chart components such as StackedBar
- Added [Theme](./src/components/Theme) component. Setting dark color variables are no longer necessary and Theme component should be used instead to invert colors
- See theme CSS variables in [\_theme-light.scss](./src/stylesheets/themes/_theme-light.scss) & [\_theme-dark.scss](./src/stylesheets/themes/_theme-dark.scss)
- All `color: 'negative'` properties removed from every component

## Other changes

- All `bc-` prefixes renamed to `b-` (Biocode is a single word)
- All SCSS color variables removed
- Added Wordmark component, especially Biocode wordmark for branding purposes
- Wordmark -> Mark. New marks added: **product**, **report**, **productMuted**, **reportMuted**, **reportSmall**, **reportSmallMuted**, **biocodePrimary**. Biocode logomark and producer mark updated. Import/export marks individually to reduce bundle size.
- Moved (almost) all of the SCSS variables to CSS variables for clarity. See [\_variables.scss](./src/stylesheets/_variables.scss)
- Grid: Breakpoints needs to be configured in the module itself like so:
- Added color Palette
- Added SiteHeader and SiteFooter components
- Separate Subtitle from Heading into new component [#PR46](https://github.com/joonassandell/biocode-design-system/pull/46)

```scss
@use '@biocode/ds/scss/Grid' with (
  $s: true,
  $xl: true
);
```

- Component modifiers are now located per component in _\_<Component>.variables.scss_
- Removed: _grid.scss_, _\_cssVariables.scss_, _Name_, _View_
- Deprecated: _ServiceNavbar_, _ServiceSelect_
- Added missing prefixes to css helpers
- Number renamed to Digit to prevent name collision with JavaScript
- Button: removed info variant, made variants work with default button only
- Button: secondary modifier removed, use default modifier instead (with Theme dark mode the default button will have a dark background so it somewhat matches with the previous secondary button)
- Constants in config.ts renamed to constant naming convention e.g. **easing** -> **EASING** or **transDefault** -> **TRANS_DEFAULT**
- \_config.scss, \_mixins.scss, fonts/ -> stylesheets/generic, \_typography.scss -> \_base.scss
- config.ts -> lib/, utils/ -> lib/utils/, hooks from lib/\* -> lib/hooks/

# Version 0.2.2

- Table supports hidden columns and filters for hidden columns.
- Breaking change: TableFilters: prop `headerGroups` has been replaced with `allColumns`
