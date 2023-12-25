import React, { Component } from 'react'
import Studen from './Studen'

export default class ListStudent extends Component {
    render() {
        let {renderStudents} = this.props;

        let elementStudent = renderStudents.map((item, index) => {
            return <Studen key={item.studentId} renderStudent={item} stt={index+1}/>
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
                            {elementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}