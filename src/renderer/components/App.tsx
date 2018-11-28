import * as React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../shared/actions/counter';

export interface Props {
    handleClick: () => void
    count: number;
}

export class App extends React.Component<Props, {}> {
  constructor(props) {
    super(props);

    // handleClick を書くときは必ず bind する！
    // this.handleClick = this.handleClick.bind(this)
    // this.state = {
    // };
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
