import React from 'react'
import TextField from './TextField'

export default {
   title: "My Components/TextField",
   component: TextField,
}

const Template = (args) => <TextField {...args} />

// Type
export const Text = Template.bind({})
Text.args = {
   label: "Text Field",
   type: "text",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

export const Date = Template.bind({})
Date.args = {
   label: "",
   type: "date",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

export const Time = Template.bind({})
Time.args = {
   label: "",
   type: "time",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

// Variant
export const Filled = Template.bind({})
Filled.args = {
   label: "Text Field",
   type: "text",
   variant: "filled",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

export const Outlined = Template.bind({})
Outlined.args = {
   label: "Text Field",
   type: "text",
   variant: "outlined",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

// FullWidth
export const FullWidth = Template.bind({})
FullWidth.args = {
   label: "Text Field",
   type: "text",
   variant: "standard",
   value: "",
   fullWidth: true,
   error: false,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

// Error
export const Error = Template.bind({})
Error.args = {
   label: "Text Field",
   type: "text",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: true,
   required: false,
   disabled: false,
   multiline: false,
   rows: 1
}

// Required
export const Required = Template.bind({})
Required.args = {
   label: "Text Field",
   type: "text",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: false,
   required: true,
   disabled: false,
   multiline: false,
   rows: 1
}

// Disabled
export const Disabled = Template.bind({})
Disabled.args = {
   label: "Text Field",
   type: "text",
   variant: "standard",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: true,
   multiline: false,
   rows: 1
}

// Multiline
export const Multiline = Template.bind({})
Multiline.args = {
   label: "Text Area",
   type: "text",
   variant: "outlined",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: true,
   rows: 5
}

// Custom Row
export const CustomRow = Template.bind({})
CustomRow.args = {
   label: "Text Area",
   type: "text",
   variant: "outlined",
   value: "",
   fullWidth: false,
   error: false,
   required: false,
   disabled: false,
   multiline: true,
   rows: 10
}