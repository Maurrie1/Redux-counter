import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, inputNumberChange } from '../actions/index';
class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} trackClicks={this.props.trackClicks} onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} trackClicks={this.props.trackClicks} />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number)),

  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    numberInputted: state.numberInputted,
    trackClicks: state.trackClicks
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
