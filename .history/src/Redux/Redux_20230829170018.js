
// useSelector 

import React from 'react'

const Redux= () => {
    //* useSelector gets state from global level //User
    const data = useSelector((state) => state.UserReducer)

  return (
    <div>Redux</div>
  )
}

export default Redux