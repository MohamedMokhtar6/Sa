import React, { useState } from 'react'
import avatar from '../../Images/avatar.png'
import { Button, Row } from 'react-bootstrap'

function AdminCreateUser() {
    const [img, setImg] = useState(avatar);
    let [id, setId] = useState('0')
    const handleChange = (e) => {
        setId(e.target.value)
    }

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <>
            <Row className="m-3 flex-column align-items-center text-center " style={{ minHeight: '74vh' }}>
                <div className=" fw-bold fs-4 my-3">Add New User</div>
                <span>User Image</span>
                <label htmlFor="upload">
                    <img
                        src={img}
                        alt="upload"
                        className=" click"
                        style={{ width: "150px" }}

                    />
                </label>
                <input
                    type={"file"}
                    id="upload"
                    className="opacity-0 fit "
                    onChange={onImageChange}

                />
                <input
                    placeholder="User Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="User Email"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="User Password"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <select className='my-2 reduce fit ' onChange={handleChange}>
                    <option value={'0'}>Select Role</option>
                    <option value={'1'} >Teacher</option>
                    <option value={'2'}>Student</option>
                    <option value={'3'}>Librarian</option>
                </select>
                {
                    id === "1" ? (<select className='my-2 reduce fit '>
                        <option value={'0'}>Select Subject</option>
                        <option value={'1'} >Math</option>
                        <option value={'2'}>English</option>
                        <option value={'3'}>Arabic</option>
                    </select>) : (null)
                }
                <Button variant="dark" className="fit m-3" >
                    Save
                </Button>

            </Row>

        </>


    )
}

export default AdminCreateUser