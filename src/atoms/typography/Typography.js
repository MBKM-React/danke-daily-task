import React from 'react'
import Typograph from '@material-ui/core/Typography'

const Typography = (props) => {
   const {
      text,
      variant,
      component,
      color,
      align,
      noWrap,
      gutterBottom,
      className,
      styles
   } = props

   return (
      <>
         <Typograph
            variant={variant}
            component={component}
            color={color}
            align={align}
            noWrap={noWrap}
            gutterBottom={gutterBottom}
            className={className}
            style={styles}>
            {text}
         </Typograph>
      </>
   )
}

export default Typography