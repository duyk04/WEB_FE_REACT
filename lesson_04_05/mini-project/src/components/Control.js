import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword: ""
        }
    }
    handleAddNew = () => {
        this.props.onAdd(true, "Add New");
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.keyword)
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button" className="btn btn-primary btn-icon-text"
                            onClick={this.handleAddNew}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6 ">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name="keyword"
                                value={this.state.keyword}
                                onChange={(e) => this.setState({ keyword: e.target.value })}
                            />
                            <button className="btn btn-primary btn-icon-text"
                                onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
