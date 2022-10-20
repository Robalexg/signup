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
            errorMsg: 'Looks like this is not an email',
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

        if(!user.first.value){
            setUser(prevUser => (
                 {
                    ...prevUser,
                    first: {
                        ...prevUser.first,
                        error: true
                    }
                }
            )) 
        }

        if(!user.last.value){
            setUser(prevUser => (
                {
                   ...prevUser,
                   last: {
                       ...prevUser.last,
                       error: true
                   }
               }
           )) 
        }

        if(!user.email.value){
            setUser(prevUser => (
                {
                   ...prevUser,
                   email: {
                       ...prevUser.email,
                       error: true
                   }
               }
           )) 
        }

        if(!user.pass.value){
            setUser(prevUser => (
                {
                   ...prevUser,
                   pass: {
                       ...prevUser.pass,
                       error: true
                   }
               }
           )) 
        }

        if(user.pass.value != user.confirmPass.value){
            setUser(prevUser => (
                {
                   ...prevUser,
                   confirmPass: {
                       ...prevUser.confirmPass,
                       error: true
                   }
               }
           )) 
        }


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
                <small className='signup--errorText'>{user.first.error ? user.first.errorMsg : ''}</small>
                <input 
                    name='last' 
                    onChange={handleChange} 
                    type="text" 
                    placeholder='Last Name'
                    value={user.last.value}
                    className = {user.last.error ?  'signup--error' : ''}

                />
                <small className='signup--errorText'>{user.last.error ? user.last.errorMsg : ''}</small>

                <input 
                    name='email' 
                    onChange={handleChange} 
                    type="email" 
                    placeholder='Email Address'
                    value={user.email.value}
                    className = {user.email.error ?  'signup--error' : ''}
                />
                <small className='signup--errorText'>{user.email.error ? user.email.errorMsg : ''}</small>

                <input 
                    name='pass' 
                    onChange={handleChange} 
                    type="password" 
                    placeholder='Password'
                    value={user.pass.value}
                    className = {user.pass.error ?  'signup--error' : ''}


                />
                <small className='signup--errorText'>{user.pass.error ? user.pass.errorMsg : ''}</small>

                <input 
                    name='confirmPass' 
                    onChange={handleChange} 
                    type="password"  
                    placeholder='Confirm Password'
                    value={user.confirmPass.value}
                    className = {user.confirmPass.error ?  'signup--error' : ''}


                />
                <small className='signup--errorText'>{user.confirmPass.error ? user.confirmPass.errorMsg : ''}</small>

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