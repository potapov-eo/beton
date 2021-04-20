import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from "react-redux";
import {selectorTableBetons} from "../../store/tableBeton-reducer/tableBeton-selector";
import {InputFormBeton} from "../InputFormBeton/InputFormBeton";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




export default function InputTableBeton() {
    const classes = useStyles();
    const betons = useSelector(selectorTableBetons)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Марка бетона</TableCell>
                        <TableCell align="center">Подвижность</TableCell>
                        <TableCell align="center">Количество</TableCell>
                        <TableCell align="center">Цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {betons?.map((beton) => (
                        <TableRow key={beton.id}>

                            <TableCell align="center">{beton.grade}</TableCell>
                            <TableCell align="center">{beton.mobility}</TableCell>
                            <TableCell align="center">{beton.numberOf}</TableCell>
                            <TableCell align="center">{beton.prize}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
