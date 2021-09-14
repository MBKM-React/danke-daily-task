import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import TextField from '../../atoms/textField/TextField'
import Button from '../../atoms/button/Button'
import Grid from '@material-ui/core/Grid'
import swal from 'sweetalert'

const useStyles = makeStyles({
   field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
   }
})

const DATE_KEY = 'dailyTaskApp.date'

const AddTaskForm = ({ tempTask, handleAddTempTask, handleFabClose }) => {
   const classes = useStyles()
   const [activityName, setActivityName] = useState('')
   const [date, setDate] = useState(moment(new Date()).format('yyyy-MM-DD'))
   const [startTime, setStartTime] = useState('08:00')
   const [endTime, setEndTime] = useState('17:00')
   const [taskDescription, setTaskDescription] = useState('')
   const [totalDuration, setTotalDuration] = useState(0)
   const [errorTime, setErrorTime] = useState(false)

   useEffect(() => {
      const dateJSON = localStorage.getItem(DATE_KEY)
      if (dateJSON !== null) setDate(JSON.parse(dateJSON))
   }, [])

   useEffect(() => {
      localStorage.setItem(DATE_KEY, JSON.stringify(date))
   }, [date])

   useEffect(() => {
      calculateDuration()
   }, [startTime, endTime])

   function calculateDuration() {
      const start = moment(startTime, "hh:mm")
      const end = moment(endTime, "hh:mm")

      let duration
      ( (start.hours() <= 12 && end.hours() <= 12) || (start.hours() >= 13 && end.hours() >= 13) ) 
         ? duration = moment.duration(end.diff(start)).hours()
         : duration = moment.duration(end.diff(start)).hours() - 1

      setTotalDuration(duration)
   }

   const handleOnSubmit = (e) => {
      e.preventDefault()
      
      if(totalDuration <= 0) {
         setErrorTime(prevValue => !prevValue)
         return
      }
      
      // handleFabClose()
      calculateDuration()
      setActivityName('')
      setStartTime('08:00')
      setEndTime('17:00')
      setTaskDescription('')

      const id = Math.floor(Math.random() * 10000)
      const status = "Pending"
      handleAddTempTask({ id, activityName, date, startTime, endTime, taskDescription, totalDuration, status })

      swal({
         title: "Task Added Successfully",
         icon: "success",
         button: "Okay",
      })
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
            disabled={tempTask.length > 0 ? true : false}
            helperText={tempTask.length > 0
               ? "12.00 to 13.00 are considered as a break time (Submit the temporary task first to change the date)"
               : "12.00 to 13.00 are considered as a break time"}
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
                  onClick={() => handleFabClose()} />
            </Grid>
            <Grid item xs={6} md={6}>
               <Button
                  text="Add"
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

AddTaskForm.propTypes = {
   /**
    * Temporary task (Array Of Object)
    */
   tempTask: PropTypes.arrayOf(PropTypes.object),
   /**
    * Function that handle form when user submit the temp task
    */ 
   handleAddTempTask: PropTypes.func, 
   /**
    * Function that will close the form when user click close button
    */
   handleFabClose: PropTypes.func
}

export default AddTaskForm
