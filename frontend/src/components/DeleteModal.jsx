import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios'


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
    m: 2,
};

export default function DeleteModal({ id, setGigData, gigData }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteHandler = (id) => {
        axios.delete(`/api/gig/${id}`)
        console.log(id, 'delete handler called')
    }

    console.log(id)

    console.log(gigData);

    useEffect(() => {

    }, [deleteHandler])


    return (
        <div>
            <Button onClick={handleOpen} color='error'> <DeleteForeverIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>This Gig will be deleted</h1>
                    <Button variant="contained" style={{ marginRight: '2em' }} color='error' onClick={() => {
                        deleteHandler(id)
                        setGigData(
                            gigData && gigData.filter(value => value._id != id)
                        )
                    }}>Delete</Button>
                    <Button variant="contained" color='inherit' onClick={() => {
                        handleClose()
                    }}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
}
