import { FLAGVALUE } from "../actiontype/actiontype";


export default function flagValue(state = {}, action){
    switch (action.type) {
        case FLAGVALUE:
          return { value: action.payload }
        default:
          return state
      }
}
