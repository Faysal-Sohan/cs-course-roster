import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(resp => resp.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4">
            <div className="grid grid-cols-3 gap-2">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>           
        </div>
    );
};

export default Courses;