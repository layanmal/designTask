

import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import { fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import  PopupCalendar from './Calendar';
import {PopupList} from './popupList';
import GpsFixedOutlined from '@material-ui/icons/GpsFixedOutlined';


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(1),
     
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      
    },
    selectItem:{
      backgroundColor:"white",
    },
    container:{
      backgroundColor:"whitesmoke",
    
    },
    btnSearch:{
      marginTop: theme.spacing(5),
      backgroundColor:"white",
      
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      textAlign: "right",
      backgroundColor: fade(theme.palette.common.white, 1),
      padding:theme.spacing(1),
      marginTop:theme.spacing(6),
      borderRadius:50,
      height:'auto',
      marginBottom:theme.spacing(6),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, .5),
        
      }},
      btn:{
        backgroundColor:"#19ABBD",
      },
      searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white',
      },
      inputRoot: {
        color: 'inherit',
        textAlign: "right",
        
      },
      inputInput: {
        textAlign: "right",
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        display:"flex", 
        flexDirection:"row-reverse",
        width: '100%', 
      }
      ,
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      icon:{
        display:'flex',
        flexDirection:"row",
        marginTop:12,
        fontSize:15
      }
    })); 

function Searchbar({locations,searchLocation}){
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [time,setTime]=React.useState(false);
    const [anchorTime,setAnchorTime]=React.useState(null);
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
   
  };

  const handleOnClick = (event) => {
    setAnchorTime(event.currentTarget);
  }; 

  const handleOnClose = () => {
   
    setAnchorTime(null);
  };
const state ={
  location:null,
}
    return( 
      <Container className={classes.container}>
        <Grid container justify="center">
        <ButtonGroup className={classes.formControl}>
        <div className={classes.search}>
            <Avatar className={classes.btn}>
               <SearchIcon className={classes.searchIcon}/>
             </Avatar>   
        </div>
        <div className={classes.search}>
            <InputBase 
              placeholder="..الوقت المحدد"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onClick={handleOnClick}
            /> 
          <PopupCalendar anchorTime={anchorTime} handleOnClose={handleOnClose}/> 
          </div>
          <div className={classes.search}>
            <InputBase 
              placeholder="نوع المكان"  
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}   
            />
          <PopupList anchorEl={anchorEl}  handleClose={handleClose} locations={locations} searchLocation={searchLocation}/>
         </div>
         <div className={classes.search}>
           <Grid container xs={12} sm>
            <Grid xs={6}>
            <GpsFixedOutlined color="primary" className={classes.icon}/> 
           </Grid>
           <Grid xs={6}>
            <InputBase  
              placeholder="الموقع"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onClick={handleClick}
        />
        </Grid>
        </Grid>
        </div>
        </ButtonGroup>
        </Grid>   
      </Container>
    );
}
export default Searchbar;