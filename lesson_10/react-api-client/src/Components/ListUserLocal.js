import React, { useEffect, useState } from 'react'
import axios from '../api/api-local'
function ListUserLocal() {
    // tạo state lưu trữ dữ liệu cho componet
    const [listUser, setListUser] = useState([])
    // hàm lấy dữ liệu từ api
    const getAllUser = async () => {
        let response = await axios.get('users') //"http://localhost:3001/users"
        console.log("Obj api user: ", response);
        console.log("Data api user: ", response.data);
        // cập nhật state
        setListUser(response.data)
    }

    // cập nhật dữ liệu khi componet được mout

    useEffect(() => {
        getAllUser();
    }, [])
    return (
        <div>
            <h1>
                Danh sách Users
            </h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>UserName</th>
                        <th>PassWord</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.passWord}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>


            </table>
        </div>
    )
}

export default ListUserLocal