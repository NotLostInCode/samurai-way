import React from 'react';
import s from '../Dialogs.module.css';

type PropsType = {
    message: string
}

export const Message:React.FC<PropsType> = (props) => {
    return (
            <>
                {/*<div className={s.message}>{props.message}</div>*/}
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </>

    );
};

