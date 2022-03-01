const component = name => `import React from 'react';
import styles from './${name}.module.scss';

const ${name} = ({}) => {
    return (
        <div className={styles.${name}}>${name}</div>
    );
};

export default ${name};`;

const style = name => `.${name} {}`;

const fs = require('fs');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
// component.scss
fs.writeFile(`${dir}/${name}.module.scss`, style(name), writeFileErrorHandler);