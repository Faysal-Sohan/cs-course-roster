import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const notifyAlreadySelected = () => toast("Course is Already Selected!");
  const notifyLimit20Credit = () => toast("You can't add more than 20 credit!");

  const handleSelectedCourses = course => {
    const newTotalCredit = totalCredit + course.credit;
    const newTotalPrice = totalPrice + course.price;
    if(selectedCourses.find(selectedCourse => selectedCourse === course)) {
        notifyAlreadySelected();
    }
    else if(newTotalCredit > 20){
       notifyLimit20Credit();
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
      <ToastContainer/>
    </>
  )
}

export default App
