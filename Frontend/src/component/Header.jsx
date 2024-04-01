import React from 'react'

const Header = () => {
    return (
        <header className='fixed top-0 w-[100%] z-9999 drop-shadow-md bg-white'>
            <div className='flex w-[100%] px-[15%] header'> 
                <div className='my-2.5'>
                    <img src="/HL-logo.png" alt="" className='w-14 h-14' />
                </div>
                <div className='flex flex-row my-2.5'>
                    <div className='flex flex-col mr-3 justify-center'>
                        <p className='text-xs italic text-stone-500'>Handicrafted by</p>
                        <p className='text-xs text-right text-stone-900 font-normal'>Jim HLS</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="/avatar.jpg" alt="" className='w-12 h-12 rounded-full' /> 
                    </div>              
                </div>
            </div>           
        </header>
    )
}

export default Header