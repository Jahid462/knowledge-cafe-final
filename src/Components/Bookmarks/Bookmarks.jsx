import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({addToBookmarks, markAsReadTime}) => {
    
    return (
        <div>
            <h1 className="text-xl text-purple-700 bg-gray-200 py-3 border border-purple-700 rounded-lg font-medium text-center">Spent Time on Read: {markAsReadTime} min</h1>
            <div className="mt-5 bg-gray-200 rounded-lg p-4">
                <h1 className="text-xl font-medium m-4">Bookmarked Blogs: {addToBookmarks.length}</h1>
                <div>
                    {
                        addToBookmarks.map((blog, index) => <Bookmark key={index} blog={blog}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    addToBookmarks: PropTypes.array,
    markAsReadTime: PropTypes.number
}
export default Bookmarks;