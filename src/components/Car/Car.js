import React from 'react';
import {useDispatch} from "react-redux";

import css from '../App.module.css'
import {deleteCar} from "../../store";

const Car = ({car:{id, model, price, year}}) => {
    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <div>MODEL: {model}</div>
                <div>PRICE: {price}</div>
                <div>YEAR: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>DELETE</button>
        </div>
    );
};

export {Car};