import React, { useState } from 'react'
import { makeStyles, Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';

import EditOutlinedIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import PeopleIcon from '@material-ui/icons/People';
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../PageHeader'
import useTable from '../../controls/useTable'
import * as employeeService from '../../../Services/employeeService'
import Controls from '../../controls/Controls'
import { Search, Add } from '@material-ui/icons'
import Popup from '../../controls/Popup'

const useStyles = makeStyles(theme => ({
    PageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Address(Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
    { id: 'action', label: 'Actions', disableSorting: true }
]

const Employee = props => {

    const classes = useStyles()

    const [recordForEdit,setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);

    const handleSearchChange = e => {
        let target = e.target
        setFilterFn({
            fn: items => {
                if (target.value === '')
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        employeeService.insertEmployee(employee)
        resetForm();
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item =>{
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleIcon fontSize="large" />}
            />
            <Paper className={classes.PageContent}>

                <Toolbar >
                    <Controls.Input
                        label="Search Employee"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearchChange}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<Add />}
                        className={classes.newButton}
                        onClick={() => setOpenPopup(true)}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell> {item.fullName} </TableCell>
                                    <TableCell> {item.email} </TableCell>
                                    <TableCell> {item.mobile} </TableCell>
                                    <TableCell> {item.department} </TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color='primary'
                                            onClick={()=>{ openInPopup(item)}}>
                                            <EditOutlinedIcon fontSize='small' />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color='secondary'>
                                            <CloseIcon fontSize='small' />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TblPagination />
                </TblContainer>
            </Paper>
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm 
                addOrEdit={addOrEdit} 
                recordForEdit={recordForEdit}
                />
            </Popup>


        </>
    )
}
export default Employee;