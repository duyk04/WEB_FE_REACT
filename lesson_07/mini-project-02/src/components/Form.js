import React, { useState, useEffect } from 'react'

function Form({ rederActionName, onCancel, task, onEdit, onSubmit }) {
    // const listTasks = [
    //     { taskId: 0, taskName: " ", level: " " },
    // ]
    const [taskName, setTaskName] = useState(" ")
    const [level, setLevel] = useState(" ")

    // const [listTask, setListTask] = useState(listTasks)
    const handleCancel = () => {
        onCancel(false)
    }
    // const [tasks, setTask] = useState(task)
    // console.log(tasks);
    // console.log(rederActionName);
    useEffect(() => {
        if (rederActionName === "Update") {
            // setListTask({
            //     taskId: task.taskId,
            //     taskName: task.taskName,
            //     level: task.level
            // });
            setTaskName(task.taskName)
            setLevel(task.level)
        } else if (rederActionName === "Save") {
            // setListTask({
            //     taskId: " ",
            //     taskName: " ",
            //     level: " "
            // });
        }
    }, [rederActionName, task]);

    // const handleChange = (e) => {
    //     // const { name, value } = e.target;
    //     //     setListTask((prevTask) => ({
    //     //         ...prevTask,
    //     //         [name]: value
    //     //     }));
    // };
    const handelSubmit = (e) => {
        e.preventDefault();
        // onUpdate(listTask)
        // console.log(listTask);
        var tasks
        if (rederActionName === "Save") {
            tasks = {
                taskId: 0,
                taskName: taskName,
                level: level
            }
        }
        if (rederActionName === "Update") {
            tasks = {
                taskId: task.taskId,
                taskName: taskName,
                level: level
            }
        }


        // console.log(taskName,level);
        onSubmit(false, rederActionName, tasks)
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
                            name="taskName"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
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
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        // ref="task_level"
                        >
                            Small
                            <option value={"Small"}>Small</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"High"}>High</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary me-2 ms-5" onClick={handelSubmit}>
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