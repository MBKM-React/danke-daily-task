import React from 'react'
import Button from './Button'

export default {
   title: "My Components/Button/Default Button",
   component: Button,
}

const Template = (args) => <Button {...args} />

// Variant
export const Contained = Template.bind({})
Contained.args = {
   text: "Button",
   variant: "contained",
   color: "default",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
   text: "Button",
   variant: "outlined",
   color: "default",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: false,
}

export const Text = Template.bind({})
Text.args = {
   text: "Button",
   variant: "text",
   color: "default",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: false,
}

// Color
export const Primary = Template.bind({})
Primary.args = {
   text: "Button",
   variant: "contained",
   color: "primary",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
   text: "Button",
   variant: "contained",
   color: "secondary",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: false,
}

// Size
export const Large = Template.bind({})
Large.args = {
   text: "Button",
   variant: "contained",
   color: "default",
   size: "large",
   type: "button",
   fullWidth: false,
   disabled: false,
}

export const Small = Template.bind({})
Small.args = {
   text: "Button",
   variant: "contained",
   color: "default",
   size: "small",
   type: "button",
   fullWidth: false,
   disabled: false,
}

// FullWidth
export const FullWidth = Template.bind({})
FullWidth.args = {
   text: "Button",
   variant: "contained",
   color: "default",
   size: "medium",
   type: "button",
   fullWidth: true,
   disabled: false,
}

// Disabled
export const Disabled = Template.bind({})
Disabled.args = {
   text: "Button",
   variant: "contained",
   color: "default",
   size: "medium",
   type: "button",
   fullWidth: false,
   disabled: true,
}