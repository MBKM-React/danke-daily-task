import React, { useState } from 'react'
import Typography from '../../atoms/typography/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import Masonry from 'react-masonry-css'
import swal from 'sweetalert'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TaskDescriptionItem from '../../molecules/taskDescriptionItem/TaskDescriptionItem'
import Button from '../../atoms/button/Button'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
   pageTitle: {
      marginBottom: 40
   },
   textDescription: {
      marginTop: 10
   },
   approvedCard: {
      backgroundColor: 'rgba(0, 0, 255, .1)'
   },
   rejectedCard: {
      backgroundColor: 'rgba(255, 0, 0, .1)'
   },
   cardHeader: {
      paddingBottom: 2,
      marginLeft: 20
   },
   cardContent: {
      paddingTop: 0
   },
   buttonContainer: {
      padding: '0 18px 15px'
   },
   chip: {
      marginBottom: 6
   }
})

const Accordion = withStyles({
   root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
         borderBottom: 0,
      },
      '&:before': {
         display: 'none',
      },
      '&$expanded': {
         margin: 'auto',
      },
   },
   expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
   root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
         minHeight: 56,
      },
   },
   content: {
      '&$expanded': {
         margin: '12px 0',
      },
   },
   expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
   },
}))(MuiAccordionDetails)

const breakpoints = {
   default: 3,
   1100: 2,
   700: 1
}

const AllTask = ({ tasks, handleDeleteTask, handleUpdateStatusTask }) => {
   const classes = useStyles();
   const [expanded, setExpanded] = useState('');

   const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
   };

   const onClickDelete = (index) => {
      swal({
         title: "Are You Sure?",
         text: `Once deleted, \nyou will not be able to restore this task!`,
         icon: "warning",
         buttons: ["Cancel", "Okay"],
         dangerMode: true,
      })
         .then((willDelete) => {
            if (willDelete) {
               handleDeleteTask(index)
               swal({
                  title: "Task Deleted Successfully",
                  icon: "success",
                  button: "Okay",
               })
            }
         })
   }

   const onClickUpdate = (index, statusUpdate) => {
      swal({
         title: "Are You Sure?",
         text: "The Selected Value Cannot Be Changed!",
         icon: "warning",
         buttons: ["Cancel", "Okay"],
         dangerMode: true,
      })
         .then((willDelete) => {
            if (willDelete) {
               handleUpdateStatusTask(index, statusUpdate)
               swal({
                  title: "Updated Successfully",
                  icon: "success",
                  button: "Okay",
               })
            }
         })
   }

   const sumOfDuration = (items, prop) => {
      return items.reduce((sum, currPosition) => {
         return sum + currPosition[prop]
      }, 0)
   }

   return (
      <>
         <Typography
            text="All Task"
            variant="h4"
            align="center"
            className={classes.pageTitle} />

         <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

            {tasks.map((outerItem, i) => (
               <div key={i}>
                  <Card
                     elevation={3}
                     className={outerItem[0].status === "Approve"
                        ? classes.approvedCard
                        : outerItem[0].status === "Reject"
                           ? classes.rejectedCard
                           : ''}>
                     <CardHeader
                        action={
                           <IconButton
                              aria-label="settings"
                              onClick={() => onClickDelete(i)}>
                              <HighlightOffIcon color="secondary" />
                           </IconButton>
                        }
                        titleTypographyProps={{ variant: 'h6' }}
                        title={
                           <>
                              {outerItem[0].date} <Chip
                                 label={
                                    outerItem[0].status === "Approve"
                                       ? `${sumOfDuration(outerItem, 'totalDuration')} Hours (Approved)`
                                       : outerItem[0].status === "Reject"
                                          ? `${sumOfDuration(outerItem, 'totalDuration')} Hours (Rejected)`
                                          : `${sumOfDuration(outerItem, 'totalDuration')} Hours`
                                 }
                                 color={
                                    outerItem[0].status === "Approve" 
                                       ? "primary" 
                                       : outerItem[0].status === "Reject"
                                       ? "secondary"
                                       : "default" 
                                 }
                                 size="small"
                                 variant={outerItem[0].status === "Pending" ? "outlined" : 'default'}
                                 className={classes.chip} />
                           </>
                        }
                        subheaderTypographyProps={{ variant: 'caption' }}
                        className={classes.cardHeader} />

                     <CardContent className={classes.cardContent}>
                        {outerItem.map(item => (
                           <Accordion
                              key={item.id}
                              expanded={expanded === item.id}
                              onChange={handleChange(item.id)}>
                              <AccordionSummary
                                 expandIcon={<ExpandMoreIcon />}>
                                 <Typography
                                    text={`${item.activityName} (${item.startTime} - ${item.endTime})`} />
                              </AccordionSummary>
                              <AccordionDetails>
                                 <TaskDescriptionItem value={item.taskDescription} />
                              </AccordionDetails>
                           </Accordion>
                        ))}
                     </CardContent>

                     {outerItem[0].status === "Pending" && (
                        <Grid container spacing={1} className={classes.buttonContainer}>
                           <Grid item xs={6} md={6}>
                              <Button
                                 text="Reject"
                                 variant="contained"
                                 color="secondary"
                                 align="center"
                                 fullWidth
                                 onClick={() => onClickUpdate(i, "Reject")} />
                           </Grid>
                           <Grid item xs={6} md={6}>
                              <Button
                                 text="Approve"
                                 variant="contained"
                                 color="primary"
                                 type="submit"
                                 align="center"
                                 fullWidth
                                 onClick={() => onClickUpdate(i, "Approve")} />
                           </Grid>
                        </Grid>
                     )}

                  </Card>
               </div>
            ))}
         </Masonry>

         {tasks.length === 0 && (
            <div>
               <Typography
                  text="There are no task yet."
                  align="center"
                  color="textSecondary" />
            </div>
         )}
      </>
   )
}

export default AllTask