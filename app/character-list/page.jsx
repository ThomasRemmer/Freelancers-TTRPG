import CharacterList from "../../components/characterList";
import CreateCharacterButton from "../../components/createCharacterButton";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function CharacterListPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="pt-20">
      <CreateCharacterButton session={session} />
      <CharacterList session={session} />
    </div>
  );
}
