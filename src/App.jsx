import { useState } from 'react'
import profile from '../../recap/src/assets/images/profile.png'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [addToBookmarks, setAddToBookmarks] = useState([])
  const [markAsReadTime, setMarkAsRead] =useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...addToBookmarks, blog]
    setAddToBookmarks(newBookmark)
  }

  const handleMarkAsRead = (id, reading_time) => {
    const newMarkRead = markAsReadTime + reading_time
    setMarkAsRead(newMarkRead)

    const remainngBookmarks = addToBookmarks.filter(bookmark => bookmark.id !== id)
    setAddToBookmarks(remainngBookmarks)
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <header className='flex justify-between items-center py-10 border-b-2'>
        <div>
          <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </header>
      <main className='mt-10 flex justify-between gap-10'>
        <div className='w-2/3'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className='w-1/3'>
          <Bookmarks addToBookmarks={addToBookmarks} markAsReadTime={markAsReadTime}></Bookmarks>
        </div>
      </main>
    </div>
  )
}

export default App
