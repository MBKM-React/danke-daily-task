import React from 'react'
import TxtField from '@material-ui/core/TextField'

const TextField = (props) => {
   const {
      id,
      label,
      type,
      defaultValue,
      variant,
      value,
      InputProps,
      onChange,
      onKeyPress,
      fullWidth,
      error,
      required,
      disabled,
      helperText,
      multiline,
      rows,
      InputLabelProps,
      className,
      styles
   } = props

   return (
      <>
         <TxtField 
            id={id}
            label={label}
            type={type}
            defaultValue={defaultValue}
            variant={variant}
            value={value}
            InputProps={InputProps}
            onChange={onChange}
            onKeyPress={onKeyPress}
            fullWidth={fullWidth}
            error={error}
            required={required}
            disabled={disabled}
            helperText={helperText}
            multiline={multiline}
            rows={rows}
            InputLabelProps={InputLabelProps}
            className={className}
            style={styles} />
      </>
   )
}

export default TextField