import { rerenderEntireTree } from '../index';
import dialogReducer from './dialogReducer';
import postingReducer from './postingRedecer';




let store = {

    _state: {

        _profilePage: {
            _posts: [
                { id: 1, name: "Иван Гевельев", post: "Приветствую. Столкнулся с проблемой в необходимости оптимизации виртуалки, т.к. макОС работает с дикими тормозами и откровенно неисправно, много программ отображаются неверно. Но самое печальное - невозможность банально проверить свою программу в xCode путем запуска эмулятора. Причем пустой проект эмулятор спустя 5-10 минут таки загружает, но уже загруженный функциями, циклами, кнопками и прочим не хочет, программа вылетает. Периодически возникают ошибки, скрины их кидаю ниже. С подобными техническими причинами я не могу себя реализовать полноценно в свифте, поэтому прошу помощи.", likesCont: "47" },
                { id: 1, name: "Данила Котова", post: "Привет брот", likesCont: "47" },
                { id: 2, name: "Марина Кузко", post: "Ямарина", likesCont: "47" },
                { id: 3, name: "Владимир Тильт", post: "Я тебя убью", likesCont: "47" },
                { id: 4, name: "Владислав Харитонов", post: "Тишка привет", likesCont: "47" }

            ],
            _newPostText: "",

            getPosts() {
                return this._posts;
            },

        },

        rerenderEntireTree() {
            return this;
        },

        _dialogsPage: {
            _dialogs: [
                { id: 1, name: "Данила Котова", message: "Привет брот" },
                { id: 2, name: "Марина Кузко", message: "Ямарина" },
                { id: 3, name: "Владимир Тильт", message: "Я тебя убью" },
                { id: 4, name: "Владислав Харитонов", message: "Тишка привет" }
            ],

            getDialogs() {
                return this._dialogs;
            },

            _messages:
                [
                    { id: 1, name: "Данила Котова", message: "Привет брот" },
                    { id: 2, name: "Марина Кузко", message: "Ямарина" },
                    { id: 3, name: "Владимир Тильт", message: "Я тебя убью" },
                    { id: 4, name: "Владислав Харитонов", message: "Тишка привет" },
                ],
            _newMessageText: "",
            
            getMessageText() {
                return this._newMessageText;
            },
            

            getMessages() {
                return this._messages;
            },

        },

        getProfilePage() {
            return this._profilePage;
        },

        getDialogPage() {
            return this._dialogsPage;
        }

    },

    _callSubscriber() {
        debugger;
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        debugger;
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state._profilePage = postingReducer(this._state._profilePage, action);
        this._state._dialogsPage = dialogReducer(this._state._dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;