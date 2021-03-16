import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.pathname); // /portfolio/[id]/[clientprojectId]
  console.log(router.query); // { id: "clientData", clientprojectId: "projectId"}
  return (
    <div>
      <h1>The Project Page for a Specific Page for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
