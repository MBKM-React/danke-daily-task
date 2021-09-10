import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TopBar from '../molecules/topBar/TopBar'
import SideBar from '../molecules/sideBar/SideBar'
import AllTask from '../organisms/allTask/AllTask'
import TempTask from '../organisms/tempTask/TempTask'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      justifyContent: 'center'
   },
   // Necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   content: {
      flexGrow: 0.4,
      padding: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
         flexGrow: 0.6,
         padding: theme.spacing(2)
      },
   }
}))

const TEMP_TASK_KEY = 'dailyTaskApp.tempTask'
const ALL_TASK_KEY = 'dailyTaskApp.allTask'

const MainLayout = () => {
   const classes = useStyles()
   const [mobileOpen, setMobileOpen] = useState(false)
   const [currPage, setCurrPage] = useState('All Task')
   const [tempTask, setTempTask] = useState(allTempTask)
   const [tasks, setTasks] = useState(allTasks)

   useEffect(() => {
      const tempTaskJSON = localStorage.getItem(TEMP_TASK_KEY)
      const allTaskJSON = localStorage.getItem(ALL_TASK_KEY)

      if (tempTaskJSON !== null) setTempTask(JSON.parse(tempTaskJSON))

      if (allTaskJSON !== null) setTasks(JSON.parse(allTaskJSON))
   }, [])

   useEffect(() => {
      localStorage.setItem(TEMP_TASK_KEY, JSON.stringify(tempTask))
   }, [tempTask])

   useEffect(() => {
      localStorage.setItem(ALL_TASK_KEY, JSON.stringify(tasks))
   }, [tasks])

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

   const handleChangePage = (page) => {
      setCurrPage(page)
   }

   const handleAddTempTask = (newTask) => {
      setTempTask([...tempTask, newTask])
   }

   const handleDeleteTempTask = (id) => {
      setTempTask(tempTask.filter((item) => item.id !== id))
   }

   const handleDeleteAllTask = () => {
      setTempTask([])
   }

   const handleSubmitTempTask = () => {
      setTasks([...tasks, tempTask])
      setTempTask([])
   }

   const handleDeleteTask = (index) => {
      setTasks(tasks.filter((item, i) => i !== index))
   }

   const handleUpdateStatusTask = (index, statusUpdate) => {
      const res = tasks.map((task, i) => i === index ? task.map(item => {
         return {...item, status: statusUpdate}
      }) : task)
      setTasks(res)
   }

   return (
      <>
         <div className={classes.root}>
            <TopBar handleDrawerToggle={handleDrawerToggle} />
            <SideBar
               mobileOpen={mobileOpen}
               handleDrawerToggle={handleDrawerToggle}
               handleChangePage={handleChangePage}
               currPage={currPage} />
            <main className={classes.content} >
               <div className={classes.toolbar} />

               {/* 3 Sections */}
               {/* {currPage === 'All Task'
                  ? <AllTask
                     tasks={tasks}
                     handleDeleteTask={handleDeleteTask} />
                  : currPage === 'Temp Task'
                     ? <TempTask
                        tempTask={tempTask}
                        handleDeleteTempTask={handleDeleteTempTask}
                        handleSubmitTempTask={handleSubmitTempTask}
                        handleCancle={setCurrPage}
                        handleAddTempTask={handleAddTempTask} />
                     : <AddTaskForm
                        tempTask={tempTask}
                        handleCancle={setCurrPage}
                        handleAddTempTask={handleAddTempTask} />} */}

               {/* 2 Sections */}
               {currPage === 'All Task'
                  ? <AllTask
                     tasks={tasks}
                     handleDeleteTask={handleDeleteTask}
                     handleUpdateStatusTask={handleUpdateStatusTask} />
                  : <TempTask
                     tempTask={tempTask}
                     handleDeleteTempTask={handleDeleteTempTask}
                     handleSubmitTempTask={handleSubmitTempTask}
                     handleAddTempTask={handleAddTempTask}
                     handleDeleteAllTask={handleDeleteAllTask} />}
            </main>
         </div>
      </>
   )
}

const allTempTask = [
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

const allTasks = [
   [
      { "id": 6216, "activityName": "Training", "date": "2021-09-06", "startTime": "08:00", "endTime": "11:00", "taskDescription": "- useMemo\n- useRef", "totalDuration": 3, "status": "Pending" },
      { "id": 7173, "activityName": "Exploring ", "date": "2021-09-06", "startTime": "11:00", "endTime": "17:00", "taskDescription": "- Manipulasi Element pada DOM dengan useRef\n- Auto Focus Input Element in ReactJS\n- Multiple refs For Handling Form Elements menggunakan React Hook\n- Penggunaan React Hook Form ", "totalDuration": 5, "status": "Pending" }
   ],
   [
      { "id": 7554, "activityName": "Training ", "date": "2021-09-07", "startTime": "08:00", "endTime": "11:00", "taskDescription": "- Review useRef\n- Implementasi React Hook Form\n- useContext\n- useReducer\n- Group Task (1 Person, 1 Page)", "totalDuration": 3, "status": "Pending" },
      { "id": 78, "activityName": "Exploring", "date": "2021-09-07", "startTime": "11:00", "endTime": "17:00", "taskDescription": "- Penggunaan useCallback\n- Diskusi konsep Group Task", "totalDuration": 5, "status": "Pending" }
   ],
   [
      { "id": 8896, "activityName": "Training", "date": "2021-09-08", "startTime": "08:00", "endTime": "11:00", "taskDescription": "- useCallback\n- Pengerjaan Tugas Individu", "totalDuration": 3, "status": "Pending" },
      { "id": 1685, "activityName": "Exploring", "date": "2021-09-08", "startTime": "11:00", "endTime": "15:00", "taskDescription": "- Penggunaan React Bootstrap\n- Penggunaan React Icons\n- Penggunaan SweetAlert", "totalDuration": 3, "status": "Pending" },
      { "id": 4478, "activityName": "Review Progress Tugas", "date": "2021-09-08", "startTime": "15:00", "endTime": "17:00", "taskDescription": "- Demo Tugas\n- Mendapatkan Saran", "totalDuration": 2, "status": "Pending" }
   ],
   [
      { "id": 3267, "activityName": "Individual Task", "date": "2021-09-10", "startTime": "08:00", "endTime": "14:00", "taskDescription": "- Membuat section baru (Temp Task)\n- Membuat tampilan dari Temp Task & All Task\n- Penggunaan Card & Accordion pada Material UI", "totalDuration": 5, "status": "Pending" },
      { "id": 1206, "activityName": "Review Progress", "date": "2021-09-10", "startTime": "14:00", "endTime": "17:00", "taskDescription": "- Demo Aplikasi\n- Mendapatkan saran perbaikan\n- Mengubah beberapa bagian Component\n- Improve penggunaan warna", "totalDuration": 3, "status": "Pending" }
   ],
   [
      { "id": 2143, "activityName": "Review", "date": "2021-09-20", "startTime": "08:00", "endTime": "11:00", "taskDescription": "- State & Lifecycle in ReactJS", "totalDuration": 3, "status": "Pending" },
      { "id": 72, "activityName": "Exploring", "date": "2021-09-20", "startTime": "11:00", "endTime": "17:00", "taskDescription": "- React Hook\n- useState\n- useEffect\n- useMemo\n- useRef\n- useContext\n- useReducer\n- useCallback\n- Creating Custom Hooks", "totalDuration": 5, "status": "Pending" }
   ]
]

export default MainLayout