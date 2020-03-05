import axios from 'axios'

import { GET_LEADS, DELETE_LEAD } from './types'

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                playload: res.data
            })
        })
        .catch(err => console.error(err))
}

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                playload: id
            })
        })
        .catch(err => console.error(err))
}