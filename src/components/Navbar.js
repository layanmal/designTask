import React,{useState} from 'react'

import Paper from '@material-ui/core/Paper';

import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PublicOutlined from '@material-ui/icons/PublicOutlined';
import GpsFixedOutlined from '@material-ui/icons/GpsFixedOutlined';

const useStyles = makeStyles((theme) => ({
    button: {
      margin:theme.spacing(1),
      backgroundColor:"#19ABBD",
      borderRadius: 25
    },
    title:{
       margin:theme.spacing(1)
    }
  }));

function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      
    };
    return (
    <Paper square>
      <Tabs TabIndicatorProps={{style: {background:'none'}}}
        value={value}
        onChange={handleChange} 
      >   
          <Button variant ="contained" className={classes.button}  size="large" >تسجيل</Button> 
          <Tab label="دخول" />
          <Tab label="الاشتراكات" />
          <PublicOutlined style={{marginTop:'20px', fontSize:15}}/>
          <Grid container justify="flex-end" m={8}>
          <Typography className={classes.title} variant="h4" component="div">جادة</Typography>
        </Grid>
  
      </Tabs>
    </Paper>
    
      );
}

export default Navbar
