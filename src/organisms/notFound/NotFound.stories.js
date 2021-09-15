import React from 'react'
import NotFoundPage from './NotFound'

export default {
   title: "My Components/NotFound",
   component: NotFoundPage,
}

const Template = (args) => <NotFoundPage {...args} />

export const NotFound = Template.bind({})