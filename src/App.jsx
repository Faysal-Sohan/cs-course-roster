import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectedCourses = course => {
    if(!selectedCourses.find(selectedCourse => selectedCourse === course)) {
        // console.log("Course Is not there");
        setSelectedCourses([...selectedCourses, course]);
    }
    else {
        console.log("Course is already there");
        alert("Course is Already Selected");
    }
}

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6'>
        <Courses key={selectedCourses.id} handleSelectedCourses={handleSelectedCourses}></Courses>
        <Cart key={selectedCourses.id} selectedCourses={selectedCourses}></Cart>
      </div>
    </>
  )
}

export default App
