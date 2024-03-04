import './verification.css'
import tweet  from './images/tweet.svg';
import logo from  './images/LeaveHR.svg';


export default function Verification(){

    return (
            <div className='loginPage'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                
                <div className='imgContainer'> 
                <img src={tweet} alt="tweet" className='img'/>
                </div>
                <div className='text'>
                    <h1>Your Account is Now Verified</h1>
                    <p>you will be notified once your account was approved by the admin !</p>
                </div>
                <div className='btn'>
                    <button className='butn'>Return</button>
                </div>
            </div>
    )
}
