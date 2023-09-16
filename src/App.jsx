import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectedCourses = course => {
    const newTotalCredit = totalCredit + course.credit;
    const newTotalPrice = totalPrice + course.price;
    if(selectedCourses.find(selectedCourse => selectedCourse === course)) {
        // console.log("Course Is not there");
        alert("Course is Already Selected");
    }
    else if(newTotalCredit > 20){
        alert("You can't add more than 20 credit");
       
    }
    else {
      setSelectedCourses([...selectedCourses, course]);
      setTotalCredit(newTotalCredit);
      setTotalPrice(newTotalPrice);
    }
}

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-4'>
        <Courses key={selectedCourses.id} handleSelectedCourses={handleSelectedCourses}></Courses>
        <Cart key={selectedCourses.id} selectedCourses={selectedCourses} totalCredit={totalCredit}
        totalPrice={totalPrice}></Cart>
      </div>
    </>
  )
}

export default App
