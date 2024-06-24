import { Route, Routes } from 'react-router'

import Page1 from './Page1'
import Page2 from './Page2'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Projects from './Projects'
import React from 'react'
import Sample from './sample'

export default function RouterComponent() {
  return (
    <div  >
      <Routes>
        {/* <Route path='/' element={<MainComponent />} /> */}
        {/* <Route path='header' element={<HeaderComponent />} /> */}
        <Route path='/' element={<Sample />} />
        <Route path='page1' element={<Page1 />} />
        <Route path='page2' element={<Page2 />} />
        <Route path='projects' element={<Projects />}>
        <Route path='project1' element={<Project1 />}/>
        <Route path='project2' element={<Project2 />}/>
        <Route path='project3' element={<Project3 />}/>
        </Route>
      </Routes>
    </div>
  )
}

