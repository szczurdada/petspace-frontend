import { getUser } from "@/app/api/user";
import { Header } from "@/app/components/Header/Header";
import { FriendsLayout } from "@/app/features/Friends/FriendsLayout/FriendsLayout";

interface FriendsPageProps {
  params: Promise<{ username: string }>;
}

const FriendsPage = async ({ params }: FriendsPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <main>
        <FriendsLayout username={userData.username} />
      </main>
    </>
  );
};

export default FriendsPage;
