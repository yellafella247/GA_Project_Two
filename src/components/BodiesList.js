import React from 'react'

const BodiesList = ({ filteredBodies }) => {
  return (
    <div className='body-list'>
      {filteredBodies.length ?
        filteredBodies.map(body => {
          const { id, englishName, discoveredBy, discoveryDate, avgTemp, mass, gravity, meanRadius } = body
          return (
            <div className='body-list-item' key={id}>
              <div>
                <div className='record'>
                  <p className='label'>âïļ Name: </p>
                  <p className='data'>{englishName}</p>
                </div>
                <div className='record'>
                  <p className='label'>ðĩïļ Discovered by: </p>
                  <p className='data'>{discoveredBy}</p>
                </div>
                <div className='record'>
                  <p className='label'>ð Discovered: </p>
                  <p className='data'>{discoveryDate}</p>
                </div>
                <div className='record'>
                  <p className='label'>ðĄ Average Temperature: </p>
                  <p className='data'>{avgTemp} in Kelvin</p>
                </div>
                {
                  mass
                  &&
                  <div className='record'>
                    <p className='label'>ðïļ Mass: </p>
                    <p className='data'>{mass.massValue} in 10^24 kg</p>
                  </div>
                }
                <div className='record'>
                  <p className='label'>ðŠķ Surface gravity: </p>
                  <p className='data'>{gravity} in m.s^-2</p>
                </div>
                <div className='record'>
                  <p className='label'>ð Radius: </p>
                  <p className='data'>{meanRadius} in km</p>
                </div>
              </div>
            </div>
          )
        })
        :
        <div>Nothing to show here, please try again later</div>
      }
    </div >
  )
}

export default BodiesList