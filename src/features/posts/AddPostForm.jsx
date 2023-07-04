import { useState } from "react"
import { selectAllUsers } from "../users/usersSlice"
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from "./postsSlice"


const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const usersOptions = users.map(user => (
        <option value={user.id} key={user.id} selected={user.id === 1} >
            {user.name}
        </option>
    ))

    const handleAddPost = () => {
        if (title && content && userId) {
            dispatch(
                addPost(title, content, userId)
            )
        }
        setTitle('')
        setContent('')
    }


    return (
        <form>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" value={title} onChange={onTitleChanged} />
            <label htmlFor="content">Content: </label>
            <textarea type="text" id="content" name="content" value={content} onChange={onContentChanged} />
            <label htmlFor="author">Author: </label>
            <select name="author" id="author" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>
            <button type="button" onClick={handleAddPost}>Add Post</button>
        </form>
    )
}

export default AddPostForm