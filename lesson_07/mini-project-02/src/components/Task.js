import React from 'react'

function Task({ renderTask, renderStt, onEdit, onDelete }) {

    //level with style
    let elementLevel = ""
    if (renderTask.level === "Small") {
        elementLevel = (<span className="label label-default">Small</span>);
    } else if (renderTask.level === "Medium") {
        elementLevel = (<span className="label label-info">Medium</span>);
    }
    else {
        elementLevel = <span className="label label-danger">High</span>
    }

    const handleEdit = () => {
        onEdit(true, "Update", renderTask)
        console.log(renderTask);

    }
    const handleDelete = () => {
        if (window.confirm("Bạn có muốn xóa không ?") === true) {
            onDelete("Delete", renderTask)
        }

    }
    return (
        <>
            <tr>
                <td className="text-center">{renderStt}</td>
                <td>
                    {renderTask.taskName}
                </td>
                <td className="text-center">
                    {elementLevel}
                </td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={handleEdit}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        </>

    )
}

export default Task