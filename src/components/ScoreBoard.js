import React, {Component} from 'react';
import '../App.css';

class ScoreBoard extends Component {

    render() {
        return (
            <div className="score-board">
                <div className="scores">
                    <h3>Scores</h3>
                    <h2>0 - 0</h2>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;