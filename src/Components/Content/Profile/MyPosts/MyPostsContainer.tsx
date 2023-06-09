import React from 'react';
import {
    addNewPostAC,
    changeNewTextAC, ProfilePageType
} from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {AppRootStateType} from '../../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    profilePage: ProfilePageType,
    msgForNewPost:string
}
type MapDispatchPropsType = {
    addPostCallback: () => void
    changePostCallback: (newMsg: string) => void,

}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;
let mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        msgForNewPost: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addNewPostAC());
        },
        changePostCallback: (newMsg: string) => {
            dispatch(changeNewTextAC(newMsg));
        }
    }
}
export const MyPostsContainer =
    connect<MapStatePropsType,MapDispatchPropsType,{},AppRootStateType>
    (mapStateToProps, mapDispatchToProps)(MyPosts);