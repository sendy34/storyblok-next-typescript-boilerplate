module.exports = (componentName) => ({
  content: `@import "../../styles/common.scss";

.${componentName.toLowerCase()} {
}
`,
  name: `${componentName}.module.scss`,
})
