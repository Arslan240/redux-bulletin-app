import { useDispatch } from 'react-redux'
import { addReactions } from './postsSlice'

const reactionEmoji = {
    thumbsup: '👍',
    wow: '😮',
    heart: '💖',
    rocket: '🚀',
    coffee: '☕'
}


const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch()


    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            value={name}
            className='reactionButton'
            onClick={() => dispatch(addReactions({ postId: post.id, reaction: name }))}
        >
            <span className='emoji'>{emoji}</span> <span className='emoji-value'>{post.reactions[name]}</span>
        </button>
    ))
    return (
        <div>
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons