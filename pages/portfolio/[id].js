import { useRouter } from "next/router";
function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname); // /portfolio/[id]
  console.log(router.query); // { id: "data"}
  return (
    <div>
      <h1>The Portfolio Page{router.query.id}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
