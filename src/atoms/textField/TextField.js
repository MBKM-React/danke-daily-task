import React from 'react'
import PropTypes from 'prop-types'
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

TextField.propTypes = {
   /**
    * The label displayed on the text field
    */
   label: PropTypes.string,
   /**
    * Type of the input element. It should be a valid HTML5 input type
    */
   type: PropTypes.oneOf(["text", "date", "time"]),
   /**
    * The variant to use
    */
   variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
   /**
    * The value of the input element, required for a controlled component
    */
   value: PropTypes.string,
   /**
    * The change handler for the text field
    */
   onChange: PropTypes.func,
   /**
    * If true, the text field will take up the full width of its container
    */
   fullWidth: PropTypes.bool,
   /**
    * If true, the label will be displayed in an error state
    */
   error: PropTypes.bool,
   /**
    * If true, the label is displayed as required and the input element will be required
    */
   required: PropTypes.bool,
   /**
    * If true, the input element will be disabled
    */
   disabled: PropTypes.bool,
   /**
    * If true, a textarea element will be rendered instead of an input
    */
   multiline: PropTypes.bool,
   /**
    * Number of rows to display when multiline option is set to true
    */
   rows: PropTypes.number
}

export default TextField