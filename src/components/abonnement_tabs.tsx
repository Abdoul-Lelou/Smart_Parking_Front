import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import { Divider } from '@mui/joy';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} sx={{width:438, m:'0 auto', display:"flex", justifyContent:'center'}} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Abonnement un mois" {...a11yProps(0)} sx={{border:'0px 1px 0 0 solid'}}/>
                    {/* <Divider orientation='vertical'/> */}
                    <Tab label="Abonnement une semaine" {...a11yProps(1)} sx={{border:'0px 0px 0 1px solid'}} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

                <TableContainer component={Paper} sx={{height:300}}>
                    <Table sx={{ minWidth: 650, width: "50%", m: 'auto' }} size="medium" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Matricule</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="right">Actions</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </TabPanel>
            <TabPanel value={value} index={1}>

                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650, width: "70%", m: 'auto' }} size="medium" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Matricule</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="right">Actions</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </TabPanel>
            
        </Box>
    );
}
