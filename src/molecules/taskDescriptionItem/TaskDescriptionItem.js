import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
   listItem: {
      padding: 1,
      fontFamily: 'Oswald'
   },
})

const TaskDescriptionItem = ({ value }) => {
   const classes = useStyles();
   const taskDescriptions = value.split('\n')

   return (
      <List>
         {taskDescriptions.map((taskDescription, i) => (
            <ListItem key={i} className={classes.listItem}>{taskDescription}</ListItem>
         ))}
      </List>
   )
}

TaskDescriptionItem.propTypes = {
   /**
    * Value in the form of a string containing a newline character (taken from the text area)
    */
   value: PropTypes.string.isRequired
}

export default TaskDescriptionItem
