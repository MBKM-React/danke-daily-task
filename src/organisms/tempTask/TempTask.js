import React, { useState, useEffect, useRef } from 'react'
import Typography from '../../atoms/typography/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import Masonry from 'react-masonry-css'
import swal from 'sweetalert'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AddTaskForm from '../addTaskForm/AddTaskForm'
import Divider from '@material-ui/core/Divider';
import FabWithZoom from '../../atoms/button/FabWithZoom'
import TaskDescriptionItem from '../../molecules/taskDescriptionItem/TaskDescriptionItem'
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
   pageTitle: {
      marginBottom: 40
   },
   textDescription: {
      marginTop: 10
   },
   buttonContainer: {
      textAlign: 'center'
   },
   button: {
      paddingLeft: 50,
      paddingRight: 50
   },
   cardHeader: {
      paddingBottom: 2
   },
   cardContent: {
      paddingTop: 0,
   },
   addFab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
   },
   submitFab: {
      position: 'fixed',
      bottom: theme.spacing(3.4),
      right: theme.spacing(12),
      padding: 24,
      fontWeight: 400
   },
   deleteFab: {
      position: 'fixed',
      bottom: theme.spacing(3.4),
      right: theme.spacing(28),
      padding: 24,
      fontWeight: 400
   },
   dialogActions: {
      justifyContent: 'center',
      padding: 16
   },
   chip: {
      marginBottom: 6
   }
}))

const breakpoints = {
   default: 3,
   1100: 2,
   700: 1
}

const TempTask = (props) => {
   const scroll = 'paper'

   const {
      tempTask,
      handleDeleteTempTask,
      handleSubmitTempTask,
      handleAddTempTask,
      handleDeleteAllTask
   } = props

   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const descriptionElementRef = useRef(null);
   useEffect(() => {
      if (open) {
         const { current: descriptionElement } = descriptionElementRef;
         if (descriptionElement !== null) {
            descriptionElement.focus();
         }
      }
   }, [open]);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const onClickDelete = (id) => {
      swal({
         title: "Are You Sure?",
         text: `Once deleted, \nyou will not be able to restore this task!`,
         icon: "warning",
         buttons: ["Cancel", "Okay"],
         dangerMode: true,
      })
         .then((willDelete) => {
            if (willDelete) {
               handleDeleteTempTask(id)
               swal({
                  title: "Task Deleted Successfully",
                  icon: "success",
                  button: "Okay",
               })
            }
         })
   }

   const onClickSubmit = () => {
      const totalDuration = tempTask.reduce((sum, currPosition) => {
         return sum + currPosition['totalDuration']
      }, 0)

      if(totalDuration > 8) {
         swal({
            title: "Maximum 8 Work Hours",
            icon: "error",
            button: "Okay",
         })
         return
      }

      handleSubmitTempTask()
      swal({
         title: "Task Submitted Successfully",
         text: "Check \"All Task\" menu!",
         icon: "success",
         button: "Okay",
      })
   }

   const onClickDeleteAll = () => {
      swal({
         title: "Are You Sure?",
         text: `Once deleted, \nyou will not be able to restore all this task!`,
         icon: "warning",
         buttons: ["Cancel", "Okay"],
         dangerMode: true,
      })
         .then((willDelete) => {
            if (willDelete) {
               handleDeleteAllTask()
               swal({
                  title: "All Tasks Successfully Deleted",
                  icon: "success",
                  button: "Okay",
               })
            }
         })
   }

   return (
      <>
         <Typography
            text="Temporary Task"
            variant="h4"
            align="center"
            className={classes.pageTitle} />

         <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

            {tempTask.map((item => (
               <div key={item.id}>
                  <Card elevation={3}>
                     <CardHeader
                        action={
                           <IconButton
                              aria-label="settings"
                              onClick={() => onClickDelete(item.id)}>
                              <HighlightOffIcon color="secondary" />
                           </IconButton>
                        }
                        titleTypographyProps={{ variant: 'h5' }}
                        title={
                           <>
                              {item.activityName} <Chip
                                 label={`${item.totalDuration} Hours`}
                                 color="primary"
                                 size="small"
                                 variant="outlined"
                                 className={classes.chip} />
                           </>
                        }
                        subheaderTypographyProps={{ variant: 'caption' }}
                        subheader={`${item.date} (${item.startTime} - ${item.endTime})`}
                        className={classes.cardHeader} />

                     <Divider
                        variant="middle"
                        style={{ marginTop: '8px' }} />

                     <CardContent className={classes.cardContent}>
                        <TaskDescriptionItem value={item.taskDescription} />
                     </CardContent>
                  </Card>
               </div>
            )))}
         </Masonry>

         {tempTask.length > 1
            ? (
               <>
                  <FabWithZoom
                     text="Delete All Task"
                     color="secondary"
                     variant="extended"
                     size="large"
                     styles={classes.deleteFab}
                     handleOnClick={onClickDeleteAll} />

                  <FabWithZoom
                     text="Submit Task"
                     color="primary"
                     variant="extended"
                     size="large"
                     styles={classes.submitFab}
                     handleOnClick={onClickSubmit} />
               </>
            )
            : tempTask.length > 0
               ? (<FabWithZoom
                  text="Submit Task"
                  color="primary"
                  variant="extended"
                  size="large"
                  styles={classes.submitFab}
                  handleOnClick={onClickSubmit} />)
               : (<div>
                  <Typography
                     text="There are no temporary task yet."
                     align="center"
                     color="textSecondary" />
               </div>)}

         <FabWithZoom
            text={<AddIcon />}
            color="primary"
            styles={classes.addFab}
            handleOnClick={handleClickOpen} />

         <Dialog
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
                  text="Add Task"
                  variant="h4"
                  component="div" />
            </DialogTitle>
            <DialogContent dividers={scroll}>
               <DialogContentText
                  id="scroll-dialog-description"
                  component="div"
                  ref={descriptionElementRef}
                  tabIndex={-1}>

                  <AddTaskForm
                     tempTask={tempTask}
                     handleAddTempTask={handleAddTempTask}
                     handleFabClose={handleClose} />

               </DialogContentText>
            </DialogContent>
         </Dialog>
      </>
   )
}

export default TempTask