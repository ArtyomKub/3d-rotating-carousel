import React from 'react';
import style from './App.module.css'

function App() {
    return (
        <div className={style.container}>
            <div className={style.carousel}>
                <div className={style.image}><span>THIS IS</span></div>
                <div className={style.image}><span>MY FIRST</span></div>
                <div className={style.image}><span>3D ANIMATION</span></div>
                <div className={style.image}><span>PROJECT</span></div>
                <div className={style.image}><span>WITH</span></div>
                <div className={style.image}><span>TYPESCRIPT</span></div>
                <div className={style.image}><span>PRODUCT</span></div>
                <div className={style.image}><span>BY</span></div>
                <div className={style.image}><span>ARTYOM KUB</span></div>
            </div>
        </div>
    );
}

export default App;
