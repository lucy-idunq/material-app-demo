import React,{useState} from 'react'
import Employee from './Employee'
import { Grid, TextField, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    root:{
'& .MuiFormControl-root':{
    width:'100%',
    margin:theme.spacing(4)
}
    }
}))

const initialFValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false
}

const EmployeeForm = props =>{
    const [values,setValues] = useState(initialFValues);
    const classes = useStyles()

    return(
       <form className={classes.root}>
           <Grid container>
               <Grid item xs={6}> 
               <TextField 
               variant="outlined"
               label="Full Name"
               value={values.fullName}
               />
               </Grid>
               <Grid item xs={6}>
               <TextField 
               variant="outlined"
               label="Email"
               value={values.email}
               />
                    </Grid>

           </Grid>
       </form>
    )
}
export default EmployeeForm;