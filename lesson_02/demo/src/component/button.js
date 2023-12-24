import React from "react";
function button(props) {
    return (
        <div className="col-auto">
            <button type="submit" className={`btn mx-2 ${props.color}`}>
                {props.name}
            </button>
        </div>
    )
}
export default button