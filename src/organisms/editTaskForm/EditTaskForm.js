import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import TextField from '../../atoms/textField/TextField'
import Button from '../../atoms/button/Button'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

const useStyles = makeStyles({
   field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
   },
})

const EditTaskForm = ({ item, handleUpdateTempTask }) => {
   const classes = useStyles()
   const [activityName, setActivityName] = useState(item.activityName)
   const [date, setDate] = useState(item.date)
   const [startTime, setStartTime] = useState(item.startTime)
   const [endTime, setEndTime] = useState(item.endTime)
   const [taskDescription, setTaskDescription] = useState(item.taskDescription)
   const [totalDuration, setTotalDuration] = useState(item.totalDuration)
   const [errorTime, setErrorTime] = useState(false)
   const history = useHistory()

   useEffect(() => {
      calculateDuration()
   }, [startTime, endTime])

   function calculateDuration() {
      const start = moment(startTime, "hh:mm")
      const end = moment(endTime, "hh:mm")

      let duration
      ((start.hours() <= 12 && end.hours() <= 12) || (start.hours() >= 13 && end.hours() >= 13))
         ? duration = moment.duration(end.diff(start)).hours()
         : duration = moment.duration(end.diff(start)).hours() - 1

      setTotalDuration(duration)
   }

   const handleOnSubmit = (e) => {
      e.preventDefault()

      if (totalDuration <= 0) {
         setErrorTime(prevValue => !prevValue)
         return
      }

      calculateDuration()
      const changes = {
         activityName: activityName,
         date: date,
         startTime: startTime,
         endTime: endTime,
         taskDescription: taskDescription,
         totalDuration: totalDuration
      }
      handleUpdateTempTask(item.id, {...item, ...changes})

      swal({
         title: "Task Updated Successfully",
         icon: "success",
         button: "Okay",
      })

      history.go(-1)
   }

   const handleCancel = () => {
      history.go(-1)
   }

   return (
      <form autoComplete="off" onSubmit={handleOnSubmit}>
         <TextField
            id="outlined-basic"
            label="Activity Name"
            type="text"
            variant="outlined"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            fullWidth
            required />

         <TextField
            id="outlined-basic"
            label="Date"
            type="date"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            required
            disabled={true}
            helperText="12.00 to 13.00 are considered as a break time"
            InputLabelProps={{ shrink: true }}
            className={classes.field} />

         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <TextField
                  id="outlined-basic"
                  label="Start Time"
                  type="time"
                  variant="outlined"
                  value={startTime}
                  InputProps={{ inputProps: { min: '08:00', max: '17:00' } }}
                  onChange={(e) => setStartTime(e.target.value)}
                  fullWidth
                  error={errorTime}
                  required
                  helperText={errorTime ? 'Invalid Time' : ''}
                  InputLabelProps={{ shrink: true }} />
            </Grid>

            <Grid item xs={12} md={6}>
               <TextField
                  id="outlined-basic"
                  label="End Time"
                  type="time"
                  variant="outlined"
                  value={endTime}
                  InputProps={{ inputProps: { min: '08:00', max: '17:00' } }}
                  onChange={(e) => setEndTime(e.target.value)}
                  fullWidth
                  error={errorTime}
                  required
                  helperText={errorTime ? 'Invalid Time' : ''}
                  InputLabelProps={{ shrink: true }} />
            </Grid>
         </Grid>

         <TextField
            id="outlined-multiline-static"
            label="Task Description"
            variant="outlined"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            fullWidth
            required
            rows={6}
            multiline
            className={classes.field} />

         <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
               <Button
                  text="Close"
                  variant="contained"
                  color="secondary"
                  size="large"
                  align="center"
                  fullWidth
                  onClick={handleCancel} />
            </Grid>
            <Grid item xs={6} md={6}>
               <Button
                  text="Update"
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  align="center"
                  fullWidth />
            </Grid>
         </Grid>
      </form>
   )
}

export default EditTaskForm
