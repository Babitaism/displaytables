
import { FETCHORDERMETADATA} from "../actiontype/actiontype";

export const fetchOrderMetaData = (data) => {
    return {
    type: FETCHORDERMETADATA,
    payload: { data,
  },
};
};
