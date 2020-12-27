import React from 'react'

import PeopleIcon from '@material-ui/icons/People';
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../PageHeader'

const Employee = props => {
    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <EmployeeForm />
        </>
    )
}
export default Employee;