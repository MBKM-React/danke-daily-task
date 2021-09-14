import React from 'react'
import FabWithZoom from './FabWithZoom'
import AddIcon from '@material-ui/icons/Add'

export default {
   title: "My Components/Button/Floating Action Button",
   component: FabWithZoom,
   argTypes: { handleOnClick: { action: "handleOnClick" } }
}

const Template = (args) => <FabWithZoom {...args} />

// Color
export const Primary = Template.bind({})
Primary.args = {
   text: "FAB",
   color: "primary",
   variant: "circular",
   size: "large",
}

export const Secondary = Template.bind({})
Secondary.args = {
   text: "FAB",
   color: "secondary",
   variant: "circular",
   size: "large",
}

// Variant
export const Extended = Template.bind({})
Extended.args = {
   text: "this is Extended FAB",
   color: "default",
   variant: "extended",
   size: "large",
}

export const Circular = Template.bind({})
Circular.args = {
   text: "FAB",
   color: "default",
   variant: "circular",
   size: "large",
}

// Size
export const Small = Template.bind({})
Small.args = {
   text: "FAB",
   color: "default",
   variant: "circular",
   size: "small",
}

export const Medium = Template.bind({})
Medium.args = {
   text: "FAB",
   color: "default",
   variant: "circular",
   size: "medium",
}

export const Large = Template.bind({})
Large.args = {
   text: "FAB",
   color: "default",
   variant: "circular",
   size: "large",
}

// Custom Text
export const CustomText = Template.bind({})
CustomText.args = {
   text: <AddIcon />,
   color: "default",
   variant: "circular",
   size: "large",
}