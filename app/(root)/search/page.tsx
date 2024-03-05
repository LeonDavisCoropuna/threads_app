import ThreadCard from "@/components/cards/ThreadCard";
import UserCard from "@/components/cards/UserCard";
import { Comment } from "@/components/forms/Comment";
import { fetchThread } from "@/lib/actions/thread.actions";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const results = await fetchUsers({
    userId: user.id,
    pageNumber: 1,
    searchString: "",
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
      <div className="mt-14 flex flex-col gap-9">
        {results?.users.length === 0 ? (
          <p className="no-result">No users</p>
        ) : (
          <>
            {results?.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                imgUrl={person.image}
                username={person.username}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
