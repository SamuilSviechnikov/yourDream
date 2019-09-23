import React from 'react'

const style = {
  borderRadius: '10px'
}
const Things = ({project}) => {
  return (
    <div className="row">
    <div className="col s12 m10">
      <div className="card" style={style}>
        <div className="card-image">
          <img alt={project} src={project.url} style={style}/>
          <span className="card-title purple-text text-accent-3" style={{backgroundColor: '#fff', borderRadius: '50px'}}>{project.title}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Things