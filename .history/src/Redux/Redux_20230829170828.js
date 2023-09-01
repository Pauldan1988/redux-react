
// useSelector 

import React from 'react'

const Redux= () => {
    //* useSelector gets state from global level //UserReducer is the name of the reducer
    const data = useSelector((state) => state.UserReducer)
    //*`useDispatch` is a hook that returns a reference to the dispatch function from the Redux store()
    const dispatch = useDispatch()

  return (
    <div>Redux</div>
  )
}

export default Redux
