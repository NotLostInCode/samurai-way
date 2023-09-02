
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    message: MessageType[]
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

export const store: StoreType = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'My first post?', likesCount: 11},
                {id: 3, message: 'Yooo', likesCount: 15},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost(postMessage: string) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}





//-----------------------------------------------------------------------
// let rerenderEntireTree = () => {
//     console.log('state changed')
// }
//
// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// export type DialogsType = {
//     id: number
//     name: string
// }
//
// export type MessageType = {
//     id: number
//     message: string
// }
//
// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// export type ProfilePageType = {
//     posts: PostsType[]
//     newPostText: string
// }
//
// export type DialogsPageType = {
//     dialogs: DialogsType[]
//     message: MessageType[]
// }
//
// export const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi', likesCount: 12},
//             {id: 2, message: 'My first post?', likesCount: 11},
//             {id: 3, message: 'Yooo', likesCount: 15},
//         ],
//         newPostText: '',
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Dimych'},
//             {id: 2, name: 'Andrey'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Sasha'},
//             {id: 5, name: 'Viktor'},
//             {id: 6, name: 'Valera'},
//         ],
//         message: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is your it-kamasutra?'},
//         ],
//     },
// }
//
// export const addPost = (postMessage: string) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likesCount: 0,
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }

