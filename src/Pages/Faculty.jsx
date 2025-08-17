import React from 'react'
import ListFaculties from '../Component/Faculty/ListFaculties'
import FacutlyJSON from '../Component/Faculty/FacultyJSON'

const Faculty = () => {
  return (
    <div>
      <ListFaculties data = {FacutlyJSON}/>
    </div>
  )
}

export default Faculty
