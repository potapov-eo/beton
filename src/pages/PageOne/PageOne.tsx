import React from 'react'
import style from "./PageOne.module.css";
import {useFormik} from "formik";
import {Button, createStyles, InputLabel, makeStyles, MenuItem, Select, TextField, Theme} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {},
        selectEmpty: {},
    }),
);

export const PageOne = () => {
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

            if (!values.grade) {
                errors.grade = "Required password"
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
            formik.resetForm()
        },
    })
    const classes = useStyles();


    return (
        <>
            <div className={style.xxx}>
                Calculator
                <form onSubmit={formik.handleSubmit}>
                    <TextField size="small" variant="outlined" name="article" onChange={formik.handleChange}
                               onBlur={formik.handleBlur} type="text"
                               value={formik.values.article} placeholder={"article"}/>

                    <TextField size="small" variant="outlined" name="grade" onChange={formik.handleChange}
                               onBlur={formik.handleBlur} type="text"
                               value={formik.values.grade} placeholder={"grade"}/>



                    <FormControl variant="outlined" size={"small"}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            name="mobility"
                            value={formik.values.mobility}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>П1</MenuItem>
                            <MenuItem value={2}>П2</MenuItem>
                            <MenuItem value={3}>П3</MenuItem>
                        </Select>
                    </FormControl>

                   < TextField size="small" variant="outlined" name="numberOf" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text" value={formik.values.numberOf} placeholder={"numberOf"}/>


                    <TextField size="small" variant="outlined" name="prize" onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               type="text" value={formik.values.prize} placeholder={"prize"}/>


                    {formik.touched.article && formik.errors.article ?
                        <div style={{color: "red"}}> {formik.errors.article} </div> : null}
                    {formik.touched.grade && formik.errors.grade ?
                        <div style={{color: "red"}}> {formik.errors.grade} </div> : null}


                    <div><span>Remember me </span><input name="rememberMe" onChange={formik.handleChange}
                                                         checked={formik.values.rememberMe} type="checkbox"/></div>

                    <Button type="submit" variant="contained" color="primary">ADD</Button>
                </form>

            </div>


        </>
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
