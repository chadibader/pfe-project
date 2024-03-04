import './registration.css'
import tweeet  from './images/tweeet.svg';
import logo from  './images/LeaveHR.svg';


export default function Registration(){

    return (
            <div className='loginPage'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                
                <div className='imgContainer'>
                <img src={tweeet} alt="tweet" className='img'/>
                </div>
                <div className='text'>
                    <h1>your registration was succesful</h1>
                    <p>Your account was created Successfully, check your email to verify you account</p>
                </div>
                <div className='btn'>
                    <button className='butn'>Return</button>
                </div>
            </div>
    )
}
