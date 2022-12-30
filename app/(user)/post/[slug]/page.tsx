import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function PostPage({ params: { slug } }: PostPageProps) {
  const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories->
        }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article>
      <section>
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div>
            <Image
              fill
              className="object-cover object-center mx-auto"
              alt={post?.title}
              src={urlFor(post?.mainImage)?.url()}
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default PostPage;
