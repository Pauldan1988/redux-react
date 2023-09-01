
// useSelector 

import React from 'react'

const Redux= () => {
    //* useSelector gets state from global level //UserReducer is the name of the reducer
    const data = useSelector((state) => state.UserReducer)
    //*`useDispatch` is a hook that returns a reference to the dispatch function from the Redux store(used to dispatch actions)
    const dispatch = useDispatch()
    //* dispatch is used to dispatch actions
    dispatch(updateUser())

  return (
    <div>
        //data is the state from the global level
        {data?.name} {data?.email}
    </div>
  )
}

export default Redux
