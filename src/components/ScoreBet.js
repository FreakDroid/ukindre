import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

const  ScoreBet = ({score: match, clickToBet}) => {

    return (
        <div className="scores">
            <span className="scoreSpan">
                {match.liveData.score && match.liveData.score.home} - {match.liveData.score && match.liveData.score.away}
                </span>
            <br/>
            {
                match.event.sport.toUpperCase() === "FOOTBALL" ||
                match.event.sport.toUpperCase() === "TENNIS" ||
                match.event.sport.toUpperCase() === "BASKETBALL"
                ? <i className={"icon icon"+ match.event.sport.toUpperCase() } /> :
                    <i className={"icon iconDEFAULT" } />
            }

            <span className="awayHomeSpan">
                {match.event.name}
                </span>
            <br/>
            <span className="whenMatch">
                { moment(match.event.start).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ?
                    'Today, ' + moment(match.event.start).format("HH:mm")  : moment(match.event.start).format('YYYY-MM-DD') +' '+
                    moment(match.event.start).format("HH:mm")
                }
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