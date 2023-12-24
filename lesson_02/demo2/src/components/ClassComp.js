import {React, Component} from 'react'

class ClassComp extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {name, company} = this.props;
        return(
            <>
            <h1>Class Component Demo - Hiển thị dữ liệu từ props</h1>
            <h2>Wellcome to, {this.props.name}</h2>
            <h2>Company, {this.props.company}</h2>
            <div className='alert'>
                <h3>Name: {name}</h3>
                <h3>Name: {company}</h3>
            </div>
            </>
        )
    }
}

export default ClassComp