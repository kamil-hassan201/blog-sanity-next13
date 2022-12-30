import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface BlogCardT {
  post: Post;
}

function BlogCard({ post }: BlogCardT) {
  return (
    <div className="flex flex-col group cursor-pointer" key={post._id}>
      <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          className="object-cover object-left lg:object-center"
          fill
        />

        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black rounded drop-shadow-lg text-white p-5 flex justify-between">
          <div>
            <p className="font-bold">{post.title}</p>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex flex-column md:flex-row gap-y-2 md: gap-x-2 items-center">
            {post.categories.map((category) => (
              <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                <p> {category?.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex-1">
        <p className="underline text-lg font-bold">{post.title}</p>
        <p className="line-clamp-2 text-gray-500">{post.description}</p>
      </div>
      <p className="mt-5 font-bold flex items-center group-hover:underline">
        Read Post
        <ArrowUpRightIcon className="h-4 w-4 ml-2" />
      </p>
    </div>
  );
}

export default BlogCard;
