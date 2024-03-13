import React from 'react'
import { RiMapPinLine, RiCalendarLine, RiShieldLine} from '@remixicon/react'


type Props = {}

function BodyPartOne({ }: Props) {
    const locationMarkup = (logo: any, head: String, text: String) => {
        return <div className='flex gap-2 ml-8'>
        <div>
            <div className='w-10 h-10 mt-2 rounded-md bg-[#C4C4C4] opacity-10 flex justify-center items-center'>
            </div>
        </div>
        <div className='relative'>
            <div className='absolute -left-10 top-4'>
                {logo}
            </div>
        </div>

        <div className='text-white'>
            <p className='opacity-40 text-sm'>{head}</p>
            <p className='font-semibold'>{text}</p>
        </div>
    </div>
    }
    return (
        <section className='w-full h-fit relative'>
            <div className='before:absolute before:bg-[#0B153C] before:z-[-1] before:h-full before:w-full before:opacity-80'></div>
            <div className='w-full md:h-[900px] h-[1000px] absolute z-[-10]'>
                <img className='h-full' src='public/vaccine-bg.jpeg' alt="" />
            </div>

            <div className='py-14 w-full'>
                <div className='w-[90%] mx-auto'>
                    <div className='md:flex justify-between'>
                        <div className='basis-3/5'>
                            <div className='w-[80%] md:mt-20 mt-10'>
                                <p className='md:text-5xl text-xl font-extrabold text-white'>COVID-19 Vaccination Got Easier With,</p>
                                <span className='text-[#17C2EC] font-extrabold md:text-5xl text-xl'>Vaccination.ng</span>

                                <p className='md:mt-12 mt-6 opacity-70 text-white md:leading-7 md:text-2xl text-sm font-medium'>Vaccination.ng will help you find the nearest
                                    centre for vaccination, in all 36 states in Nigeria.</p>

                                <div className="flex md:mt-12 mt-8 gap-5">
                                    <button className='whitespace-nowrap px-4 md:py-2 py-3 md:text-xl text-sm bg-[#17C2EC] text-white font-semibold rounded-[16px]'>Get Vaccine</button>
                                    <button className='px-5 whitespace-nowrap md:text-xl py-3 bg-[#2e2c4d] border-2 border-[#17C2EC] text-white font-semibold text-sm rounded-[16px] drop-shadow-md'>Help Centre</button>
                                </div>
                            </div>
                        </div>


                        <div className='mt-10 md:mt-0 ml-4 md:ml-0'>
                            <img className='h-[250px] md:h-full' src="public/vaccine.png" alt="" />
                        </div>
                    </div>


                    <div className='mt-16 w-full md:h-[160px] h-[230px] bg-[#C4C4C4] md:opacity-5 opacity-10 relative here rounded-tl-2xl rounded-tr-2xl'>
                    </div>
                    <div className='flex relative'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-evenly md:w-full h-full absolute md:-top-28 -top-[118px]'>
                            {locationMarkup(<RiMapPinLine color='#17C2EC' />, 'Location', 'Ikeja Lagos, Nigeria')}
                            {locationMarkup(<RiCalendarLine color='#17C2EC' />, 'Date', '29 December, 2022')}
                            {locationMarkup(<RiShieldLine color='#17C2EC' />, 'Vaccine Type', 'Mordena')}
                         <button className='md:ml-40 md:h-[50px] p-3 md:text-xl bg-[#17C2EC] text-white font-semibold rounded-[12px] w-28 ml-8 h-[60px]'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BodyPartOne