import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, }}
            style={{ height: "500vh", position: "fixed" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <div style={{ margin: "14%" }}>

                    <img src='./logo.png' style={{ height: '4em', width: "auto" }} />
                </div>
                <Tab icon={<Avatar src="./dashboard.png" style={{ height: "1em", width: "auto", borderRadius: '0%' }} />}  {...a11yProps(0)} />
                <Tab icon={<Avatar src="./gigs.png" style={{ height: "1em", width: "auto", borderRadius: '0%' }} />} {...a11yProps(1)} />
                <Tab icon={<Avatar src="./training.png" style={{ height: "1em", width: "auto", borderRadius: '0%' }} />} {...a11yProps(2)} />
                <Tab icon={<Avatar src="./search.png" style={{ height: "1em", width: "auto", borderRadius: '0%' }} />} {...a11yProps(3)} />
                <Tab icon={<Avatar src="./user.png" style={{ height: "1em", width: "auto", borderRadius: '0%' }} />} {...a11yProps(4)} />

            </Tabs>

        </Box>
    );
}
