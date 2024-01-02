import React, { useState, useEffect } from 'react'

function Form({ rederActionName, onCancel, task }) {
    const listTasks = [
        { taskName: " ", level: "" },
    ]

    const [listTask, setListTask] = useState(listTasks)
    const handleCancel = () => {
        onCancel(false)
    }
    // const [tasks, setTask] = useState(task)
    // console.log(tasks);
    // console.log(rederActionName);
    useEffect(() => {
        if (rederActionName === "Update") {
            setListTask({
                taskName: task.taskName,
                level: task.level
            });
        } else {
            setListTask({
                taskName: " ",
                level: "Small"
            });
        }
    }, [rederActionName, task]);

    const handleChange = (e) =>{
        let name = e.target.name;
        let val = e.target.value;
        setListTask({
            [name]:val,
        })
    }
    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Task Name"
                            name='name'
                            value={listTask.taskName}
                            onChange={handleChange}
                        // ref="task_name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="level"
                            id="inputDs"
                            className="form-control"
                            required="required"
                            value={listTask.level}
                            onChange={handleChange}
                        // ref="task_level"
                        >
                            Small
                            <option value={"Small"}>Small</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"High"}>High</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary me-2 ms-5">
                        {rederActionName}
                    </button>
                    <button type="button" className="btn btn-default" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form