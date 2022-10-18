import './app.css'
import Header from './components/Header/Header'
import Signup from './components/Signup/Signup'

const App = () => {
    return (
        <div className='app--container' >
            <Header/>
            <Signup/>
        </div>
    )
}

export default App