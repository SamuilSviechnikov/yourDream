import React from 'react'
import Things from './Things'
import { Link } from 'react-router-dom'

const ThingsList = ({projects}) => {
  return (
    <div className="project-list pl section">
      { projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id}>
            <Things project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ThingsList