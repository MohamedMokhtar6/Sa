import React, { useState } from 'react'
import avatar from '../../Images/avatar.png'
import { Button, Row } from 'react-bootstrap'

function LibrarianAddBook() {
    const [img, setImg] = useState(avatar);


    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <>
            <Row className="mx-3 flex-column  align-items-center text-center " >
                <div className=" fw-bold fs-4 ">Add New Book</div>
                <span>Book Image</span>
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
                    placeholder="Book Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="Author Name"
                    type={"text"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="Book Rate"
                    type={"number"}
                    className="fit reduce my-2"
                />
                <input
                    placeholder="Category "
                    type={"text"}
                    className="fit reduce my-2"
                />
                <textarea placeholder='Book Description' rows={'5'} className="w-50 mb-2" style={{ resize: 'none' }} />


                <Button variant="dark" className="fit m-3" >
                    Save
                </Button>

            </Row>

        </>
    )
}

export default LibrarianAddBook