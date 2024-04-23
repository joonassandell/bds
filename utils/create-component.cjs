require('colors');
const fs = require('fs');
const templates = require('./templates/templates.cjs');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log(
  'Creating component templates with the name: ' + componentName.bold,
);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(template => template(componentName));

generatedTemplates.forEach(template => {
  let name = template.name ? template.name : componentName;

  fs.writeFileSync(
    `${componentDirectory}/${name}${template.extension}`,
    template.content,
  );
});

console.log(
  'Successfully created component under: ' + componentDirectory.green,
);

console.log(
  'Remember to add '.yellow +
    "@use '../components/".yellow.bold +
    componentName.yellow.bold +
    "';".yellow.bold +
    ' to ./src/stylesheets/_components.scss'.yellow,
);
