<img width="96" src="./biocode-icon.svg" alt="Biocode Logomark">

# Biocode Design System

> High-quality UI library for building applications with React, TypeScript and Sass

This repository is a stripped and unpublished version of [Biocode](https://biocode.io)'s design system to showcase how we build our application interfaces.

## Development

Aside from this readme, [our engineering documentation](#) includes additional development instructions (such as how to use variables and structure content). It's important that you are familiar with the rules documented.

### Getting started

1. Clone this repository `git clone git@github.com:joonassandell/biocode-design-system.git` and navigate to the directory
2. Follow the [Git flow](#git-flow)
3. Install dependencies: `npm install`
4. Get started with Storybook: `npm run storybook`

### Scripts

- `npm run storybook`: Run a live-reload Storybook server on your local machine
- `npm run build`: Build components
- `npm run generate <ComponentName>`: Create a new component
- `COMPONENT=<ComponentName> npm run dev`: Watch and build single components. Read [Linking and watching components](#linking-and-watching-components)

### Git flow

1. Create new branch `feat/<your-branch-name>` from `main` branch
2. [Create an awesome component](#creating-components) or do your changes
3. Create pull request
4. Once pull request is approved, let's merge (or squash) it to `main` branch and delete your pull request

### Creating components

1. Follow the [Git flow](#git-flow)
2. [Generate new component](#generating-new-component) `npm run generate <ComponentName>`
3. Export the component in [src/index.ts](./src/index.ts)
4. Import possible component SCSS in [src/stylesheets/\_components.scss](./src/stylesheets/_components.scss) for Storybook usage

### Generating new component

There's a handy Node.js utility under [utils](./utils) called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate <ComponentName>
```

This will generate:

```
src/
|── ComponentName/
|   |── _ComponentName.scss
|   |── ComponentName.stories.tsx
|   |── ComponentName.tsx
|   |── ComponentName.types.ts
|   |── index.scss
|   |── index.ts
```

### Publishing new versions

1. Do the steps in [git flow](#git-flow)
2. Make sure you're in `main` branch
3. Make sure [CHANGELOG](./CHANGELOG.md) matches your changes, doesn't need to be super specific
4. Increment the version in package.json (e.g. `0.5.1` -> `0.5.2`) and commit all the changes
5. Add git version tag with the version number to the commit (e.g. `v0.5.2`)
6. Publish components to Github packages `npm publish`
7. Push changes including the tag to Github

## Getting started in the consuming application

### Requirements

- [React.js](https://reactjs.org) preferrably with [TypeScript](https://www.typescriptlang.org/)
- [Dart Sass](https://sass-lang.com/dart-sass) bundler
- JavaScript bundler with ES modules support. So far this library is succesfully tested with [Next.js](https://nextjs.org), [Create React App](https://create-react-app.dev) and [Vite](https://vitejs.dev).

### Installation

1. Copy [.npmrc](.npmrc) to your project's root
2. `npm install @biocode/ds`

### Usage

1. Wrap your application with Provider:

```tsx
// index.tsx
import { App } from './App';
import { Provider } from '@biocode/ds';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <App />
  </Provider>,
);
```

2. Include base styles and component SCSS you need:

```scss
// index.scss

// Biocode design system base styles and helpers
@use '@biocode/ds/scss';

// Components
@use '@biocode/ds/scss/Button';
@use '@biocode/ds/scss/Heading';
@use '@biocode/ds/scss/<ComponentName>';
...
```

3. Use components:

```tsx
// Component.tsx
import { Heading, Button } from '@biocode/ds';

export const Component = () => (
  <>
    <Heading>Hello I'm consuming the @biocode/ds library</Heading>
    <Button modifier="primary">Hi, I'm primary button</Button>
  </>
);
```

4. Use tokens and mixins:

```scss
// YourComponent.scss
@use '@biocode/ds/scss/mixins' as *;

.YourComponent {
  padding: var(--b-space);

  @include hoverFocusVisible {
    color: var(--b-primary);
  }
}
```

This library assumes that your project has a bundler with a tree-shaking feature such as Create React App, Next.js or Vite do. Otherwise all the components could be imported which can significantly increase the amount of code sent to the client.

## Linking and watching components

You can [npm link](https://docs.npmjs.com/cli/v8/commands/npm-link) this package and the consuming application to use the components locally:

1. Link in your local @biocode/ds directory (most likely in ds/): `npm link`
2. Build your local components `npm run build`
3. In the consuming applications directory: `npm link @biocode/ds`

Now components should be linked to your project and you can rebuild whenever you need to get the latest changes. However, it's recommended to [rebuild single components only](#single-component-watch) to rebuild only the wanted components.

If you need to unlink: run `npm unlink @biocode/ds` or `npm install` (assuming there's version applied in project's package.json) in consuming application's directory.

### Single component watch

1. In this package: `COMPONENT=<ComponentName> npm run dev` (e.g. `COMPONENT=Button npm run dev`)
2. In your project's client directory: Start the development server. Development server is assumed to have a watch mode, like Vite and Next.js does. This command is usually `npm run dev` but it depends on your project.
3. Now, when you edit the previously added `<ComponentName>`, it rebuilds and changes should visible in your linked project

You can also watch and rebuild multiple components at once e.g. `e.g. COMPONENT=Avatar,Badge,Button npm run dev`. Rebuilding single components is faster than rebuilding the entire library. Also, building the whole library may create weird error messages in clients.

## Notes

- Don't update the `@nivo/*` packages above `0.83.0` because of its incompatibility issues with Next.js: [https://github.com/plouc/nivo/issues/2310](https://github.com/plouc/nivo/issues/2310) [https://github.com/plouc/nivo/issues/2535](https://github.com/plouc/nivo/issues/2535)
- If you update Storybook then **make sure all the Storybook styles work correctly in [docs.scss](./storybook/docs.scss)**
- Focus is applied programmatically in many radix-ui popover components to the "Trigger" component (usually applied to Button). This causes unintentional focus outlines and other possible styles to activate unintentionally when using mouse. This is fixed in base level with [focus-visible polyfill](https://github.com/WICG/focus-visible) and some components utilize the SCSS mixin to apply appropriate styles. Read more: [https://github.com/WICG/focus-visible](https://github.com/WICG/focus-visible), [https://github.com/WICG/focus-visible/issues/88](https://github.com/WICG/focus-visible/issues/88), [https://github.com/radix-ui/primitives/issues/1803#issuecomment-1868605466](https://github.com/radix-ui/primitives/issues/1803#issuecomment-1868605466])
