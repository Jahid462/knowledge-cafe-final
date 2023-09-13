import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title,cover, author, author_img, posted_date, reading_time, hash_tag} = blog

    return (
        <div className='space-y-4 mb-20 border-2 p-10 rounded-2xl'>
            <img className='rounded-2xl' src={cover} alt="Blog Cover Image" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='w-20' src={author_img} alt="Author Image" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-xl'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-xl'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p>
                {
                    hash_tag.map((hash, index) => <span key={index} className='mr-4 text-lg'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-700 text-lg underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;