/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./Voting.css";
import business from "../../assets/images/business.png";
import haywire from "../../assets/images/haywire.png";
import laugh from "../../assets/images/laugh.png";
import thoughtfulness from "../../assets/images/thoughtfulness.png";
import unkind from "../../assets/images/unkind.png";



function Voting() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [winner, setWinner] = useState(null); 

    const images = [business, haywire, laugh, thoughtfulness, unkind];
    const counts = [count, count1, count2, count3, count4];

    const findWinner = () => {
        let maxCount = Math.max(...counts);
        let winnerIndex = counts.indexOf(maxCount);
        setWinner(winnerIndex);
    };


    return (
        <>
            <h1>кликни на понравившийся смайл</h1>
            <div className='voting-content'>
                <div className="voting-box">
                    <img className='voting-img' src={business} onClick={() => setCount(count + 1)}></img>
                    <p>Вы нажали {count} раз</p>
                </div>
                <div className="voting-box">
                    <img className='voting-img' src={haywire} onClick={() => setCount1(count1 + 1)}></img>
                    <p>Вы нажали {count1} раз</p>
                </div>
                <div className="voting-box">
                    <img className='voting-img' src={laugh} onClick={() => setCount2(count2 + 1)}></img>
                    <p>Вы нажали {count2} раз</p>
                </div>
                <div className="voting-box">
                    <img className='voting-img' src={thoughtfulness} onClick={() => setCount3(count3 + 1)}></img>
                    <p>Вы нажали {count3} раз</p>
                </div>
                <div className="voting-box">
                    <img className='voting-img' src={unkind} onClick={() => setCount4(count4 + 1)}></img>
                    <p>Вы нажали {count4} раз</p>
                </div>
            </div>

            <button onClick={findWinner}>show results</button>
            {winner !== null && (
                <div className="winner-box">
                    <p>Победитель: <img className='winner-img' src={images[winner]} alt={`Winner ${winner}`} /></p>
                </div>
            )}
        </>
    );
}
export default Voting;
////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
