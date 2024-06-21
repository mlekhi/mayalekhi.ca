import styles from "./Blog.module.css";
import { Link } from "react-router-dom";
import { posts } from "./postContent";
import Footer from "../../components/Footer/Footer.jsx";

function Blog() {
  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}
      >
        <div className="header-container">
          <div>
            <h1>Blog.</h1>
            {posts.map(post => (
              <p key={post.title}>
                <br/>
                <Link to={`/blog/${post.title.split(" ")[0]}`}>{post.title}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
