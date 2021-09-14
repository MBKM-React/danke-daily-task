import React from 'react'
import TaskDescriptionItem from './TaskDescriptionItem'

export default {
   title: "My Components/TaskDescriptionItem",
   component: TaskDescriptionItem,
}

const Template = (args) => <TaskDescriptionItem {...args} />

export const Item = Template.bind({})
Item.args = {
   value: "Penggunaan React Hook\n- useState\n- useEffect\n- useMemo\n- useCallback\n- useContext\n- dsb.",
}