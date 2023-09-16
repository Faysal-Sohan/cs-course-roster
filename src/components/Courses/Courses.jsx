import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelectedCourses}) => {

    const [courses, setCourses] = useState([]);
    

    useEffect(() => {
        fetch('courses.json')
        .then(resp => resp.json())
        .then(data => setCourses(data))
    },[])


    return (
        <div className="w-3/4">
            <div className="grid grid-cols-3 gap-4">
                {
                    courses.map(course => <Course key={course.id} course={course} handleSelectedCourses={handleSelectedCourses}></Course>)
                }
            </div>           
        </div>
    );
};

Courses.propTypes = {
    handleSelectedCourses: PropTypes.func.isRequired
}

export default Courses;