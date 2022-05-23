import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function NewGigForm({ setRefersh }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState(null);
    const [name, setName] = useState('')
    const [budget, setBudget] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('/api/gig', {
            name, budget, date: value
        })
        setRefersh(true)

    }

    useEffect(() => {

    }, [submitHandler, handleOpen,])


    return (
        <div>
            <Button onClick={handleOpen} variant='contained' color='primary'>New Gig</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
                        <TextField label='Gig name' type='text' value={name} onChange={(e) => setName(e.target.value)} />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Basic example"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        <TextField label='Budget' type='number' value={budget} onChange={(e) => setBudget(e.target.value)} />
                        <Button variant='contained' type='submit' color="success">Add</Button>
                    </form>

                </Box>
            </Modal>
        </div>
    );
}
