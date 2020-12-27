
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

export function useForm(initialFValues) {
    const [values, setValues] = useState(initialFValues)

    const handleInputChage = e => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        handleInputChage
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
    const classes = useStyles()
    return (
        <form className={classes.root} autoComplete={false}>
            {props.children}
        </form>
    )
}