import React from 'react';
import AppBar from '../header/AppBar/AppBar';
import s from './container.module.css'


const Container = ({ children }) => (

    <div className={s.container}>

        <AppBar /> 

        {children}
        
    </div>
);

export default Container