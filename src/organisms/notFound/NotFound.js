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
            text="๐ดโโ ๏ธ Page Not Found ๐ดโโ ๏ธ"
            variant="h4"
            align="center"
            className={classes.pageTitle} />

         <Typography
            text="๐ What are you looking for ? ๐คจ"
            align="center"
            color="textSecondary" />
      </>
   )
}

export default NotFound
