import React from 'react'
import { Spinner } from 'react-bootstrap'

const PlanetInfo = ({ planet }) => {
  return (
    <div className='planet-info' key={planet.id}>
      {
        planet
          ?
          <>
            <div className='record'>
              <p className='label'>ðĄ Average Temperature</p>
              <p className='data'>{planet.avgTemp} in Kelvin</p>
            </div>
            <div className='record'>
              <p className='label'>ðïļ Mass</p>
              <p className='data'>{planet.mass.massValue} in 10^24 kg</p>
            </div>
            <div className='record'>
              <p className='label'>ðŠķ Surface gravity</p>
              <p className='data'>{planet.gravity} in m.s^-2</p>
            </div>
            <div className='record'>
              <p className='label'>ð Radius</p>
              <p className='data'>{planet.meanRadius} in km</p>
            </div>
            <div className='record'>
              <p className='label'>ð° Density</p>
              <p className='data'>{planet.density} in g.cm^3</p>
            </div>
            <div className='record'>
              <p className='label'>ð Escape speed</p>
              <p className='data'>{planet.escape} in m.s^-1</p>
            </div>
          </>
          :
          <Spinner />
      }
    </div>
  )
}

export default PlanetInfo