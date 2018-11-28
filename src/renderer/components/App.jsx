import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../shared/actions/counter';

export class App extends Component {
  constructor(props) {
    super(props);

    // handleClick を書くときは必ず bind する！
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
    };
  }

  // handleClick() {
  //   const { dispatch } = this.props;
  //   dispatch(increment());
  // }

  render() {
    const { handleClick, count } = this.props;
    return (
      <div>
        <h1>Counter Example</h1>
        <div>count: {count}</div>
        <button onClick={handleClick}>+1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
})
const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(increment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
