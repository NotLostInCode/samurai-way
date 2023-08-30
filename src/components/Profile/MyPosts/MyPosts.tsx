import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import React, {ChangeEvent, useState} from "react";
import {PostsType} from "../../../redux/state";


type PropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

export const MyPosts:React.FC<PropsType> = (props) => {
    const [post, setPost] = useState('')

    const myPostsElements = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)

    const addPost = () => {
        props.addPost(post)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)
    }

    return (
        <div className={s.containerPosts}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={post} onChange={onChangeHandler}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostsElements}
            </div>
        </div>
    )
}
