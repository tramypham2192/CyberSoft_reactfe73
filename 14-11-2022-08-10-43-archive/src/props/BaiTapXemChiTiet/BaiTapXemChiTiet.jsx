import React, { Component } from 'react'
import PhoneCard from './PhoneCard'
const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]


export default class BaiTapXemChiTiet extends Component {

    state = {
        spChiTiet : { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    }
    renderPhone = () => {
        //Dùng map
        return data.map((item, index) => {
            return <div className='col-4 mt-2' key={index}>
                <PhoneCard sp={item} xemCT={this.xemChiTiet} />
                {/* <button onClick={()=>{
                    this.xemChiTiet(item);
                }}> View detail</button> */}
            </div>
        })
    }

    xemChiTiet = (phoneClick) => {
        // console.log(phoneClick)
        //Cập nhật state thành sp click
        this.setState({
            spChiTiet:phoneClick
        })
    }


    render() {
        const {maSP,tenSP,hinhAnh,cameraSau,cameraTruoc,giaBan,heDieuHanh,manHinh,ram,rom} = this.state.spChiTiet;
        return (
            <div className='container'>
                <h3>Product list</h3>
                <div className='row'>
                    {this.renderPhone()}
                </div>

                <div className='mt-2'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3>{tenSP}</h3>
                            <img className='w-100' src={hinhAnh} alt='...' height={450} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='col-8'>
                            <h3>Product detail</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>Ram</td>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <td>Rom</td>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
