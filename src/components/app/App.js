import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

import Section from '../section';
import Admin from '../admin';
import Guest from '../guest';

export default function App() {
    return (
        <Router basename='/'>
                <Route path='/' exact>
                    <div className='section-block'>
                        <Link to='admin'> { <Section title='Admin' text='Для доступа необходим вход' /> } </Link>
                        <Link to='guest'>{ <Section title='Guest' text='Можно только просматривать' /> }</Link>
                    </div>
                </Route>
                <Route path='/admin'>
                    <Admin />
                </Route>
                <Route path='/guest'>
                    <Guest />
                </Route>
        </Router>
    );
}