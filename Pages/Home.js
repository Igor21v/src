import React from 'react';
import { Profile } from '../Components';
import { LoginForm } from '../Components';

export const Home = () => (
        <>      
                <h1>Личный кабинет учителя/ученика</h1>
                <Profile />
                <LoginForm/>
        </>
)