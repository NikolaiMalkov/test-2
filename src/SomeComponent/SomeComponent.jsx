import React, { Component } from "react";
import PropTypes from "prop-types";

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      color: props.color
    };
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.color !== this.state.color) {
      this.setState({ color: this.props.color });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.onCommit(this.state.value);
    } else {
      this.props.changeColor();
    }
  };

  onInputChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          style={{ backgroundColor: this.state.color }}
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <span>Press Enter to commit</span>
      </div>
    );
  }
}

SomeComponent.propTypes = {
  value: PropTypes.string,
  onCommit: PropTypes.func,
  color: PropTypes.string,
  changeColor: PropTypes.func
};

export default SomeComponent;
