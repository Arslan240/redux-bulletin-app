import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import { selectAllPosts } from "./postsSlice";
import { useSelector } from 'react-redux'


const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts && (
        posts.map(post => {
            console.log(post.userId)
            return (
                <article className="post-credit" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <PostAuthor userId={post.userId} />
                    <ReactionButtons post={post} />
                </article>
            )
        })
    )

    return (
        <>
            <AddPostForm />
            <h2>Posts</h2>
            {renderedPosts}
        </>
    )
}

export default PostsList