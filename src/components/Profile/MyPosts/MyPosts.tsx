import s from './MyPosts.module.css';
import {Post} from './Post/Post';


export const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post likesCount={15} message={'Hi, how are you?'}/>
                <Post likesCount={21} message={`It's my first post`}/>
            </div>
        </div>
    )
}
