import { SHOWSKELETON } from "../actiontype/actiontype";

export const showSkeleton = (data) => {
    return {
        type:SHOWSKELETON,
        payload: data
    }
}
