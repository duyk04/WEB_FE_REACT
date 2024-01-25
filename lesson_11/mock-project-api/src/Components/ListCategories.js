import React, { useEffect, useState } from 'react'
import axios from '../api/mock-api'
import '../App.css'
import Form from './Form'
function ListCategories({ onView }) {
    // tạo state lưu trữ dữ liệu cho componet
    const [listUser, setListUser] = useState([])
    // hàm lấy dữ liệu từ api
    const getAllUser = async () => {
        let response = await axios.get('categories')
        // cập nhật state
        setListUser(response.data)
    }

    // cập nhật dữ liệu khi componet được mout

    useEffect(() => {
        getAllUser();
    }, [])

    // hàm xử lý xóa
    const handleDelete = async (id) => {
        await axios.delete('users/' + id)

    }
    const [items, setItems] = useState()
    const handleView = (item) => {
        setItems(item);
    }
    return (
        <div className='container-fluid' style={{ border: '1px solid red' }}>
            <div>
                <h1 className='my-5 text-start'>Quản lý danh mục sản phẩm</h1>
            </div>
            <div className='d-flex'>
                <div className='col-md-8'>
                    <table className='table table-bordered' style={{ backgroundColor: '#fff' }}>
                        <thead>
                            <tr className='alert alert-info '>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Tên danh mục</th>
                                <th>Mô tả</th>
                                <th>Thứ tự</th>
                                <th>Trạng thái</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listUser.map((item, index) => {
                                    return (
                                        <tr key={index} className='row-view'>
                                            <td>{index}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title.toUpperCase()}</td>
                                            <td>{item.metaKeyword.toUpperCase()}</td>
                                            <td>{item.orders}</td>
                                            <td>{item.status === 1 ? <p style={{ color: 'green' }}>Còn hàng</p> : <p style={{ color: 'red' }}>Hết hàng</p>}</td>
                                            <td>
                                                <button type="button" className="btn btn-primary me-2" onClick={() => handleView(item)}>
                                                    Xem
                                                </button>
                                                <button type="button" className="btn btn-success me-2">
                                                    Sửa
                                                </button>
                                                <button type="button" className="btn btn-danger">
                                                    Xóa
                                                </button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
               <Form onView={items}/>
            </div>

        </div>
    )
}

export default ListCategories