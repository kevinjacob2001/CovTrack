import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { auth ,provider} from '../../firebase'
import { login, logout } from '../../features/userSlice'

import Google from './google.png'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
<Button className="login__btn" onClick={signIn}><img width="30px" className="mr-3" src={Google}/>Continue with Google</Button>


        </div>
    )
}

export default Login
