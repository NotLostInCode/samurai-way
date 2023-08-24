import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type MyPostsData = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const postData: MyPostsData[] = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ]


    const myPostsElements = postData.map(el => <Post likesCount={el.likesCount} message={el.message}/>)

    return (
        <div className={s.containerPosts}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostsElements}
            </div>
        </div>
    )
}
