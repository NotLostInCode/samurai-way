import s from './Post.module.css';
import avatar from '../../../../assets/images/avatar-samuray-way.png'

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
