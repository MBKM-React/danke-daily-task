import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

const MyFabWithZoom = (props) => {
   const { 
      text, 
      color,
      variant, 
      size, 
      styles, 
      handleOnClick 
   } = props
   const theme = useTheme();

   const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
   }

   return (
      <Zoom
         in={true}
         timeout={transitionDuration}
         style={{
            transitionDelay: "100ms",
         }}
         unmountOnExit>
         <Fab
            color={color}
            variant={variant}
            size={size}
            className={styles}
            onClick={() => handleOnClick()}>
            {text}
         </Fab>
      </Zoom>
   )
}

export default MyFabWithZoom
