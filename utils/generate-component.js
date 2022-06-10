require('colors')
const fs = require('fs')
const templates = require('./component-template')

const componentName = process.argv[2]

if (!componentName) {
    console.error('Please supply a valid component name'.red)
    process.exit(1)
}

console.log('Creating Component Templates with name: ' + componentName)

const componentDirectory = `./components/${componentName}`

if (fs.existsSync(componentDirectory)) {
    console.error(`Component ${componentName} already exists.`.red)
    process.exit(1)
}

fs.mkdirSync(componentDirectory)

const generatedTemplates = templates.map((template) => template(componentName))

generatedTemplates.forEach((template) => {
    fs.writeFileSync(`${componentDirectory}/${template.name}`, template.content)
})

console.log('Successfully created component under: ' + componentDirectory.green)
