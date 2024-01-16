import { TOGGLEFLAG } from "../actiontype/actiontype";


export default function toggleFlag(state = {}, action){
    switch (action.type) {
        case TOGGLEFLAG:
          return { value: action.payload }
        default:
          return state
      }
}
