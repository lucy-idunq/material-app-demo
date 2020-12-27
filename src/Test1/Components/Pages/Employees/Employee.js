import React from 'react'

import PeopleIcon from '@material-ui/icons/People';
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../PageHeader'
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    PageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

const Employee = props => {
const classes = useStyles()
    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <Paper className={classes.PageContent}><EmployeeForm /> </Paper>
        </>
    )
}
export default Employee;