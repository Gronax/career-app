import axios from 'axios'

const initialState = {}

// Actions
export const GET_JOBLIST = 'GET_JOBLIST'

// Action Creators
export function getJobList () {
  const request = axios.get('/src/redux/api/jobList.json')

  return {
    type: GET_JOBLIST,
    payload: request
  }
}

// Reducer
export default function jobReducer (state = initialState, action) {
  const {type, payload} = action

  switch (type) {
    case GET_JOBLIST:
      return payload
    default:
      return state
  }
}