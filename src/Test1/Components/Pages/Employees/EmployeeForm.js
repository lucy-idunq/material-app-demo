import React from 'react'
import { Grid } from '@material-ui/core';
import { useForm, Form } from './useForm';
import Controls from '../../controls/Controls'
import * as employeeService from '../../../Services/employeeService'

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Feale' },
    { id: 'other', title: 'other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

const EmployeeForm = props => {

    const { values, setValues, handleInputChage } = useForm(initialFValues)



    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChage}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChage}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChage}
                    items={genderItems}
                    />
                    <Controls.Select
                    name='departmentId'
                    label='Department'
                    value={values.departmentId}
                    onChange={handleInputChage}
                    options={employeeService.getDepartmentCollection()}
                    />
                    <Controls.Datepicker
                    name='hireDate'
                    label="Hire Date"
                    value={values.isPermanent}
                    onChange={handleInputChage}
                    />
                    <Controls.Checkbox
                    name='isPermanent'
                    label='Permanent Employee'
                    value={values.isPermanent}
                    onChange={handleInputChage}
                    />
                   
                </Grid>
               
            </Grid>
        </Form>
    )
}
export default EmployeeForm;