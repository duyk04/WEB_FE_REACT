import React, { Component } from 'react'

export default class EventForm4 extends Component {
    constructor(props) {
        super(props);

    }

    handleChangeCompany = (param) => {
        this.props.onChangeCompany(param)
    }
    render() {
        let {renderCompany} = this.props;
        return (
            <div>
                <h2>
                    EventForm4 - event với props (dữ liệu từ app): {renderCompany}
                </h2>
                <button onClick={()=>this.handleChangeCompany("Devmaster Academy")}>Change Company</button>
            </div>
        )
    }
}
