import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {SET_MODAL} from "../../redux/actionTypes";
import Answer from "../Answer";

const Send = () => {
    const {sign, modal} = useSelector(state => state.main)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [border, setBorder] = useState(false)
    const [value, setValue] = useState({
        number: '',
        messages: ''
    })
    const handleChange = (e) => {
        setBorder(false)
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        const data = {
            chatId: `${value.number}@c.us`,
            message: value.messages
        }
        if (value.number.trim().length && value.messages.trim().length) {
            setBorder(false)
            axios.post(`https://api.green-api.com/waInstance${sign.idInstance}/sendMessage/${sign.apiTokenInstance}`, data)
                .then(response => {
                    console.log('successfully', response)
                })
                .catch(error => {
                    console.error('error', error)
                })
            setValue({number: '', messages: ''})
        } else {
            setBorder(true)
        }

    }
    const handleAnswer = () => {
        dispatch({type: SET_MODAL, payload: true})
    }
    useEffect(() => {

    }, [value, sign])
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="send">
                <label>Вводи номер телефона получателя
                    <input style={{border: border ? 'red 1px solid' : ''}} value={value.number} onChange={handleChange}
                           type="string" name="number" placeholder="phone number"/>
                </label>
                <label>Пиши текстовое сообщение и отправляй
                    <input style={{border: border ? 'red 1px solid' : ''}} value={value.messages}
                           onChange={handleChange} type="string" name="messages" placeholder="message for friend"/>
                </label>
                <button onClick={handleClick}>Отправить сообщение</button>
                <button onClick={handleAnswer}>показать информацию о сообщении</button>
            </form>
            <div hidden={!modal}>
                <Answer />
            </div>
        </div>
    );
};

export default Send;