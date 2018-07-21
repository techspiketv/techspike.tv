import React from 'react';

const modes = [
  'exclusion',
  'difference'
  // 'multiply',
  // 'screen',
  // 'overlay',
  // 'darken',
  // 'lighten',
  // 'color-dodge',
  // 'saturation',
  // 'color'
  // 'luminosity'
];

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var brandColors = ['#27225b', '#ff605d', '#fcb373', '#48caca', '#2cb3d9'];

// colors = brandColors;

const updateRate = 1;

export default class Hero extends React.Component {
  state = {
    i: 0,
    mode: 'lighten'
  };

  componentWillMount() {
    if (false || this.props.tripp) {
      let color;
      this.interval = setInterval(() => {
        let nextState = {
          // mode: modes[Math.floor(Math.random() * modes.length)],
          // color: colors[Math.floor(Math.random() * colors.length)],
          i: this.state.i + 30
        };
        this.setState(nextState);
        // console.log(nextState);
      }, updateRate * 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }
  render() {
    let { style, children, background, rightImageStyles } = this.props;
    let { color, i, mode } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url("${background}")`,
          // backgroundColor: color,
          mixBlendMode: `${mode}`,
          transition: `${updateRate}s`,
          filter: ` hue-rotate(${i}deg)`
        }}
      >
        {children}
      </div>
    );
  }
}
