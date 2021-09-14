import React from 'react'
import PropTypes from 'prop-types'
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

Typography.propTypes = {
   /**
    * The text displayed on the typography
    */
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   /**
    * The variant to use
    */
   variant: PropTypes.oneOf(["h1" ,"h2" ,"h3" ,"h4" ,"h5" ,"h6" ,"subtitle1" ,"subtitle2" ,"body1" ,"body2" ,"caption" ,"button" ,"overline" ,"srOnly" ,"inherit"]),
   /**
    * The color of the component
    */
   color: PropTypes.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
   /**
    * Set the text-align on the component
    */
   align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
   /**
    * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. 
    * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow)
    */
   noWrap: PropTypes.bool,
   /**
    * If true, the text will have a bottom margin
    */
   gutterBottom: PropTypes.bool
}

export default Typography