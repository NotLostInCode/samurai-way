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
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    message: MessageType[]
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'My first post?', likesCount: 11},
            {id: 3, message: 'Yooo', likesCount: 15},
        ],
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
}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
}



//---------------------------------------------


// const posts: PostsType[] = [
//     {id: 1, message: 'Hi', likesCount: 12},
//     {id: 2, message: 'My first post?', likesCount: 11},
//     {id: 3, message: 'Yooo', likesCount: 15},
// ]

// const dialogs: DialogsType[] = [
//     {id: 1, name: 'Dimych'},
//     {id: 2, name: 'Andrey'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Viktor'},
//     {id: 6, name: 'Valera'},
// ]

// const message: MessageType[] = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How is your it-kamasutra?'},
// ]