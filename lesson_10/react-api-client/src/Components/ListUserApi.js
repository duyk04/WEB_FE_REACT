import React, { useEffect, useState } from 'react'
import axios from '../api/api-mock'

function ListUserApi() {
    // tạo state lưu trữ dữ liệu cho componet
    const [listUser, setListUser] = useState([])
    // hàm lấy dữ liệu từ api
    const getAllUser = async () => {
        let response = await axios.get('users')
        console.log("Obj api user: ", response);
        console.log("Data api user: ", response.data);
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
        <div>
            <div>
                <h1>Danh sách user-mock-api</h1>
            </div>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>UserName</th>
                            <th>PassWord</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.password}</td>
                                        <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
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

export default ListUserApi