import { FETCHORDERMETADATA } from "../actiontype/actiontype";



export default function orderMetaData(state = {}, action){
    switch (action.type) {
        case FETCHORDERMETADATA:
          return { value: action.payload }
        default:
          return state
      }
}


