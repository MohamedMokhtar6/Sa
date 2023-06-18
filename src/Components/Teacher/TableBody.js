import React from 'react'
import { useState } from 'react';

function TableBody({ Name, Id }) {
    let [num, setNum] = useState(5)
    function onChange(e) {
        if (e.target.checked) {
            setNum(--num)
        } else {
            setNum(++num)
        }
    }


    return (
        <tbody>
            <tr className='text-center '>
                <td className='text-main'>{Id}</td>
                <td className='text-main'>{Name}</td>
                <td><input type={'checkbox'} onClick={onChange} /></td>
                <td><input type={'checkbox'} onClick={onChange} /></td>
                <td><input type={'checkbox'} onClick={onChange} /></td>
                <td><input type={'checkbox'} onClick={onChange} /></td>
                <td><input type={'checkbox'} onClick={onChange} /></td>
                <td className='text-danger'>{num}</td>

            </tr>
        </tbody>
    )
}

export default TableBody