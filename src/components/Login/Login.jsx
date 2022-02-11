import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState('password');
    const[eye,setEye]=useState(true);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    };

    const togglePassword = () => {

        if(password === "password"){
            setPassword("text");
            setEye(false);
        }
        else{
            setPassword("password");
            setEye(true);
        }
    };



  return (
      <div className='bg-primary flex justify-center items-center w-full h-screen mx-auto font-open'>
        <div className='bg-white lg:w-1/3 rounded-lg p-8 '>
            <div className='mb-6'>
                <h1 className='font-cairo text-black font-bold text-3xl mb-4'>Welcome Back!</h1>
                <p className='text-black'>please login using your account</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p className='text-grey2 text-xs mb-2 uppercase'>Username</p>
                    <input 
                        required
                        type="text" 
                        onChange={e => setUserName(e.target.value)} 
                        className='bg-grey3 w-full shadow-sm mb-4 border-primary mt-1 block px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:rounded-md'
                    />
                </label>
                <label>
                    <p className='text-grey2 text-xs mb-2 uppercase'>Password</p>
                    <div className='relative'>
                        <input 
                            required
                            type={password} 
                            onChange={e =>setPassword(e.target.value)}
                            className='bg-grey3 w-full shadow-sm mb-4 border-primary mt-1 block px-3 py-1 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:rounded-md'
                        />                        
                        <div onClick={togglePassword}>
                            {eye? <AiFillEye className='absolute top-2 right-2 cursor-pointer' /> : <AiFillEyeInvisible className='absolute top-2 right-2 cursor-pointer' />}
                        </div>
                    </div>
                </label>
                <div>
                    <button type="submit" className='bg-primary hover:bg-purple-500 w-full px-1 py-2 text-center uppercase text-white rounded-md shadow-2xl text-xs font-open font-bold'>Login</button>
                </div>
                <div className='mt-3 flex justify-between'>
                    <p className='text-xs'>forgot your password?</p>
                    <a href='/'className='text-primary underline text-xs'>Reset Here</a>
                </div>
            </form>
            <div className='mt-4'>
                <button className='bg-accent2 hover:bg-pink-500 w-full px-1 py-2 text-center uppercase text-white rounded-md shadow-lg font-bold text-xs'>Create an account</button>
            </div>
        </div>
      </div>
  );
};

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
