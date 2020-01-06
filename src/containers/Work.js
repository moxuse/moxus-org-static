import React from 'react'
import { useRouteData } from 'react-static'

function Work() {
  const { works } = useRouteData()
  const worksList = works.map(w => {
    return (
      <li key={`w.path`+ Math.random()}>
        <p>{w.path}</p>      
      </li>)
  })
    return (
      <div>
        <h1>work</h1>
        <ul>
        {worksList}
        </ul>
      </div>
    )

}
export default Work;
