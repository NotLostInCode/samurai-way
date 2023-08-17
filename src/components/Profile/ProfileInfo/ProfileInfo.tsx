import bg from '../../../assets/images/bg-samuray-way.webp'
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={bg} alt=""/>
            </div>
            <div className={s.description}>
                ava + descr
            </div>

        </div>
    )
}