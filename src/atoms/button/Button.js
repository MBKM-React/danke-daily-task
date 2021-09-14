import React from 'react'
import PropTypes from 'prop-types'
import Btn from '@material-ui/core/Button'

const Button = (props) => {
   const {
      text,
      variant,
      color,
      size,
      type,
      align,
      fullWidth,
      disabled,
      className,
      onClick,
   } = props

   return (
      <>
         <Btn
            variant={variant}
            color={color}
            size={size}
            type={type}
            align={align}
            fullWidth={fullWidth}
            disabled={disabled}
            className={className}
            onClick={onClick}>
            {text}
         </Btn>
      </>
   )
}

Button.propTypes = {
   /**
    * The content displayed on the button
    */
   text: PropTypes.string,
   /**
    * The variant to use
    */
   variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
   /**
    * The color of the component
    */
   color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
   /**
    * The size of the button
    */
   size: PropTypes.oneOf(['large', 'medium', 'small']),
   /**
    * The type of the button
    */
   type: PropTypes.oneOf(['button', 'submit', 'reset']),
   /**
    * The align of the button
    */
   align: PropTypes.oneOf(['center', 'left', 'right']),
   /**
    * If true, the button will take up the full width of its container
    */
   fullWidth: PropTypes.bool,
   /**
    * If true, the button will be disabled
    */
   disabled: PropTypes.bool,
   /**
    * The styles for the button
    */
   className: PropTypes.string,
   /**
    * The click handler for the button
    */
   onClick: PropTypes.func
}

export default Button
