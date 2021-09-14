import React from 'react'
import Layout from './MainLayout'

export default {
   title: "My Components/MainLayout",
   component: Layout,
}

const Template = (args) => <Layout {...args} />

export const MainLayout = Template.bind({})