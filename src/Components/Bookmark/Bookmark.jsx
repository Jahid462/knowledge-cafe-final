import PropTypes from 'prop-types';

const Bookmark = ({blog}) => {
    const {title} = blog
    return (
        <div>
            <h2 className='bg-white rounded-lg p-4 m-4'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    blog: PropTypes.object
}
export default Bookmark;