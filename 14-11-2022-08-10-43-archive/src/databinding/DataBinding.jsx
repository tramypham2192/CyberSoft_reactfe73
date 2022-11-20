import React, { Component } from 'react'

export default class DataBinding extends Component {

    src = 'https://i.pravatar.cc?u=1';
    name = 'Quách Khải !';

    renderCard = () => {

        //Nội dung phương thức ssẽ trả về: JSX, string, boolean, number
        return <div>
            Hello {this.name}
        </div>
    }




    render() {
        const title = 'Cybersoft';

        return (
            <div className='container'>
                <h3>Data binding</h3>

                <p id="txt">Title: {title}</p>
                <br />
                <img src={this.src} alt='...' className='w-25' />

                {this.renderCard()}

            </div>
        )
    }
}
