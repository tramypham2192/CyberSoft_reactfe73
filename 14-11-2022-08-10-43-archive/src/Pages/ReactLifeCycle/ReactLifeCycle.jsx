import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ReactLifeCycle extends Component {


    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 1
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //Hàm này dùng để xử lý state trước khi render ra giao diện
        console.log('getDerivedStateFromProps')
        return null; //return null là state giữ nguyên
    }

    shouldComponentUpdate(newProps,newState)  {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render');
        return (
            <div>
                <h3>number : {this.state.number}</h3>
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <ChildComponent />
            </div>
        )
    }
    componentDidMount() {
        //Can thiệp vào dữ liệu trên giao diện sau khi giao diện đã có
        //Thường sử dụng để gọi api hoặc sử dụng các thư viện lên html như animation....
        console.log('componentDidMount')
    }
}
