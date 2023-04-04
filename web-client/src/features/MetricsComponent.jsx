import React from 'react'

import LineChart from '../components/LineChart'

const MetricsComponent = ({metrics}) => {
  return (
    <div className='w-full'>
      <h3 className='text-center mb-4'>Metric title</h3>
      <div className='w-full h-40 lg:h-56'>
        <LineChart data={metrics} nameKey="date" valueKey="value" />
      </div>
    </div>
  )
}

export default MetricsComponent
