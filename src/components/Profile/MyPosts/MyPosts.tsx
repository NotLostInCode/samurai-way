import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import React, { useRef} from "react";
import {PostsType} from "../../../redux/state";


type PropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export const MyPosts:React.FC<PropsType> = (props) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const myPostsElements = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)


    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
            props.updateNewPostText('')
        }
    }

    const onPostChange = () => {
        if(newPostElement.current) props.updateNewPostText(newPostElement.current.value)
    }


    return (
        <div className={s.containerPosts}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={props.newPostText} onChange={onPostChange}  ref={newPostElement}/></div>
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
