// Post.js
import React from "react";
import styles from '../Blog.module.css';
import { Link, useParams } from "react-router-dom"; // Import useParams to access route parameters
import { posts } from "../postContent";
import Footer from "../../../components/Footer/Footer.jsx";

function Post() {
  // Access route parameter (:postTitle)
  let { postTitle } = useParams();
  console.log(postTitle);
  
  // Find the post data based on the route parameter
  const post = posts.find(post => {
    const firstWord = post.title.split(' ')[0];
      return firstWord === postTitle;
  });

  if (!post) {
    return <div>Error: Post not found</div>;
  }

  // Render the post content
  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}
      >
        <Link to="/Blog" className={styles.backlink}>
          <p className={styles.backarrow}>{"<- "}</p>
          <p>Back to Blog</p>
        </Link>
        <br/>
        <br/>
        <h2>{post.title}</h2>
        <br/>
        {post.content.map((item, index) => {
          switch (item.type) {
            case "heading":
              return <div><h3 key={index}>{item.text}</h3><br/></div>;
            case "paragraph":
              return <div><p key={index}>{item.text}</p><br/></div>;
            case "bullet":
              return <div><p key={index}>&ensp;• {item.text}</p><br/></div>;
            case "italics":
              return <div><p key={index}><i>{item.text}</i></p><br/></div>;
            default:
              return null; // Handle other types if needed
          }
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Post;
