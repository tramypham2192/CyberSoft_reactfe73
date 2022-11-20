import React, { Component } from 'react'

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor child');
    this.state = {

    }

  }

  shouldComponentUpdate(newProps,newState)  {
    console.log('shouldComponentUpdate child');
    return false;
}


  static getDerivedStateFromProps(newProps, currentState) {
    //Hàm này dùng để xử lý state trước khi render ra giao diện
    console.log('getDerivedStateFromProps child')
    return null;
  }
  render() {
    console.log('render child')
    return (
      <div>ChildComponent</div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount child')
  }
}
