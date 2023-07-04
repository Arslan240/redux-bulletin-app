import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', name: 'Beaver'},
    {id: '2', name: 'Samuel'},
    {id: '3', name: 'Vick'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        
    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer