import React from 'react';

export default class Buttons extends React.Component {
  state = {
    isActive: true,
  };

  handleClick = (evt) => {
    this.setState({ isActive: !this.state.isActive }, this.props.toggler);
  };

  render() {
    const css = 'button ' + (this.state.isActive && 'active');
    return (
      <>
        <button className={css} onClick={this.handleClick} renderForm={false}>
          {this.props.props}
        </button>
      </>
    );
  }
}
