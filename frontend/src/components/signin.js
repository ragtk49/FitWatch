import React, { useState } from 'react';


export const SignIn = () => {

    const handleChange = (event) => {
        event.preventDefault();
        console.log('clicked');
        let username = document.getElementById('uname').value;
        setUsername(username);
        console.log(username);
    }
    
    const [username,setUsername] = useState('');
    return (
        <div>
            <div className='head-name' style={{textAlign:'center'}}>
                <h1>AR GYM</h1>
            </div>
            <div>
                <form style={{textAlign:'center'}}>
                    <label>
                        <p>Username</p>
                        <input type="text" id="uname" name="username" placeholder="Username"/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password" placeholder="Password" />
                    </label>
                    <label>
                    <div style={{marginTop:'20px'}}><button type="submit" onClick={handleChange}>Sign In</button></div>
                    </label>
                </form>
            </div>
        </div>
    )
}