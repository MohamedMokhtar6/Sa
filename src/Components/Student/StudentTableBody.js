import React from 'react'

function StudentTableBody({ Name }) {
    return (
        <tbody>
            <tr className='text-center '>
                <td className='text-main'>{Name}</td>
                <td><input type={'checkbox'} checked /></td>
                <td><input type={'checkbox'} checked /></td>
                <td><input type={'checkbox'} checked /></td>
                <td><input type={'checkbox'} checked /></td>
                <td><input type={'checkbox'} disabled /></td>
                <td className='text-danger'>1</td>

            </tr>
        </tbody>
    )
}

export default StudentTableBody