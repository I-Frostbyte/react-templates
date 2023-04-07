import React from 'react'
import HeroImage1 from '../../../assets/HeroImage1.jpg'
import { Link } from 'react-router-dom'
import Form from '../../../components/Form'

const SecondEditionUIHome = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 pt-32 pb-10 items-center md:grid-cols-2 md:gap-3 w-full my-10 mx-5">
        <img src={HeroImage1} alt="#" className="opacity-60 rounded-xl z-0 md:z-auto" />
        <div className="block mx-auto text-center md:text-left sm:w-3/4 w-full">
          <h1 className="py-3 text-5xl font-bold text-original">
            The Most Simplistic Banking For Your Future & Development
          </h1>
          <p className="font-semibold text-myText py-3">
            PeFi prioritizes in simplicity and flexibility that makes each of
            your transactions simpler.
          </p>
          <div className="flex justify-between items-center my-5 mx-20">
            <button className='bg-original text-white hover:bg-complement hover:text-original py-2 px-6 rounded-xl' onClick={() => {
            <Link to="#form"/>}}>
              Fill Form
            </button>
            <button className='bg-original text-white hover:bg-complement hover:text-original py-2 px-6 rounded-xl'>
              View Store
            </button>
          </div>
        </div>
      </div>
      <Form id="#form"/>
    </div>
  )
}

export default SecondEditionUIHome