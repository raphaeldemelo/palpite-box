import React from 'react';

export default function Footer() {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvimento por: Raphael de Melo /
                <a className='hover:underline' href='https://linkedin.com/in/raphaeldemelo'> LinkedIn</a> /
                <a className='hover:underline' href='https://github.com/raphaeldemelo'> Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src="logo_semana_fsm.png" />
                    <img className='inline p-4' src="logo_devpleno.png" />
                </div>
            </div>

        </div>
    )
}