import axios from "axios";
import { URI } from '../URI'
import { Dispatch } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = (name:string, email:string, password:string, avatar:string) => async (dispatch:Dispatch<any>) => {
  try {
    dispatch({
      type: "userRegisterRequest"
    })

    const config = {headers: {'Content-Type': 'application/json'}}

    const {data} = await axios.post(`${URI}/registration`, {name,email,password,avatar}, config)
    dispatch({
      type:"userRegisterSuccess",
      payload: data.user,
    })



  } catch (error:any) {
    dispatch({
      type:"userRegisterFailed",
      payload: error.response.data.message,
    })
  }
}

// load user
export const loadUser = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: "userLoadRequest"
    })

    const config = {headers: {'Content-Type': 'application/json'}}
    const {data} = await axios.get(`${URI}/me`)

    dispatch({
      type:"userLoadSuccess",
      payload: data.user,
    })

  } catch (error:any) {
    dispatch({
      type:"userLoadFailed",
      payload: error.response.data.message,
    })
  }
};
