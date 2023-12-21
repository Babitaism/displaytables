import { SHOWSKELETON } from "../actiontype/actiontype";


export default function showSkeleton(state = {}, action){
    switch (action.type) {
        case SHOWSKELETON:
          return { value: action.payload }
        default:
          return state
      }
}
