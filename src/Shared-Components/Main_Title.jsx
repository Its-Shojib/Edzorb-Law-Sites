import PropTypes from 'prop-types';

const Main_Title = ({ text }) => {
    return (
        <div className="bg-[#a3c9c6] flex justify-center items-center">
            <div className="flex justify-center items-center">
                <img className="w-28" src="/public/Left.png" alt="" />
                <h1 className="text-4xl font-bold">{text}</h1>
                <img className="w-28" src="/public/Right.png" alt="" />
            </div>
        </div>
    )
}
Main_Title.propTypes = {
    text: PropTypes.string,
}
export default Main_Title;