import React from 'react'
import { useState } from 'react';
function StudentTableBodyResult({ Name, Id }) {



    return (
        <tbody>
            <tr className='text-center '>
                <td className='text-main'>{Name}</td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'86'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'73'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'75'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'92'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'80'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'75'} className='bg-transparent text-main w-75' /></td>
                <td><input type={'TEXT'} placeholder='Degree' disabled value={'60'} className='bg-transparent text-main w-75' /></td>
                <td className='text-success'>77.28%</td>
            </tr>
        </tbody>
    )
}

export default StudentTableBodyResult