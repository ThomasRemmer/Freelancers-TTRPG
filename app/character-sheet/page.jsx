import FreelancerCard from "../../components/freelancerCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function CharacterSheet() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <>
      <main className="flex flex-col min-h-screen justify-between p-24">
        <FreelancerCard />
      </main>
    </>
  );
}
