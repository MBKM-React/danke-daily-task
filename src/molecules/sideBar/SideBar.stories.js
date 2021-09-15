import React from 'react'
import SideBar from './SideBar'
import { MemoryRouter } from 'react-router-dom'

export default {
   title: "My Components/SideBar",
   component: SideBar,
   argTypes: {
      handleDrawerToggle: { action: "handleDrawerToggle" },
   },
   decorators: [
      (SideBar) => (<MemoryRouter><SideBar /></MemoryRouter>)
   ]
}

const Template = (args) => <SideBar {...args} />

export const AllTask = Template.bind({})
AllTask.args = {
   mobileOpen: false
}

export const TempTask = Template.bind({})
TempTask.args = {
   mobileOpen: false
}