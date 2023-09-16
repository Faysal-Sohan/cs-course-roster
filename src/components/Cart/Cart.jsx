import PropTypes from 'prop-types';

const Cart = ({selectedCourses, totalCredit, totalPrice}) => {
    return (
        <div className="w-1/4">
            <div className="border rounded-xl bg-white p-6 space-y-4">
                <h2 className="text-[18px] font-bold text-blue-500 pb-4 border-b-2">Credit Hour Remaining {20-totalCredit} hr</h2>
                <h2 className="text-xl font-bold">Course Name</h2>
                <div className="text-gray-400 pb-6 border-b-2">
                    {
                        selectedCourses.map((course,i) => <p key={i}>{i+1} {course.course_title}</p>)
                    }
                </div>
                <h3 className="text-gray-700 font-medium pb-4 border-b-2">Total Credit Hour: {totalCredit}</h3>
                <h2 className="text-gray-700 font-semibold">Total Price : {totalPrice.toFixed(2)} USD</h2>
            </div>           
        </div>
    );
};

Cart.propTypes = {
    selectedCourses: PropTypes.object.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.any.isRequired
}

export default Cart;