import './Signup.css'

const Signup = () => {
    return (
        <header className='signup--container'>
            <div className='signup--banner'>
                <h1>Try it free 7 days <span className='light-text'>then $20/mo. thereafter</span></h1>
            </div>
            <form className='signup--form'>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Email Address'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Confirm Password'/>
                <button className='signup--button' >CLAIM YOUR FREE TRIAL</button>
                <p>
                    By clicking the button, you are agreeing to our Terms 
                    and Services
                </p>
            </form>
        </header>
    )
}

export default Signup