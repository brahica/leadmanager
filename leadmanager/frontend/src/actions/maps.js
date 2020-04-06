import axios from 'axios'
import { createMessage, returnErrors } from '../actions/message'
import { tokenConfig } from './auth'

import { GET_ERRORS, GET_MAPS, ADD_MAP, DELETE_MAP } from './types'


// GET LEADS
export const getMaps = () => (dispatch, getState) => {
    axios.get('/api/maps/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_MAPS,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// ADD MAP
export const addMap = (map) => (dispatch, getState) => {
    axios.post('/api/maps/', map, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                addMap: 'Map Added'
            }))
            dispatch({
                type: ADD_MAP,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


// DELETE MAP
export const deleteMap = (id) => (dispatch, getState) => {
    axios.delete(`/api/maps/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                deleteLead: 'Map Deleted'
            }))
            dispatch({
                type: DELETE_MAP,
                payload: id
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}