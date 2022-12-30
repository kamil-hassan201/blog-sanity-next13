import Image from "next/image";
import urlFor from "../lib/urlFor";
import BlogCard from "./BlogCard";
import ClientSideRoute from "./ClientSideRoute";

type BlogListProps = {
  posts: Post[];
};

function BlogList({ posts }: BlogListProps) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post: Post) => (
          <ClientSideRoute key={post._id} route={`post/${post.slug.current}`}>
            <BlogCard post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
