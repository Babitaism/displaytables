import {SEARCHDATA} from "../actiontype/actiontype"

export const searchData = (data) => {
    return {
    type: SEARCHDATA,
    payload:{data}
};
};
