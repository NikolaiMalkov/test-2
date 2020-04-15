import React, { Component } from "react";
import SomeComponent from "../SomeComponent/SomeComponent";
import colors from '../data/colors'

class SomeView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showSomeComponent: false,
      value: '',
      color: colors[0]
    }
  }

  onCommit = value => {
    this.setState({ 
      value: value,
      showSomeComponent: false,
      color: colors[0]
    })
  }

  changeColor = () => {
    this.setState({ color: colors[Math.floor(Math.random() * colors.length)]})
  }

  render() {
    return (
      <div>
        {!this.state.showSomeComponent &&
          <button 
            onClick={() => this.setState({ showSomeComponent: true })}
          >
            Show some component
          </button>
        }
        {this.state.showSomeComponent &&
          <SomeComponent
            value={this.state.value}
            onCommit={this.onCommit}
            color={this.state.color}
            changeColor={this.changeColor}
          />
        }
      </div>
    );
  }
}

export default SomeView;