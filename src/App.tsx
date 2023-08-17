import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error} from './components/Error/Error';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';



function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className={'app-wrapper-content'}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                <Route path={'/profile'} element={<Profile />}/>
                <Route path={'/dialogs'} element={ <Dialogs />}/>
                <Route path={'/news'} element={ <News />}/>
                <Route path={'/music'} element={ <Music />}/>
                <Route path={'/settings'} element={ <Settings />}/>
                {/*<Route path={'*'} element={ <Error/>}/>*/}
            </Routes>
            </div>
        </div>
    );
}

export default App;
