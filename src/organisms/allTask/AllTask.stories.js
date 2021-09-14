import React from 'react'
import AllTaskComponent from './AllTask'

export default {
   title: "My Components/AllTask",
   component: AllTaskComponent,
   argTypes: {
      handleDeleteTask: { action: "handleDeleteTask" },
      handleUpdateStatusTask: { action: "handleUpdateStatusTask" }
   }
}

const Template = (args) => <AllTaskComponent {...args} />

export const AllTask = Template.bind({})
AllTask.args = {
   tasks: [
      [
         { "id": 6216, "activityName": "Training", "date": "2021-09-06", "startTime": "08:00", "endTime": "11:00", "taskDescription": "- useMemo\n- useRef", "totalDuration": 3, "status": "Pending" },
         { "id": 7173, "activityName": "Exploring ", "date": "2021-09-06", "startTime": "11:00", "endTime": "17:00", "taskDescription": "- Manipulasi Element pada DOM dengan useRef\n- Auto Focus Input Element in ReactJS\n- Multiple refs For Handling Form Elements menggunakan React Hook\n- Penggunaan React Hook Form ", "totalDuration": 5, "status": "Pending" }
      ],
   ]
}