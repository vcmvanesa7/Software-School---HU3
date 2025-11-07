import Link from 'next/link'
import React from 'react'

export const TeacherRegister = () => {
    return (
        <section className='flex justify-center items-center h-[100vh]'>
            <form className='bg-gray-100 p-10 rounded-xl flex flex-col gap-5'>
                <div>
                    <h1 className='text-black text-2xl font-bold justify-center flex'>¡Registrate como profesor!</h1>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-5'>
                        <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Nombre completo' />
                        <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Nombre de usuario' />
                        <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Correo' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-5'>
                            <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Contraseña' />
                            <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Especialidad' />
                            <input type="text" className='p-2 bg-gray-200 focus:outline-none rounded-md text-black' placeholder='Codigo profesor' />
                        </div>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='p-2 bg-blue-400 rounded-md'>Registrar</button>
                </div>
                <div className='flex justify-center  '>
                    <p className='text-black'>Registrate como <Link href={"/register"} className='font-bold text-blue-400'>estudiante</Link> </p>
                </div>
            </form>
        </section>
    )
}


export default TeacherRegister
