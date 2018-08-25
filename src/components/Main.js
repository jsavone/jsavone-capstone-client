import React from 'react'
import NavBar from './NavBar'
import Forms from './user/Forms'

const Main = (props) => {
  return (
    <div>
      <NavBar />
      <Forms path={props.match.path}/>
    </div>
  )
}

export default Main
