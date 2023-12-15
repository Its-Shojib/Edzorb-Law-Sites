import PropTypes from 'prop-types';

const Main_Title = ({ text }) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-300 bg-opacity-80 flex justify-center items-center w-full mx-auto z-auto">
            <div className="flex justify-center items-center">
                <img className="w-28" src="/Left.png" alt="" />
                <h1 className="text-4xl font-bold">{text}</h1>
                <img className="w-28" src="/Right.png" alt="" />
            </div>
        </div>
    )
}
Main_Title.propTypes = {
    text: PropTypes.string,
}
export default Main_Title;