import * as actionTypes from "./actionTypes";

export function loader(val){
    return {
        type:actionTypes.SET_LOADER,
        payload:val
    }
}
