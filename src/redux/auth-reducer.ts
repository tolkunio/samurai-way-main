import {Dispatch} from 'redux';
import {userApi} from '../api/api';
const SET_USER_DATA ='SET_USER_DATA';

export type AuthUserType={
    userId:string,
    email:string,
    login:string
    isAuth:boolean
}
let initialState:AuthUserType ={
    userId:'',
    email:'',
    login:'',
    isAuth:false
}
export const setAuthUserData = (authData:AuthUserType) => {
    return {
        type: SET_USER_DATA,
        payload: {
            authData
        }
    } as const
};

export type setUserDataType = ReturnType<typeof setAuthUserData>;
export type AuthReducerType = setUserDataType;
export const authReducer = (state=initialState, action:AuthReducerType)=>{
    switch (action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload.authData,
                isAuth:true
            }
        default:
            return state;
    }
}
export const authUserTC=()=>(dispatch:Dispatch)=>{
    console.log('authme')
    userApi.authMe()
        .then((res) => {
            if (res.data.resultCode === 0) {
                console.log({res})
                dispatch(setAuthUserData(res.data.data));
            }
        });
}
