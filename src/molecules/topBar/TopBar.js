import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../../atoms/typography/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CopyrightIcon from '@material-ui/icons/Copyright';

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
   appBar: {
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
         marginLeft: drawerWidth,
      },
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   accountIcon: {
      flexGrow: 1,
   },
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
   },
}))

const TopBar = ({ handleDrawerToggle }) => {
   const classes = useStyles()

   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => handleDrawerToggle()}
                  className={classes.menuButton}>
                  <MenuIcon />
               </IconButton>

               <Typography
                  text="Daily Task"
                  variant="h6"
                  noWrap
                  className={classes.accountIcon} />

               <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleOpen}>
                  <AccountCircle />
               </IconButton>
            </Toolbar>
         </AppBar>

         <Modal
            align="center"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}>
            <Fade in={open}>
               <div className={classes.paper}>
                  <Typography
                     text={(
                        <>
                           <CopyrightIcon />
                           &nbsp;Copyright&nbsp;
                           <CopyrightIcon />
                        </>
                     )}
                     variant="h4"
                     gutterBottom />

                  <Typography
                     text="Moehammad Soulthan Putra Danke"
                     variant="h6"
                     styles={{ fontWeight: 300 }} />
               </div>
            </Fade>
         </Modal>
      </>
   )
}

TopBar.propTypes = {
   /**
    * For show sidebar toggle if opened in mobile
    */
    handleDrawerToggle: PropTypes.func.isRequired,
}

export default TopBar
