import s from './MyPosts.module.css';
import {Post} from './Post/Post';


export const MyPosts = () => {
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
                <Post likesCount={15} message={'Hi, how are you?'}/>
                <Post likesCount={21} message={`It's my first post`}/>
            </div>
        </div>
    )
}
