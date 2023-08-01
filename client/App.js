import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import './index.css'
import Body from './src/components/Body'
import Experiences from './src/components/Experiences'
import Skills from './src/components/Skills'
import Contact from './src/components/Contact'
import { BrowserRouter } from 'react-router-dom'
import Message from './src/components/Message'

const Main = () =>{
    return(
        <BrowserRouter>
        <div className='body'>
            <Header/>
            <Body/>
             <Experiences/> 
             <Skills/>
             <Message/>
             <Contact/>
        </div>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);