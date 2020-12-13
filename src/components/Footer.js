import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  grid:{
    
    direction:"column",
    justify:"space-evenly",
    alignItems:"flex-end",
  },
  pos: {
    marginBottom: 12,
    
  }, btn:{
    height:"60px",
    borderRadius:"50%", 
    position:'relative',
    backgroundColor:'transparent',
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
  Typo:{
    display:"flex" ,
    flexDirection:"row-reverse",
    color:"whitesmoke",
  },
  icon:{
   color:'white',
  }
})) 

export default function JustifyContent() {
  const classes = useStyles();

  return (
    <Box container style={{ width: '100%',height:"200px",backgroundColor:"#002e53" }} mt={1} p={1}>
    <Grid container spacing={3} xs={12}  sm={12} display="flex" justifyContent="center"  >
    <Grid item xs={3} sm={3} container p={3} m={1}
  direction="column"
  justify="space-evenly"
  alignItems="flex-end" >
       <CardActions >
       <Typography className={classes.Typo} variant="h5"   >
         مساحات
       </Typography>
       </CardActions>
       <CardActions>
         <Button size="small">
       <Typography style={{color:"white"}}>
         مكتب خاص
       </Typography>
       </Button>
       </CardActions>
       <CardActions>
         <Button size="small">
       <Typography style={{color:"white"}}>
        مكتب تنفيذي
       </Typography>
       </Button>
       </CardActions>
      </Grid>
      <Grid item xs={3} sm={3} container p={3} m={1}
  direction="column"
  justify="space-evenly"
  alignItems="flex-end" >
       
       <CardActions>
        
       <Typography className={classes.Typo} variant="h5"   >
         المواقع
       </Typography>
     
       </CardActions>
       <CardActions>
         <Button size="small"  >
       <Typography style={{color:"white"}}>
         المدينة المنورة
       </Typography>
       </Button>
       </CardActions>
       <CardActions>
         <Button size="small"  >
       <Typography style={{color:"white"}}>
        نجران
       </Typography>
       </Button>
       </CardActions>
      </Grid>
      <Grid item xs={6} sm={3} container p={3} m={1}
  direction="column"
  justify="space-evenly"
  alignItems="flex-end" >
    <CardActions>
       <Typography className={classes.Typo} variant="h5"  >
         جادة
       </Typography>
      </CardActions>
       <CardActions>
       <Button size="small"   >
       <Typography style={{color:"white"}}>
         مواقع التواصل الاجتماعي
       </Typography>
     </Button>
       </CardActions>
       <CardActions>
         <Twitter className={classes.icon}/>
         <Facebook className={classes.icon}/>
         <LinkedIn className={classes.icon}/>
       </CardActions>
      </Grid>
    </Grid>
  </Box>

    );
}