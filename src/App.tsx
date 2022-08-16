import React, {useState} from 'react';
import './App.css';
import {PageTitle} from "./Components/PageTitle/PageTitle";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordeon} from "./Components/Accordeon/Accordeon";
import {UnControlOnnOff} from "./Components/UnControlOnnOff/UnControlOnnOff";
import {UnControlAccordeon} from "./Components/UnControlAccordeon/UnControlAccordeon";
import {UnControlRating} from "./Components/UnControlRating/UnControlRating";
import {OnnOff} from "./Components/OnnOff/OnnOff";
import Stars, {StarValue} from "./Components/Rating/Stars/Stars";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordenCollapsed] = useState<boolean>(true)
    let [onSwitch, setOnSwitch] = useState(false)
    let [star, setStar]= useState<StarValue>(0)

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            <div>Control</div>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordeon titleValue={'Меню'} collapsed={accordeonCollapsed} onClick={() => {setAccordenCollapsed(!accordeonCollapsed)}}/>
            <OnnOff on={onSwitch} onClick={setOnSwitch}/>

            new
            <Stars star={star} onClickStar={setStar}/>

            <div>UnControl</div>
            <UnControlAccordeon titleValue={'Меню'}/>
            <UnControlRating/>
            <UnControlOnnOff onClick={setOnSwitch}/> {onSwitch.toString()}
        </div>
    );
}

export default App;
