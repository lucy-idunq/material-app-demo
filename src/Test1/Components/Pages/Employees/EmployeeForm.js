import React, { useEffect } from 'react'
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

    const { addOrEdit, recordForEdit } = props

    useEffect(() => { 
        if(recordForEdit !== null)
        setValues({
            ...recordForEdit
        })
    }, recordForEdit)

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@..+/).test(fieldValues.email) ? "" : "Email is not valid"
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimun 10 numbers required"
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const { values, setValues,
        errors, setErrors,
        handleInputChage, resetForm } = useForm(initialFValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate())
            // old   employeeService.insertEmployee(values)  resetForm();
            addOrEdit(values, resetForm)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChage}
                        error={errors.fullName}
                    />
                    {/* </Grid>
                <Grid item xs={6}> */}
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChage}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChage}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChage}
                        error={errors.email}
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
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name='hireDate'
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChage}
                    />
                    <Controls.Checkbox
                        name='isPermanent'
                        label='Permanent Employee'
                        value={values.isPermanent}
                        onChange={handleInputChage}
                    />
                    <div>
                        <Controls.Button
                            type='submit'
                            text='Submit'
                        />
                        <Controls.Button
                            text='Reset'
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>


            </Grid>
        </Form>
    )
}
export default EmployeeForm;