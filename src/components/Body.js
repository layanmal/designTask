import React from 'react';
import Box from '@material-ui/core/Box';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import { makeStyles,withStyles ,ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue} from '@material-ui/core/colors';
import Star from '@material-ui/icons/Star';
import Location from '@material-ui/icons/LocationOn';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import BodySide from './bodySide';
import BodyFooter from './bodyFooter';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[600],
    },
  cover: {
    width: 151,
  },
    media: {
   width:300,
   height:150,
   margin:theme.spacing(2),
  },
  icon:{
   fontSize:'18px',
   padding:'2px',
   marginTop:'3px',

  },
  formControl: {
    margin: theme.spacing(3),
    display:"flex" 
  },
  rootGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height:'auto',
    flexWrap: 'nowrap',
    flexDirection:'row-reverse',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  typoAlignment:{
    alignText:'right'
  },
  cardHeader:{
    display:"flex" ,
    flexDirection:"row-reverse",
   
  },
  card:{
    
    height:'auto',
    marginTop:'35px',
    marginLeft:'50px'
  },
  typographyItem1:{
    display:"flex" ,
    flexDirection:"row-reverse",
     color:"#399FA9",
  },
  typographyItem2:{
    display:"flex" ,
    flexDirection:"row-reverse",
    fontWeight:600
  },
  typographyItem3:{
    display:"flex" ,
    flexDirection:"row-reverse"
  },
  typographyItem4:{
    display:"flex" ,
    flexDirection:"row-reverse",
     color:"#399FA9",
  },
  btnSide:{
    width:"100px",
    color:'white',
    height:'20px',
    backgroundColor:"#002e53",
    borderRadius:25,
    margin:5,
   
  },

 
  
  }));
  
 
export default function Body({locations}) {
    const classes = useStyles();
    
    return(    
  <Grid  container spacing={1}  >
  <Grid item xs={12} sm={8} >
  {  
locations.map((tile) =>(
  <Card className={classes.card}>
    <Grid container spacing={2} style={{display:"flex" ,flexDirection:"row-reverse"}}>
      <Grid item>
        <CardMedia
        className={classes.media}
        image={tile.cover}
        button={
          <Button variant="contained"></Button>
        }
        />
      </Grid>
          <Grid item xs={12} sm container style={{display:"flex" ,flexDirection:"row-reverse"}}>
            <Grid item xs={12} sm={8} container direction="column" >
              <CardContent >
               <Typography variant="subtitle1" component="p" className={classes.typographyItem1}>
                 <Star className={classes.icon}/>
                 {4.5}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.typographyItem2}>
               <Location className={classes.icon}/>
                {tile.name}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.typographyItem3}>
                  غرفة اجتماعات كبيرة - جادة الدمام
               </Typography>
               <Typography variant="body2" component="p" className={classes.typographyItem4}>
                  600 ريال/ساعة 
               </Typography>
              </CardContent>
             
            </Grid>
            <Grid item item xs={12} sm={4}>
            <FavoriteBorderOutlined fontSize="inherit"  />
             <Button  aria-label="settings"  className={classes.btnSide}>
             مساحة فعاليات
             </Button >  
            </Grid>
          </Grid>
        </Grid>
       
    </Card>
  ))}  
    </Grid>
      <Grid item xs={12} sm={4} >
        <BodySide/>
      </Grid> 
      <Grid item xs={12} sm={8}>
        <Box mt={4} style={{display:'flex',flexDirection:"row-reverse"}}>
        <Typography variant="h4" component="p" className={classes.typoAlignment}>
        مساحات مميزة
        </Typography>
        </Box>
        <Box mb={1} style={{display:'flex',flexDirection:"row-reverse"}}>
        <Typography variant="h6" color="textSecondary" className={classes.typoAlignment}>
          المساحات الاعلى تقييماً
        </Typography>
        </Box>
        <div className={classes.rootGrid}>
        <BodyFooter locations={locations}/>
        </div>
     </Grid>
  </Grid>
    );
}
