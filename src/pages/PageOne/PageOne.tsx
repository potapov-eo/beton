import React from 'react'
import style from "./PageOne.module.css";
import {InputFormBeton} from "../../components/InputFormBeton/InputFormBeton";
import InputTableBeton from "../../components/InputTableBeton/InputTableBeton";


export const PageOne = () => {

    return (
        <>
            <div className={style.xxx}>
                Calculator
                <InputTableBeton/>
                <InputFormBeton/>
            </div>
        </>
    )
}

