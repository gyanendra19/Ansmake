
type Props = {}

function BodyPartTwo({ }: Props) {
  return (
    <section className='w-full h-fit relative'>

      {/* BACKGROUND IMAGE */}
      <div className='before:absolute before:bg-[#0B153C] before:z-[-1] before:h-full before:w-full before:opacity-80'></div>
      <div className='w-full h-[390px] absolute z-[-10]'>
        <img className='h-full w-full' src='/vaccine-bg.jpeg' alt="" />
      </div>

      <div className='py-16 w-full'>
        <div className='w-[90%] mx-auto'>


      {/* RESULTS INPUT */}
          <div className='w-full h-[265px] relative bg-[#C4C4C4] opacity-5 rounded-tr-[20px] rounded-tl-[20px]'></div>

          <div className='absolute md:top-[25%] top-[19%] text-white md:ml-10 ml-4 font-semibold md:text-xl text-[12px]'>
            <p>Check your COVID-19 result on our Database</p>
          </div>

          <div className='absolute md:top-[55%] top-[30%] text-white md:ml-10 ml-6 font-semibold md:text-xl flex flex-col md:flex-row ms:gap-8 gap-4 md:items-center'>
            <div className='md:w-[450px] w-[260px] md:p-4 p-3 md:h-[70px] h-[50px] border-2 border-[#17C2EC] rounded-2xl'>
              Okeowo
            </div>

            <div className='md:w-[450px] w-[260px] opacity-40 md:p-4 p-3 md:h-[70px] h-[50px] border-2 border-[#C4C4C4] rounded-2xl'>
              NIK Number
            </div>

            <button className='md:ml-16 md:h-[50px] h-[55px] md:text-xl bg-[#17C2EC] text-white font-semibold rounded-[12px] w-[100px]'>Check</button>
          </div>

          <div className='here-again relative'></div>
          </div>

      </div>
    </section>
  )
}

export default BodyPartTwo