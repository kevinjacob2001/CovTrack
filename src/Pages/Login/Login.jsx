import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { auth ,provider} from '../../firebase'
import { login, logout } from '../../features/userSlice'

import './Login.css'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const dispatch=useDispatch()
    const history=useHistory();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch(
                login({
                    username:result.user.displayName,
                    profilePic:result.user.photoURL,
                    id:result.user.uid,
                    emailId:result.user.email
                })
            )
             history.push("/home")
        }).catch(()=>{
            console.log("INVALID")
        })
    }
  useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          if (authUser) {
            dispatch(
              login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                email: authUser.email,
                displayName: authUser.displayName,
              })
            );
            history.push('/home')
          } else {
            //user is logged out
            dispatch(logout());
            history.push('/')
          }
        });
      }, [dispatch,history]);
    

    return (
        <div>
<button className="login_btn" onClick={signIn}>Login with Google</button>
        </div>
    )
}

export default Login
