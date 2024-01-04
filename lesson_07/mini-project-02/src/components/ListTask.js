import React from 'react'
import Task from './Task'

function ListTask({ renderListTask, onEdit, onDelete }) {
    // console.log(renderListTask);
    const handleEdit = (toggle, actionName, task) => {
        onEdit(toggle, actionName, task)
    }
    const handleDelete = (actionName, task) => {
        onDelete(actionName, task)
    }
    // map to Task
    let elementTask = renderListTask.map((task, index) => {
        return (
            <Task key={task.taskId} renderTask={task} renderStt={index + 1} onEdit={handleEdit} onDelete={handleDelete} />
        )
    })
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementTask}
                    {/* <tr>
                        <td className="text-center">1</td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                            ea c
                        </td>
                        <td className="text-center">
                            <span className="label label-danger">High</span>
                        </td>
                        <td>
                            <button type="button" className="btn btn-warning">
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">2</td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                            ea c
                        </td>
                        <td className="text-center">
                            <span className="label label-default">Small</span>
                        </td>
                        <td>
                            <button type="button" className="btn btn-warning">
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">3</td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                            ea c
                        </td>
                        <td className="text-center">
                            <span className="label label-info">Medium</span>
                        </td>
                        <td>
                            <button type="button" className="btn btn-warning">
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ListTask