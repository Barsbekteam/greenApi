import {apiTokenInstance, idInstance} from "../components/ApiKey";
import {GET_ANSWER, GET_ID, GET_MESSAGE_ID, SET_MODAL} from "./actionTypes";

const initialState = {
    sign: {
        idInstance: '',
        apiTokenInstance: '',
    },
    modal: false,
}
export const main = (state = initialState, action) => {
    switch (action.type) {
        case GET_ID: {
            return {...state, sign: {idInstance: action.payload, apiTokenInstance: action.payloads}}
        }
        case SET_MODAL: {
            return {...state, modal: action.payload}
        }
        default : {
            return state
        }
    }
}