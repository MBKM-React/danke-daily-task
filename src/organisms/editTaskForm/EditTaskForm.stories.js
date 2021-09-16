import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import EditTaskForm from './EditTaskForm'

export default {
   title: "My Components/EditTaskForm",
   component: EditTaskForm,
   argTypes: { handleUpdateTempTask: { action: "handleUpdateTempTask" } },
   decorators: [
      (EditTaskForm) => (<MemoryRouter><EditTaskForm /></MemoryRouter>)
   ]
}

const Template = (args) => <EditTaskForm {...args} />

export const EditTempTaskForm = Template.bind({})
EditTempTaskForm.args = {
   item: {
      id: 1,
      activityName: 'Training',
      date: '2021-09-01',
      startTime: '08:00',
      endTime: '11:00',
      taskDescription: 'Penggunaan React Hook\n- useState\n- useEffect\n- useMemo\n- useCallback\n- useContext\n- dsb.',
      totalDuration: 3,
      status: "Pending"
   },
}
