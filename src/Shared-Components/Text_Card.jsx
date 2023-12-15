import PropTypes from 'prop-types';

const Text_Card = ({ text }) => {
    let { t1, t2, t3, t4, t5 } = text;
    return (
        <div>
            <ul className='list-disc'>
                <li>{t1}</li>
                <li>{t2}</li>
                <li>{t3}</li>
                <li>{t4}</li>
                <li>{t5}</li>
            </ul>
        </div>
    )
}
Text_Card.propTypes = {
    text: PropTypes.string,
}
export default Text_Card;