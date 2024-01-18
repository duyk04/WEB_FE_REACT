import React, { useEffect, useState } from 'react'
import axios from '../api/mock-api'

function ListNew() {
    // tạo state lưu trữ dữ liệu cho componet
    const [listUser, setListUser] = useState([])
    // hàm lấy dữ liệu từ api
    const getAllUser = async () => {
        let response = await axios.get('News')
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
    return (
        <div className='container-fluid' >
            <div>
                <h1 className='text-start my-5'>Tin tức</h1>
            </div>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td className='col-md-6'>{<div dangerouslySetInnerHTML={{ __html: item.content }} />}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default ListNew