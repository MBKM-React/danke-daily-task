import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

const FabWithZoom = (props) => {
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
            onClick={handleOnClick}>
            {text}
         </Fab>
      </Zoom>
   )
}

FabWithZoom.propTypes = {
   /**
    * The content displayed on the FAB
    */
   text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
   ]),
   /**
    * The color of the component
    */
   color: PropTypes.oneOf(["default", "primary", "secondary"]),
   /**
    * The variant to use
    */
   variant: PropTypes.oneOf(["extended", "circular"]),
   /**
    * The size of the FAB. small is equivalent to the dense button styling
    */
   size: PropTypes.oneOf(["large", "medium", "small"]),
   /**
    * The click handler for the FAB
    */
   handleOnClick: PropTypes.func
}

export default FabWithZoom
