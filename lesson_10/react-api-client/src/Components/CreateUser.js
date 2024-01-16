import React, { useState } from 'react'
import axios from '../api/api-mock'

function CreateUser() {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const handleSubmit = async (e) => {
        //lấy dữ liệu trên form
        e.preventDefault();
        console.log(userName, passWord);

        //tạo đối tượng users
        let user = {
            userName: userName,
            password: passWord
        }

        //post => api

        await axios.post('users', user)
    }

    return (
        <div>
            <h2>Thêm mới user</h2>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            UserName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            name='userName'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name='passWord'
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default CreateUser