import {TOGGLEFLAG } from "../actiontype/actiontype";

export const toggleFlag = (data) => {
    return {
        type:TOGGLEFLAG,
        payload: data
    }
}
