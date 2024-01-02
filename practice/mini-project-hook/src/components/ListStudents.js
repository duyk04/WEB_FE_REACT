import React, { useState, useContext, createContext } from 'react'
import Student from './Student'
import { StudentsContext } from '../App';
import { Toggle } from '../App';

export const Students = createContext()
function ListStudents() {
    const students = useContext(StudentsContext)
    const student = students.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.studentId}</td>
                <td>{item.studentName}</td>
                <td>{item.age}</td>
                <td>{item.sex === true ? 'Nam' : 'Nữ'}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        )

    })
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <Students.Provider value={students}>
                            <Student />
                        </Students.Provider> */}
                        {student}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListStudents