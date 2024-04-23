module.exports = componentName => ({
  content: `@use "../../stylesheets/mixins" as *;

.b-${componentName} {}
`,
  extension: `.scss`,
  name: `_${componentName}`,
});
