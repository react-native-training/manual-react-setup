import React from 'react';

class App extends React.Component {
  animate() {
    console.log('hello world')
  }
  render() {
    return (
      <div style={styles.container}>
        <p>Hello</p>
        <button onClick={this.animate.bind(this)}>Animate</button>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 20,
  }
}

export default App;
