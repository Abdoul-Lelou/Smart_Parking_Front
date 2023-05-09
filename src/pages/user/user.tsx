import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination, Typography } from '@mui/material';
import EditUser from './edit_user';
import ShowBackdrop from '../../components/backdrop';

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

export default function User() {
    const [loading, setloading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])
    return (

        <>
            {loading ?
                <ShowBackdrop/>   
            :
                <>
                    {
                    false && <TableContainer component={Paper} sx={{maxHeight:500, maxWidth: 850 ,border:'1px solid'}}>
                            <Typography variant='h5' align='center' sx={{ m: 'auto', p:4, fontWeight:'bold'  }}>Liste des clients</Typography>  
                            <Table sx={{ maxWidth: 750, m:'auto' }} aria-label="caption table">
                                
                                {/* <caption>A basic table example with a caption</caption> */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Matricule</TableCell>
                                        <TableCell align="right">Nom</TableCell>
                                        <TableCell align="right">Prenom</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Téléphone</TableCell>
                                        <TableCell align="right">Adresse</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                L0148E8
                                            </TableCell>
                                            <TableCell align="right">Andre</TableCell>
                                            <TableCell align="right">Merlin</TableCell>
                                            <TableCell align="right">merlin@gmail.com</TableCell>
                                            <TableCell align="right">778741144</TableCell>
                                            <TableCell align="right">Mermoz</TableCell>
                                        

                                        </TableRow>
                                    ))}
                                </TableBody>
                            &nbsp;
                            <Pagination count={5} color="secondary" />
                            </Table>
                        </TableContainer>
                    }

                    {true && <EditUser />}
                </>
            }
        </>
        
    );
}
