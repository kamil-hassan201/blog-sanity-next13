import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

function HomePage() {
  if (previewData()) {
    return <h1>In preview mode</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl">Welcome to Blog</h1>
    </div>
  );
}

export default HomePage;
