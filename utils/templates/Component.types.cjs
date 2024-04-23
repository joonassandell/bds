module.exports = componentName => ({
  content: `import { type PropsWithChildren } from 'react';

export interface ${componentName}Props extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Remember to add comment for each prop to clarify its purpose if necessary
   *
   * @defaultValue foo
   * @param foo Description of the value \`'foo'\`
   * @param bar Description of the value \`'bar'\`
   */
  variant?: 'foo' | 'bar';
}
`,
  extension: `.types.ts`,
});
