import React from 'react';
import {Motion, spring} from 'react-motion';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      open2: false,
    }
  }
  animate() {
    this.setState({
      open: !this.state.open
    })
  }
  animate2() {
    this.setState({
      open2: !this.state.open2
    })
  }
  render() {
    return (
      <div style={styles.container}>
        <p>Hello</p>
        <button onClick={this.animate.bind(this)}>Animate</button>
        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
          {
            ({ x }) => (
              <div style={Object.assign(
                {},
                styles.box,
                {
                  marginLeft: `${x}px`,
                }
              )} />
            )
          }
        </Motion>
        <button onClick={this.animate2.bind(this)}>Animate2</button>
        <div
          className={['animate2', this.state.open2 ? 'animated' : null].join(' ')}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
}

export default App;
