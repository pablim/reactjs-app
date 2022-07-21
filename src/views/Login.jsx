import React, { useState } from 'react'
import { loginRequest } from '../api/services/Auth'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const autenticate = () => {
        loginRequest({
            username,
            password
        }).then((response) => {
            console.log('response', response)
        })
    }

    const onChangeUsername = (value) => {
        setUsername(value)
    }

    const onChangePassword = (value) => {
        setPassword(value)
    }

    return (
        <>
            <form>
                <label>Username</label>
                <input value={username} 
                    onChange={(e) => onChangeUsername(e.target.value)}/>

                <label>Senha</label>
                <input value={password} 
                    onChange={(e) => onChangePassword(e.target.value)}/>

                <button onClick={(e) => {
                        e.preventDefault()
                        autenticate()
                    }}
                >
                    Login
                </button>
            </form>
        </>
    )
}

export default Login