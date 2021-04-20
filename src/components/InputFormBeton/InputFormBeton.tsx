import React from 'react'
import {useFormik} from "formik";
import {Button, createStyles, makeStyles, MenuItem, Select, TextField, Theme} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import {useDispatch} from "react-redux";
import {setTableBeton} from "../../store/tableBeton-reducer/tableBeton-reducer";
import { v1 } from 'uuid';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {},
        selectEmpty: {},
    }),
);

export const InputFormBeton = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            article: "",
            grade: "",
            mobility: "",
            prize: "",
            numberOf: "",
            rememberMe: true
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if(!/^[0-9]+$/.test(values.numberOf)){
                errors.numberOf='Введите количество м3 в правильном формате'
            }
            if (!values.grade) {
                errors.grade = "Введите марку бетона"
            }
            if(!/^[0-9]+$/.test(values.prize)){
                errors.prize='Введите цену бетона в правильном формате'
            }
            return errors;
        },
        onSubmit: values => {
            debugger
            console.log(values)
            const beton={ id: v1(),grade:values.grade, mobility:values.mobility,
                prize:Number(values.prize),numberOf:Number(values.numberOf)}
            dispatch(setTableBeton(beton))
            formik.resetForm()
        },
    })
    const classes = useStyles();


    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField size="small" variant="outlined" name="article" onChange={formik.handleChange}
                       onBlur={formik.handleBlur} type="text"
                       value={formik.values.article} placeholder={"article"}/>

            <TextField size="small" variant="outlined" name="grade" onChange={formik.handleChange}
                       onBlur={formik.handleBlur} type="text"
                       value={formik.values.grade} placeholder={"Марка бетона"}/>


            <FormControl variant="outlined" size={"small"}>
                <Select

                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="mobility"
                    value={formik.values.mobility}
                    onChange={formik.handleChange}
                    label="П"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"П1"}>П1</MenuItem>
                    <MenuItem value={"П2"}>П2</MenuItem>
                    <MenuItem value={"П3"}>П3</MenuItem>
                    <MenuItem value={"П4"}>П4</MenuItem>
                </Select>
            </FormControl>

            < TextField size="small" variant="outlined" name="numberOf" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text" value={formik.values.numberOf} placeholder={"количество, м3"}/>



            <TextField size="small" variant="outlined" name="prize" onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       type="text" value={formik.values.prize} placeholder={"Цена"}/>

            {formik.touched.numberOf && formik.errors.numberOf ?
                <div style={{color: "red"}}> {formik.errors.numberOf} </div> : null}
            {formik.touched.article && formik.errors.article ?
                <div style={{color: "red"}}> {formik.errors.article} </div> : null}
            {formik.touched.grade && formik.errors.grade ?
                <div style={{color: "red"}}> {formik.errors.grade} </div> : null}
            {formik.touched.prize && formik.errors.prize ?
                <div style={{color: "red"}}> {formik.errors.prize} </div> : null}

           <div> <Button type="submit" variant="contained" color="primary">ADD</Button></div>
        </form>

    )
}
type FormikErrorType = {
    article?: string
    mobility?: string
    grade?: string
    prize?: string
    numberOf?: string
    rememberMe?: boolean
}
