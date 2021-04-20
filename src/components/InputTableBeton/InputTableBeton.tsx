import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from "react-redux";
import {selectorTableBetons} from "../../store/tableBeton-reducer/tableBeton-selector";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {removeTableBeton} from "../../store/tableBeton-reducer/tableBeton-reducer";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function InputTableBeton() {
    const classes = useStyles();
    const betons = useSelector(selectorTableBetons)
    const dispatch = useDispatch()
    const removeBeton = (id:string)=>{dispatch(removeTableBeton(id))}

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Марка бетона</TableCell>
                        <TableCell align="center">Подвижность</TableCell>
                        <TableCell align="center">Количество, м3</TableCell>
                        <TableCell align="center">Цена, без НДС</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {betons?.map((beton) => (
                        <TableRow key={beton.id}>

                            <TableCell align="center">{beton.grade}</TableCell>
                            <TableCell align="center">{beton.mobility}</TableCell>
                            <TableCell align="center">{beton.numberOf}</TableCell>
                            <TableCell align="center">{beton.prize}</TableCell>
                            <TableCell align="center">
                                <IconButton onClick={()=>removeBeton(beton.id)}>
                                <Delete/>
                            </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
