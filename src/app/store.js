import {configureStore} from '@reduxjs/toolkit'
import postReducers from '../features/posts/postsSlice'
import usersReducers from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        posts: postReducers,
        users: usersReducers,
    }
})