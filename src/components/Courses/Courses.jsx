import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(resp => resp.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4">
            <h3>Courses: {courses.length}</h3>            
        </div>
    );
};

export default Courses;