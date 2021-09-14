import React from 'react'
import Form from './AddTaskForm'

export default {
   title: "My Components/AddTaskForm",
   component: Form,
   argTypes: { handleAddTempTask: { action: "handleAddTempTask" },
               handleFabClose: { action: "handleFabClose" } }
}

const Template = (args) => <Form {...args} />

export const AddTaskForm = Template.bind({})
AddTaskForm.args = {
   tempTask: []
}