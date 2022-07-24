import React from 'react';
import './App.css';
import {PageTitle} from "./Components/PageTitle";
import {Rating} from "./Components/Rating";
import {Accordeon} from "./Components/Accordeon";
import {OnnOff} from "./Components/OnnOff/OnnOff";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            Article 1
            <Accordeon titleValue={'Меню'} collapsed={true}/>
            <Accordeon titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnnOff />
        </div>
    );
}

export default App;
