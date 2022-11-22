import React from 'react';
import Board from './Board';
import eraser from './eraser.png';
import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5", 
            eraser: null
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    eraserState(params) {
        this.setState({
            erase: params.target.checked
        })
    }

    render() {

        return (
            <div className="container">
                <div className="content">
                    <div className="heading">
                        <h1>✏️VW</h1>
                    </div>
                    <div class="tools-section">
                        <div className="selection">
                            <div className="brushsize-container">
                                <select class="pick_size" value={this.state.size} onChange={this.changeSize.bind(this)}>
                                    <option> 5 </option>
                                    <option> 10 </option>
                                    <option> 15 </option>
                                    <option> 20 </option>
                                    <option> 25 </option>
                                    <option> 30 </option>
                                </select>
                            </div>

                            <div className="color-picker-container">
                                <input class="pick_color" type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                            </div>

                            <div className="eraser-container">
                                <img class="gambar" src={eraser} />&nbsp;
                                <input id="eraser" type="checkbox" onChange={this.eraserState.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="footnote">
                        🤓 Virtual Whiteboard by Bening, Aga, and Ezra
                    </div>
                </div>
                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size} erase={this.state.erase}></Board>
                </div>
            </div>
        )
    }
}

export default Container