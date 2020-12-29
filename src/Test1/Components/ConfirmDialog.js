import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import  NotListedLocationIcon  from '@material-ui/icons/NotListedLocation';
import React from 'react'
import * as Controls from './controls/Button'

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        alignContent: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        background: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '& :hover': {
            background: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem'
        }
    }
}))

const ConfirmDialog = props => {

    const { confirmDialog, setConfirmDialog } = props

    const classes = useStyles()

    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text="No"
                    color='default'
                    onClick={() => setConfirmDialog({...confirmDialog, isOpen: false })}

                />
                <Controls.Button
                    text="Yes"
                    color='secondary'
                     onClick={confirmDialog.onConfirm}
                />

            </DialogActions>
        </Dialog>
    )
}
export default ConfirmDialog;