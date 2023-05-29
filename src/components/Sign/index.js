import React, {useState} from 'react';
import './sign.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_ID} from "../../redux/actionTypes";
import {idInstance} from "../ApiKey";
import {useNavigate} from "react-router-dom";
const Sign = () => {
    const [border, setBorder] = useState(false)
    const [value, setValue] = useState({id: '', api: ''})
    const dispatch = useDispatch()
    const navigage = useNavigate()
    const {sign} = useSelector(state => state)
    const handleChange = (e) => {
        setBorder(false)
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        if  (value.api.trim().length && value.api.trim().length) {
            setBorder(false)
            dispatch({type: GET_ID, payload: value.id, payloads: value.api})
            setValue({id: '', api: ''})
            navigage('/send')
        }
        else{
            setBorder(true)
        }
    }
    console.log(value)
    return (
        <form className="sign" onSubmit={(e) => e.preventDefault()}>
            <h1>Вводи свои учетные данные из системы <span>GREEN-API</span>.</h1>
            <label>напишите свой idInstance
                <input style={{border: border? 'red 1px solid' : ''}} onChange={handleChange} type="text" value={value.id} name="id" placeholder='idInstance'/>
            </label>
            <label>напишите свой apiTokenInstance
                <input style={{border: border? 'red 1px solid' : ''}} onChange={handleChange} type="text" value={value.api} name='api' placeholder='apiTokenInstance'/>
            </label>
            <button onClick={handleClick}>Sign</button>

        </form>
    );
};

export default Sign;