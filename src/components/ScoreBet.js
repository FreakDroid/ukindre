import React from 'react'
import PropTypes from 'prop-types';
import basketball from '../images/icons/basketball.png';

const ScoreBet = ({score, clickToBet}) => {

    return (
        <div className="scores">
            <span className="scoreSpan">
                {score.liveData.score && score.liveData.score.home} - {score.liveData.score && score.liveData.score.away}
                </span>
            <br/>
            {
                score.event.sport.toUpperCase() === "FOOTBALL" ||
                score.event.sport.toUpperCase() === "TENNIS" ||
                score.event.sport.toUpperCase() === "BASKETBALL"
                ? <i className={"icon"+ score.event.sport.toUpperCase() } /> : <i className="" />
            }

            <span className="awayHomeSpan">

                {score.event.name}

                </span>
            <br/>
            <span className="whenMatch">
                TESTETE -TESTSTEST
            </span>
            <br/>
            <button className="betButton" onClick={clickToBet}>
                PLACE A BET
            </button>
        </div>
    )
};

ScoreBet.propTypes = {
    score: PropTypes.object.isRequired,
    clickToBet: PropTypes.func.isRequired
};

export default ScoreBet;