import React from 'react'
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

export default Button
