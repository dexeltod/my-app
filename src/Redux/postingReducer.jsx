let initialState = {

    _profilePage: {
        _posts: [
            {
                id: 1,
                name: "Иван Гевельев",
                post: "Приветствую. Столкнулся с проблемой в необходимости оптимизации виртуалки, т.к. макОС работает с дикими тормозами и откровенно неисправно, много программ отображаются неверно. Но самое печальное - невозможность банально проверить свою программу в xCode путем запуска эмулятора. Причем пустой проект эмулятор спустя 5-10 минут таки загружает, но уже загруженный функциями, циклами, кнопками и прочим не хочет, программа вылетает. Периодически возникают ошибки, скрины их кидаю ниже. С подобными техническими причинами я не могу себя реализовать полноценно в свифте, поэтому прошу помощи.",
                likesCont: "47"
            },
            {id: 1, name: "Данила Котова", post: "Привет брот", likesCont: "47"},
            {id: 2, name: "Марина Кузко", post: "Ямарина", likesCont: "47"},
            {id: 3, name: "Владимир Тильт", post: "Я тебя убью", likesCont: "47"},
            {id: 4, name: "Владислав Харитонов", post: "Тишка привет", likesCont: "47"}

        ],
        _newPostText: "",

        getPosts() {
            return this._posts;
        },

    },


    getProfilePage() {
        return this._profilePage;
    },
}

const postingReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            name: "Новый пользователь",
            post: state._newPostText,
            likesCont: "0"
        }
        state._profilePage._posts.push(newPost);
        state._newPostText = '';
    }
    else if (action.type === 'UPDATE-NEW-POST') {
        state._newPostText = action.newText;
    }
    return state;

}


export default postingReducer;