import React from 'react'
import TopBar from './TopBar'

export default {
   title: "My Components/TopBar",
   component: TopBar,
   argTypes: { handleDrawerToggle: { action: "handleDrawerToggle" } },
}

const Template = (args) => <TopBar {...args} />

export const Topbar = Template.bind({})