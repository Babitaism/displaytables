import {FLAGVALUE } from "../actiontype/actiontype";

export const flagValue = (data) => {
    return {
        type:FLAGVALUE ,
        payload: data
    }
}
