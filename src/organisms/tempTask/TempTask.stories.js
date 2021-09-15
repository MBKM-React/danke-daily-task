import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import TempTask from './TempTask'

export default {
   title: "My Components/TempTask",
   component: TempTask,
   argTypes: {
      handleDeleteTempTask: { action: "handleDeleteTempTask" },
      handleSubmitTempTask: { action: "handleSubmitTempTask" },
      handleAddTempTask: { action: "handleAddTempTask" },
      handleDeleteAllTask: { action: "handleDeleteAllTask" },
   },
   decorators: [
      (TempTask) => (<MemoryRouter><TempTask /></MemoryRouter>)
   ]
}

const Template = (args) => <TempTask {...args} />

export const TemporaryTask = Template.bind({})
TemporaryTask.args = {
   tempTask: [
      {
         id: 1,
         activityName: 'Training',
         date: '2021-09-01',
         startTime: '08:00',
         endTime: '11:00',
         taskDescription: 'Penggunaan React Hook\n- useState\n- useEffect\n- useMemo\n- useCallback\n- useContext\n- dsb.',
         totalDuration: 3,
         status: "Pending"
      },
      {
         id: 2,
         activityName: 'Review',
         date: '2021-09-01',
         startTime: '11:00',
         endTime: '17:00',
         taskDescription: '- Demo Aplikasi\n- Mendapatkan Masukkan\n- UI Improvement\n- Temporary Table',
         totalDuration: 5,
         status: "Pending"
      },
   ]
}