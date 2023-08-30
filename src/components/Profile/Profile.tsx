import bg from '../../assets/images/bg-samuray-way.webp'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from "react";
import {ProfilePageType} from "../../redux/state";


type PropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}


export const Profile: React.FC<PropsType> = (props) => {
    const {posts} = props.state
    const {addPost} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    )
}