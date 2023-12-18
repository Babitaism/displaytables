import { SEARCHDATA } from "../actiontype/actiontype";

export default function searchData(state = { }, action){
    switch (action.type) {
        case SEARCHDATA:
          return { value: action.payload }
        default:
          return state
      }
}
