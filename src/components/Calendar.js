import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
   
    '&:focus': {
    
    },
  },
}))(MenuItem);



export  default function PopupCalendar({anchorTime,handleOnClose}) {

  return (
    
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorTime}
        keepMounted
        open={Boolean(anchorTime)}
        onClose={handleOnClose}
      >
        <StyledMenuItem>
        <ListItemAvatar >
     <Calendar/>
        </ListItemAvatar>
        </StyledMenuItem>
    </StyledMenu> );
}
