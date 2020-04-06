import { GET_MAPS, ADD_MAP, DELETE_MAP } from '../actions/types.js'

const initialState = {
    maps: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MAPS:
            return {
                ...state,
                maps: action.payload
            }
        case DELETE_MAP:
            return {
                ...state,
                maps: state.maps.filter(map => map.id !== action.payload)
            }
        case ADD_MAP:
            return {
                ...state,
                maps: [...state.maps, action.payload]
            }
        default:
            return state;
    }

}