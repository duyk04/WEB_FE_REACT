import React from "react";
import Button from './button'
function table() {
    const infoSv = [
        {
            id: 1,
            codeSv: 'SV001',
            name: 'Nguyen Van A',
            age: 20,
            gender: 'Nam'
        },
        {
            id: 2,
            codeSv: 'SV002',
            name: 'Nguyen Van B',
            age: 20,
            gender: 'Nữ'
        },
        {
            id: 3,
            codeSv: 'SV003',
            name: 'Nguyen Van C',
            age: 20,
            gender: 'Nam'
        }
    ]

    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                </tr>
                <tr>
                    <td>{infoSv[0].id}</td>
                    <td>{infoSv[0].codeSv}</td>
                    <td>{infoSv[0].name}</td>
                    <td>{infoSv[0].age}</td>
                    <td>{infoSv[0].gender}</td>
                    <td>
                        <div className="d-flex">
                            <Button name='Xem' color='btn-danger' />
                            <Button name='Sửa' color='btn-warning' />
                            <Button name='Xóa' color='btn-success' />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{infoSv[1].id}</td>
                    <td>{infoSv[1].codeSv}</td>
                    <td>{infoSv[1].name}</td>
                    <td>{infoSv[1].age}</td>
                    <td>{infoSv[1].gender}</td>
                    <td>
                        <div className="d-flex">
                            <Button name='Xem' color='btn-danger' />
                            <Button name='Sửa' color='btn-warning' />
                            <Button name='Xóa' color='btn-success' />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{infoSv[2].id}</td>
                    <td>{infoSv[2].codeSv}</td>
                    <td>{infoSv[2].name}</td>
                    <td>{infoSv[2].age}</td>
                    <td>{infoSv[2].gender}</td>
                    <td>
                        <div className="d-flex">
                            <Button name='Xem' color='btn-danger' />
                            <Button name='Sửa' color='btn-warning' />
                            <Button name='Xóa' color='btn-success' />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    )
}
export default table