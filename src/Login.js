import React from 'react'
import { useStateValue } from './StateProvider'

export default function Login(props) {
    const [state,dispatch] = useStateValue()

    const loginToApp = () => {
        dispatch({
            type:'SET_USER',
            user:'Piraveen'
        });

    }


    return (
        <div>
            <h1> I am the login component </h1>
            <button onClick={loginToApp}>LOGIN</button>
        </div>
    )
}
 