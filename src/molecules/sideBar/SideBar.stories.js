import React from 'react'
import SideBar from './SideBar'

export default {
   title: "My Components/SideBar",
   component: SideBar,
   argTypes: { handleDrawerToggle: { action: "handleDrawerToggle" },
               handleChangePage: { action: "handleChangePage" } }
}

const Template = (args) => <SideBar {...args} />

export const AllTask = Template.bind({})
AllTask.args = {
   mobileOpen: false,
   currPage: "All Task"
}

export const TempTask = Template.bind({})
TempTask.args = {
   mobileOpen: false,
   currPage: "Temp Task"
}