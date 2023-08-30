import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';

import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type PropsType = {
    state: DialogsPageType
}

export const Dialogs:React.FC<PropsType> = (props) => {
    const {dialogs, message} = props.state

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = message.map(el => <Message  message={el.message} />)

    return (
        <div className={s.dialogs}>
            <div  className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};
