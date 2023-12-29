import React, { useState } from 'react'
import Student from './Student'

function ListStudents(props) {
    const [listStudents, setListStudents] =  useState(props)
    console.log(listStudents[1].studentId);

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

                        <Student/>
                        <Student/>
                        <Student/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListStudents