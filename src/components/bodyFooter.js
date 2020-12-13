import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import { makeStyles,withStyles ,ThemeProvider} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import Location from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height:270,
    },
  gridList: {
    
    flexWrap: 'nowrap',
    flexDirection:'row-reverse',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
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
}))





export default function BodyFooter ({locations}){
    const classes = useStyles();
    return(
 <GridList className={classes.gridList} cols={2}>    
 {locations.slice(0, 3).map((tile) => (
  <GridListTile key={tile.img} style={{height:'auto'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={tile.cover}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Typography variant="subtitle1" component="p" className={classes.typographyItem1}>
          <Star className={classes.icon}/>
        {5}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.typographyItem2}>
          <Location className={classes.icon}/>
         {tile.name}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p" className={classes.typographyItem3}>
        </Typography>
        <Typography variant="h6" component="p" className={classes.typographyItem4}>
        </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
 
  </GridListTile>
     ))}
     </GridList>
    )
}