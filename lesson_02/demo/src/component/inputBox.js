import React from "react";
function inputText(props) {
    return (
        <div className="col-3">
            <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>
    )
}
export default inputText