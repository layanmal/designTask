import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles,withStyles ,ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme) => ({
 
  formControl: {
    margin: theme.spacing(1),
    display:"flex" 
  },
}))

const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: 'black',
      },
    },
   
   })
   
const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);


function valuetext(value) {
    return `${value}`;
  }

export default function BodySide (){
    const classes = useStyles();

    const [state, setState] = React.useState({
        item1: true,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
        item7: false,
        item8: false,
        item9: false,
        item10: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const {item1, item2, item3,item4,item5,item6,item7,item8,item9,item10} = state;
      
   return(  
    <Paper style={{height:'auto'}}>
        <Typography variant="h6" component="p" style={{display:"flex" ,flexDirection:"row-reverse",margin:'40px'}}>
           التصفية حسب
         </Typography>
         <Box m={5}>
         <Typography variant="subtitle" component="p" style={{display:"flex" ,flexDirection:"row-reverse",margin:'10px'}}>
           عدد الاعضاء
         </Typography>
         <TextField 
         style={{display:"flex" ,flexWrap: 'wrap',justifyContent:"flex-end"}}
          id="outlined-number"
          label="رقم"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Box>
        <Box m={5}>
      <Typography id="discrete-slider" gutterBottom style={{display:"flex" ,flexWrap: 'wrap',justifyContent:"flex-end"}}>
        مساحة المكان
      </Typography>
      <Slider
        defaultValue={60}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={120}
      />
         </Box>

         <Box>
         <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{display:"flex" ,flexDirection:"row-reverse"}} >المميزات</FormLabel>
        <FormGroup>
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}} 
            control={<Checkbox checked={item1} onChange={handleChange} name="item1" color="primary"/>}
            label="تسليم واستلام الطرود"
          />
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item2} onChange={handleChange} name="item2" color="primary"/>}
            label="عنوان وطني رسمي"
          />
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item3} onChange={handleChange} name="item3" color="primary"/>}
            label="تسليم واستلام الطروطابعة ثري دي"
          />
           <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item4} onChange={handleChange} name="item4" color="primary"/>}
            label="استوديو تسجيل صوت"
          />
           <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item5} onChange={handleChange} name="item5" color="primary" />}
            label="استوديو تصوير"
          />
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item6} onChange={handleChange} name="item6" color="primary" />}
            label="مساحة متعددة الاصوات"
          />
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item7} onChange={handleChange} name="item7" color="primary"/>}
            label="منصة عرض المنتجات"
          />
          <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item8} onChange={handleChange} name="item8" color="primary"/>}
            label="صالة عرض"
          />
           <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item9} onChange={handleChange} name="item9" color="primary"/>}
            label="مقهى جادة"
          />
            <FormControlLabel style={{display:"flex" ,flexDirection:"row-reverse"}}
            control={<Checkbox checked={item10} onChange={handleChange} name="item10" color="primary" />}
            label="مقهى جادة"
          />
         </FormGroup>
       </FormControl>
     </Box>
   </Paper>
   )
}