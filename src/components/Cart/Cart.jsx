import PropTypes from 'prop-types';

const Cart = ({selectedCourses}) => {
    return (
        <div className="w-1/4">
            <div className="border rounded-xl bg-white p-6 space-y-4">
                <h2 className="text-[18px] font-bold text-blue-500 pb-4 border-b-2">Credit Hour Remaining 7 hr</h2>
                <h2 className="text-xl font-bold">Course Name</h2>
                <div className="text-gray-400 pb-6 border-b-2">
                    {
                        selectedCourses.map((course,i) => <p>{i+1} {course.course_title}</p>)
                    }
                </div>
                <h3 className="text-gray-700 font-medium pb-4 border-b-2">Total Credit Hour: 12</h3>
                <h2 className="text-gray-700 font-semibold">Total Price : 48000 USD</h2>
            </div>           
        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.object.isRequired
}

export default Cart;