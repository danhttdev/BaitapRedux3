
import {
    initialState,
    TOGGLE_PERMIT
} from "../constants/constants";

export function reducer(state = initialState, action) {
    switch (action.type) { 
        case TOGGLE_PERMIT:
            return {
                ...state,
                isPermit: !state.isPermit
            }
        default:
            return state;
    }
}
