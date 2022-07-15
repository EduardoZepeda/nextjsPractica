import React from 'react'

const Loading = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center my-32">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-64 w-64"></div>
    </div>
  )
}

export default Loading
