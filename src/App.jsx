import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [bookmark,setBookmark] = useState([]);
  const [time,setTime] = useState(0);

  const handleBookmark = (blog) => {
    if(!(bookmark.find((b)=> b.id === blog.id))) {
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    }
  }

  const handleMarkasDone = (blog) => {
    bookmark.find((b)=> b.id ===blog.id) ? setTime(time+blog.reading_time) : "";
    handleRemoveBookmark(blog.id);
  }

  const handleRemoveBookmark = (id) => {
    const remainig = bookmark.filter((blog)=> blog.id !==id);
    setBookmark(remainig);
  }
  return (
    <div className="mx-8">
      <Navbar></Navbar>

      <div className="main-container flex">
        <div className="left-container w-[60%]">
          <Blogs handleBookmark={handleBookmark} handleMarkasDone={handleMarkasDone}></Blogs>
        </div>
        <div className="right-container">
          <h1>Reading Time: {time}</h1>
          <h1>Bookmark Count: {bookmark.length}</h1>
          {
            bookmark.map((blog)=> <p className="p-4 m-2 bg-red-600 text-white shadow rounded">{blog.title}</p>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
