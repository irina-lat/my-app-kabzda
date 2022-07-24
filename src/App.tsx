import React, {useState} from 'react';
import './App.css';
import {PageTitle} from "./Components/PageTitle";
import {Rating, RatingValueType} from "./Components/Rating";
import {Accordeon} from "./Components/Accordeon";
import {UnControlOnnOff} from "./Components/UnControlOnnOff/UnControlOnnOff";
import {UnControlAccordeon} from "./Components/UnControlAccordeon";
import {UnControlRating} from "./Components/UnControlRating";
import {OnnOff} from "./Components/OnnOff/OnnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordenCollapsed] = useState<boolean>(true)
    let [onSwitch, setOnSwitch] = useState(false)

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            <div>Control</div>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordeon titleValue={'Меню'} collapsed={accordeonCollapsed} onClick={() => {setAccordenCollapsed(!accordeonCollapsed)}}/>
            <OnnOff on={onSwitch} onClick={setOnSwitch}/>

            <div>UnControl</div>
            <UnControlAccordeon titleValue={'Меню'}/>
            <UnControlRating/>
            <UnControlOnnOff onClick={setOnSwitch}/> {onSwitch.toString()}
        </div>
    );
}

export default App;
