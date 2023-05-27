import React from 'react'
import Hotel_one from './Hotels/Hotel_one'
import Hotel_para from './Hotels/Hotel_para'
import Hotel_two from './Hotels/Hotel_two'
import Metadata from './Metadata'

const Hotel = () => {
  return (
    <>

    <Metadata title="Hotels" description="Hotels" />
    <div>
      <Hotel_one/>
      <Hotel_two/>
      <Hotel_para/>
    </div>
    </>
  )
}

export default Hotel
