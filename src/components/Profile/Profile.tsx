import bg from '../../assets/images/bg-samuray-way.webp'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from "react";
import {ProfilePageType} from "../../redux/state";



type PropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}


export const Profile: React.FC<PropsType> = (props) => {
    const {posts, newPostText} = props.state
    const {addPost, updateNewPostText} = props

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={updateNewPostText} posts={posts} addPost={addPost} newPostText={newPostText}/>
        </div>
    )
}