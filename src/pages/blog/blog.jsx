import { Link } from "react-router-dom";

export const AllBlogs = () => {
  return (
    <section className="pt-[64px]">
      <h1>all blogies</h1>
      <ul>
        <li>
          <Link to="intro">first blog post</Link>
        </li>
      </ul>
    </section>
  );
};
