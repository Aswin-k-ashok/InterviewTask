import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components'

const MiddleBar = styled.div`

    padding:2em 0em 2em 0em;
    width:100%;
    background-color:white;
    margin-bottom:2em;
    display:flex;
    align-items:center;

`




function MiddleNavbar() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <MiddleBar>
                <Box sx={{ maxWidth: { xs: 300, sm: 480, }, bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="All" />
                        <Tab label="Open" />
                        <Tab label="Compleated" />
                        <Tab label="Cancelled" />

                    </Tabs>
                </Box>

            </MiddleBar>
        </>
    )
}

export default MiddleNavbar