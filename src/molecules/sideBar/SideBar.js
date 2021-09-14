import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '../../atoms/typography/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AddBoxIcon from '@material-ui/icons/AddBox'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import grey from '@material-ui/core/colors/grey'

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   // Necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
      background: grey[50]
   },
   active: {
      background: grey[300],
      '&:hover': {
         background: grey[300]
      }
   }
}))

const SideBar = (props) => {
   const { 
      mobileOpen, 
      handleDrawerToggle, 
      handleChangePage,
      currPage
   } = props

   const classes = useStyles()
   const theme = useTheme();

   const drawer = (
      <div>
         <div className={classes.toolbar}>
            <Typography
               text="Menu"
               variant="h6"
               align="center"
               styles={{ marginTop: "30px" }} />
         </div>

         <Divider />
         <List variant="secondary">
            <ListItem 
               button 
               key="All Task" 
               onClick={() => handleChangePage('All Task')} 
               className={currPage === 'All Task' ? classes.active : '' }>
               <ListItemIcon>
                  <FormatListBulletedIcon />
               </ListItemIcon>
               <ListItemText primary="All Task" />
            </ListItem>

            <ListItem 
               button key="Temp Task" 
               onClick={() => handleChangePage('Temp Task')}
               className={currPage === 'Temp Task' ? classes.active : '' }>
               <ListItemIcon>
                  <BookmarkIcon />
               </ListItemIcon>
               <ListItemText primary="Temp Task" />
            </ListItem>

            {/* <ListItem 
               button key="Add Task" 
               onClick={() => handleChangePage('Add Task')}
               className={currPage === 'Add Task' ? classes.active : '' }>
               <ListItemIcon>
                  <AddBoxIcon />
               </ListItemIcon>
               <ListItemText primary="Add Task" />
            </ListItem> */}
         </List>
      </div>
   )

   return (
      <nav className={classes.drawer}>
         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
         <Hidden smUp implementation="css">
            <Drawer
               container={document.body}
               variant="temporary"
               anchor={theme.direction === 'rtl' ? 'right' : 'left'}
               open={mobileOpen}
               onClose={() => handleDrawerToggle()}
               classes={{
                  paper: classes.drawerPaper,
               }}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}>
               {drawer}
            </Drawer>
         </Hidden>
         <Hidden xsDown implementation="css">
            <Drawer
               classes={{
                  paper: classes.drawerPaper,
               }}
               variant="permanent"
               open>
               {drawer}
            </Drawer>
         </Hidden>
      </nav>
   )
}

SideBar.propTypes = {
   /**
    * For collapse the sidebar if opened in mobile
    */
   mobileOpen: PropTypes.bool.isRequired,
   /**
    * For making sidebar closable if opened in mobile
    */
   handleDrawerToggle: PropTypes.func.isRequired,
   /**
    * Change the current page to destination page
    */
   handleChangePage: PropTypes.func.isRequired,
   /**
    * The current page
    */
   currPage: PropTypes.string.isRequired
}

export default SideBar
