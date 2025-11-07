"use client"
import Link from 'next/link'
import React, { useState } from 'react'


export const Register = () => {

    const [dataForm, setDataForm] = useState({})
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
    })
    }




    return (
        <section className='flex justify-center items-center h-[100vh]'>
            <form className='bg-gray-100 p-10 rounded-xl flex flex-col gap-5'>
                <div>
                    <h1 className='text-black text-2xl font-bold justify-center flex'>¡Registrate como estudiante!</h1>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5'>
                        <input onChange={inputChange} name='FullName' type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Nombre completo' />
                        <input onChange={inputChange} name='Username'type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Nombre de usuario' />
                        <input onChange={inputChange} name='Email' type="emal" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Correo' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-5'>
                            <input onChange={inputChange} name='Password' type="password" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Contraseña' />
                            <input onChange={inputChange} name='Grade' type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Grado' />
                        </div>
                        <div className='flex '>
                            <button className='p-2 bg-blue-400 rounded-md'>Registrar</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center  '>
                    <p className='text-black'>Registrate como <Link href={"register/teacher"} className='font-bold text-blue-400'>profesor</Link> </p>
                </div>
            </form>
        </section>
    )
}


export default Register
