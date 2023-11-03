import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user}  = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>this is home of {user && <span>{user.displayName}</span>}</h1>
        </div>
    );
};

export default Home;