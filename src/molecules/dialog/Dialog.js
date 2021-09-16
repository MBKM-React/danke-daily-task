import React, { useEffect } from 'react'
import DialogUI from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddTaskForm from '../../organisms/addTaskForm/AddTaskForm'
import EditTaskForm from '../../organisms/editTaskForm/EditTaskForm'
import Typography from '../../atoms/typography/Typography'
import { useParams, useHistory } from 'react-router-dom'

const Dialog = (props) => {
   const {
      open,
      handleClose,
      descriptionElementRef,
      tempTask,
      handleAddTempTask,
      handleUpdateTempTask,
      instruction
   } = props

   const { id } = useParams()
   const history = useHistory()
   const item = tempTask.find((items) => items.id === parseInt(id))

   return (
      <DialogUI
         open={open}
         onClose={handleClose}
         scroll="paper"
         aria-labelledby="scroll-dialog-title"
         aria-describedby="scroll-dialog-description"
         fullWidth>
         <DialogTitle
            id="scroll-dialog-title"
            align="center">
            <Typography
               text={instruction === "Add" ? "Add Task" : "Update Task"}
               variant="h4"
               component="div" />
         </DialogTitle>
         <DialogContent>
            <DialogContentText
               id="scroll-dialog-description"
               component="div"
               ref={descriptionElementRef}
               tabIndex={-1}>

               {instruction === "Add"
                  ? (<AddTaskForm
                     tempTask={tempTask}
                     handleAddTempTask={handleAddTempTask}
                     handleFabClose={handleClose} />)
                  : instruction === "Update" && item !== undefined
                     ? (<EditTaskForm
                        item={item}
                        handleUpdateTempTask={handleUpdateTempTask} />)
                     : history.push("/404")}

            </DialogContentText>
         </DialogContent>
      </DialogUI>
   )
}

export default Dialog
