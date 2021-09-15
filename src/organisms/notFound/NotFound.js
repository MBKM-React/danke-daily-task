import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../../atoms/typography/Typography'

const useStyles = makeStyles({
   pageTitle: {
      marginBottom: 40
   }
})

const NotFound = () => {
   const classes = useStyles()

   return (
      <>
         <Typography
            text="🏴‍☠️ Page Not Found 🏴‍☠️"
            variant="h4"
            align="center"
            className={classes.pageTitle} />

         <Typography
            text="🙄 What are you looking for ? 🤨"
            align="center"
            color="textSecondary" />
      </>
   )
}

export default NotFound
