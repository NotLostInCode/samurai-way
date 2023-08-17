import bg from '../../assets/images/bg-samuray-way.webp'
import s from'./Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img src={bg} alt=""/>
            </div>
            <div>
                ava + descr
            </div>
        <MyPosts />
        </div>
    )
}