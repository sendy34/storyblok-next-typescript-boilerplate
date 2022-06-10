module.exports = (componentName) => ({
  content: `export { default } from './${componentName}'
`,
  name: 'index.tsx',
})
