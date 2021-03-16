import { useRouter } from "next/router";

function PlogPostsPage() {
  const router = useRouter();

  console.log(router.pathname); // /blog/abab/bcbc
  console.log(router.query); // { slug: ["abab", "bcbc"]}
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default PlogPostsPage;
