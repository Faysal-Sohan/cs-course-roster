import PropTypes from 'prop-types';

const Course = ({ course, handleSelectedCourses}) => {

    const { cover, course_title, description, price, credit } = course;

    return (
        <div className="border rounded-xl bg-white p-4 space-y-4">
            <img src={cover} alt="" />
            <h3 className="text-[18px] font-semibold">{course_title}</h3>
            <p className="text-sm text-gray-500 ">{description}</p>
            <div className="flex justify-between font-medium text-gray-500">
                <p><i className="fas fa-dollar-sign"></i>  Price : {price}</p>
                <p><i className="fas fa-book-open"></i>  Credit : {credit}hr</p>
            </div>
            <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-[18px] font-semibold"
            onClick={() => handleSelectedCourses(course)}>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectedCourses: PropTypes.func.isRequired
}

export default Course;