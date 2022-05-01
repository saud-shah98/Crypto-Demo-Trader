import React from 'react';
import {AuthProvider} from './AuthProvider';
import Router from './Router';

export default function Providers(){
    return(
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
}