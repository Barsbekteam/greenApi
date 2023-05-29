import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import './answer.scss'
import {MdCloseFullscreen} from "react-icons/md";
import {SET_MODAL} from "../../redux/actionTypes";
const Answer = () => {
    const dispatch = useDispatch()
    const {sign,} = useSelector(state => state.main)
    const [status, setStatus] = useState({})
    const [id, setId] = useState({})
    const [del, setDel] = useState({})
    const getAnswer = async () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        try {
            const response = await axios(`https://api.green-api.com/waInstance${sign.idInstance}/receiveNotification/${sign.apiTokenInstance}`, requestOptions)
            const {data} = await response
            const {body} = await data
            setStatus(body)
            setId(data)

        }catch (e) {
            console.log(e)
        }
    }
     const deleteMessage = async () => {
        const requestOption = {
            method: 'DELETE',
            redirect: 'follow'
        };
        try {
            const response = await axios(`https://api.green-api.com/waInstance${sign.idInstance}/deleteNotification/${sign.apiTokenInstance}/${id.receiptId}`, requestOption)
            const {data} = await response
            setDel(data)
        }catch (e) {
            console.log(e)
        }
        dispatch({type: SET_MODAL, payload: false})
        getAnswer()
    }
    const handleClick = () => {
        dispatch({type: SET_MODAL, payload: false})
    }
    console.log(del)
    useEffect(() => {
        getAnswer()
    }, [])
    return (
        <div>
            <div className="answer--modal" onClick={handleClick}/>
            <div className="answer">
                <MdCloseFullscreen onClick={handleClick}/>
                <h3>номер сообщений: {id.receiptId}</h3>
                <h3>Статус сообщений: {status.status}</h3>
                <button onClick={deleteMessage}>удалить</button>
            </div>
        </div>
    );
};

export default Answer;