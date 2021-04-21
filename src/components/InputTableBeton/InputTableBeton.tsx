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
import {changeTableBetonProperty, removeTableBeton} from "../../store/tableBeton-reducer/tableBeton-reducer";
import {EditableSpan} from "../EditableSpan/EditableSpan";

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
    const ChangeBeton = (newValue: string|number, id:string, property:propertyType)=>{

        // @ts-ignore
        dispatch(changeTableBetonProperty(id,{[property]:newValue}))
    }
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

                            <TableCell align="center">
                                <EditableSpan value={beton.grade} id={beton.id} property={"grade"} onChange={ChangeBeton}/>
                            </TableCell>
                            <TableCell align="center">
                                <EditableSpan value={beton.mobility} id={beton.id} property={"mobility"} onChange={ChangeBeton}/>
                            </TableCell>
                            <TableCell align="center">
                                <EditableSpan value={beton.numberOf}id={beton.id} property={"numberOf"} onChange={ChangeBeton}/>
                            </TableCell>
                            <TableCell align="center">
                                <EditableSpan value={beton.prize} id={beton.id} property={"prize"} onChange={ChangeBeton}/>
                            </TableCell>
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
export type propertyType="grade"|"mobility"|"prize"|"numberOf"
