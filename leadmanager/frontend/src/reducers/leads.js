import { GET_LEADS, DELETE_LEAD } from '../actions/types.js'

const initialState = {
    leads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.playload
            }
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.playload)
            }
        default:
            return state;
    }

}