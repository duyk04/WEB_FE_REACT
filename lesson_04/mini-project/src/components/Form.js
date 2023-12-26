import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: "",
            studentName: "",
            age: 0,
            sex: true,
            birthDate: "",
            birthPlace: "",
            address: ""
        }
    }
    // khi component đươc Mount một lần duy nhất -> cập nhật lại state
    componentWillMount = () => {
        let { renderActionName, renderStudent } = this.props;
        if (renderActionName === "Close" || renderActionName === "Update") {
            this.setState({
                studentId: renderStudent.studentId,
                studentName: renderStudent.studentName,
                age: renderStudent.age,
                sex: renderStudent.sex,
                birthDate: renderStudent.birthDate,
                birthPlace: renderStudent.birthPlace,
                address: renderStudent.address
            })
        } else {
            this.setState({
                studentId: "",
                studentName: "",
                age: 0,
                sex: true,
                birthDate: "",
                birthPlace: "",
                address: ""
            })
        }
    }

    // khi component đã được mout -> khi thay đổi dữ liệu sử dụng hàm
    componentWillReceiveProps = (nextProps) => {
        let { renderActionName, renderStudent } = nextProps;
        if (renderActionName === "Close" || renderActionName === "Update") {
            this.setState({
                studentId: renderStudent.studentId,
                studentName: renderStudent.studentName,
                age: renderStudent.age,
                sex: renderStudent.sex,
                birthDate: renderStudent.birthDate,
                birthPlace: renderStudent.birthPlace,
                address: renderStudent.address
            })
        } else {
            this.setState({
                studentId: "",
                studentName: "",
                age: 0,
                sex: true,
                birthDate: "",
                birthPlace: "",
                address: ""
            })
        }
    }
    // Hàm xử lý các thay đổi trên form
    handleChange = (e) =>{
        let name = e.target.name;
        let val = e.target.value;
        this.setState({
            [name]:val,
        })
    }
    // hàm xử lý sự kiện khi submit form(close, addNew, Update)

    handleSubmit = (e, actionName) =>{
        e.preventDefault();
        this.props.onSubmit(true, actionName, this.state)
    }
    render() {
        let { renderActionName, renderStudent } = this.props;
        return (
            <div className="card-body">
                <h3 className="card-title">Thông tin sinh viên</h3>
                <form className="form-sample" action="#">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name='studentId' value={this.state.studentId} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name='studentName' value={this.state.studentName} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Tuổi</label>
                        <div className="col-sm-9">
                            <input type="number" className="form-control" name='age' value={this.state.age} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Giới tính</label>
                        <div className="col-sm-9">
                            <select className="form-control" name='sex' value={this.state.sex} onChange={this.handleChange}>
                                <option value={true}>Nam</option>
                                <option value={false}>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Ngày sinh</label>
                        <div className="col-sm-9">
                            <input type='date' className="form-control" placeholder="dd/mm/yyyy" name='birthDate' value={this.state.birthDate} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Nơi sinh</label>
                        <div className="col-sm-9">
                            <select className="form-control" name='birthPlace' value={this.state.birthPlace} onChange={this.handleChange}>
                                <option value={"HN"}>Hà Nội</option>
                                <option value={"HCM"}>TP. Hồ Chí Minh</option>
                                <option value={"ĐN"}>Đà Nẵng</option>
                                <option value={"QN"}>Quảng Ninh</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Địa chỉ</label>
                        <div className="col-sm-9">
                            <input type='text' className="form-control" name='address' defaultValue={""} value={this.state.address} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary me-2" onClick={(e)=>this.handleSubmit(e,renderActionName)}>
                        {renderActionName}
                    </button>
                </form>
            </div>
        )
    }
}
