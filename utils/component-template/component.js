module.exports = (componentName) => ({
  content: `import React from 'react'
import styles from './${componentName}.module.scss'

export interface IProps {

}

const ${componentName}: React.FC<IProps> = ({ className = '', ...rest }) => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
    </div>
  )
}

export default ${componentName}
`,
  name: `${componentName}.tsx`,
})
