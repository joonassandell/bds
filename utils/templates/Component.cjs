module.exports = componentName => ({
  content: `import { type ${componentName}Props } from './${componentName}.types';
import c from 'clsx';
import React, { type FC } from 'react';

export const ${componentName}: FC<${componentName}Props> = ({
  className,
  children,
  variant = 'foo',
}) => {
  const classes = c(className, 'b-${componentName}', {
    'b-${componentName}--foo': variant === 'foo',
  });

  return <div className={classes}>{children}</div>;
};
`,
  extension: `.tsx`,
});
