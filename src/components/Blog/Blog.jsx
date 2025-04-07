import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkasDone }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm m-4">
        <figure>
          <img src={blog.cover} />
        </figure>
        <div className="card-body">
          <div className="auth flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img src={blog.author_img} className="w-16" alt="" />
            <button onClick={()=>handleBookmark(blog)}>
            <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((hashtag) => (
              <p key={hashtag}>{hashtag}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=>handleMarkasDone(blog)} className="btn btn-primary">Mark as Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
