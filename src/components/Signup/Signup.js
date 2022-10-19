import './Signup.css'
import { useState } from 'react'

const Signup = () => {
    const [user,setUser] = useState({
        first: {
            error: false,
            errorMsg: 'First Name cannot be empty',
            value: ''
        },
        last: {
            error: false,
            errorMsg: 'Last Name cannot be empty',
            value: ''
        },
        email:{
            error: false,
            errorMsg: 'invalid email',
            value: ''
        },
        pass: {
            error: false,
            errorMsg: 'Password cannot be empty',
            value: ''
        },
        confirmPass: {
            error: false,
            errorMsg: 'Does not match password',
            value: ''
        }
    })


    const handleChange = (e) => {

        const {name,value} = e.target
        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: {
                    ...prevUser[name],
                    value: value
                }
            }
        })


    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser((prevUser) => {
            return {
                ...prevUser,
                first: {
                    ...prevUser.first,
                    error: true
                }
            }
        })

    }






    return (
        <header className='signup--container'>
            <div className='signup--banner'>
                <h1>Try it free 7 days <span className='light-text'>then $20/mo. thereafter</span></h1>
            </div>
            <form className='signup--form'>
                <input 
                    name='first' 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='First Name'
                    value={user.first.value}
                    className = {user.first.error ?  'signup--error' : ''}

                />
                <small>{user.first.error ? user.first.errorMsg : ''}</small>
                <input 
                    name='last' 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='Last Name'
                    value={user.last.value}
                    className = {user.last.error ?  'signup--error' : ''}

                />
                <small>{user.last.error ? user.last.errorMsg : ''}</small>

                <input 
                    name='email' 
                    onChange={handleChange} 
                    type="email" 
                    placeholder='Email Address'
                    value={user.email.value}
                    className = {user.email.error ?  'signup--error' : ''}



                />
                <input 
                    name='pass' 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='Password'
                    value={user.pass.value}
                    className = {user.pass.error ?  'signup--error' : ''}


                />
                <input 
                    name='confirmPass' 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='Confirm Password'
                    value={user.confirmPass.value}
                    className = {user.confirmPass.error ?  'signup--error' : ''}

                />
                <button onClick={handleSubmit} className='signup--button' >CLAIM YOUR FREE TRIAL</button>
                <p className='signup--footer' >
                    By clicking the button, you are agreeing to our <a href='#' className='red-text'>Terms 
                    and Services</a>
                </p>
            </form>
        </header>
    )
}

export default Signup