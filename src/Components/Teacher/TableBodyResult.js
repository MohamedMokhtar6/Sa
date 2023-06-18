import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function TableBodyResult({ Name, Id }) {
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let [num3, setNum3] = useState(0)
    let [num4, setNum4] = useState(0)
    let [num5, setNum5] = useState(0)
    let [num6, setNum6] = useState(0)
    let [num7, setNum7] = useState(0)
    let total = 0;

    const onChange1 = (e) => {

        setNum1(e.target.value)
    }
    const onChange2 = (e) => {
        setNum2(e.target.value)


    }
    const onChange3 = (e) => {
        setNum3(e.target.value)

    }
    const onChange4 = (e) => {
        setNum4(e.target.value)

    }
    const onChange5 = (e) => {
        setNum5(e.target.value)

    }
    const onChange6 = (e) => {
        setNum6(e.target.value)

    }
    const onChange7 = (e) => {
        setNum7(e.target.value)
    }

    total = (((+num1 + +num2 + +num3 + +num4 + +num5 + +num6 + +num7) / 700) * 100).toFixed(2)






    return (
        <tbody>
            <tr className='text-center '>
                <td className='text-main'>{Id}</td>
                <td className='text-main'>{Name}</td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange1} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange2} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange3} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange4} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange5} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange6} /></td>
                <td><input type={'Number'} placeholder='Degree' className='bg-transparent text-main w-75' onChange={onChange7} /></td>
                <td className='text-success'>{total}</td>


            </tr>
        </tbody>
    )
}

export default TableBodyResult