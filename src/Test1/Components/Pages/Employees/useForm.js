
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

export function useForm(initialFValues,validateOnChange=false,validate) {

    const [values, setValues] = useState(initialFValues)
    const [errors, setErrors] = useState({})

    const handleInputChage = e => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange)
        validate({
            [name]:value
        })
    }
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChage,
        resetForm
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete={false} {...other}>
            {props.children}
        </form>
    )
}