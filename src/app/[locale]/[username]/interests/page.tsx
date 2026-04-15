import { Header } from "@/app/components/Header/Header";
import { getUser } from "@/app/api/user";
import { ProfileInterestsLayout } from "@/app/features/Profile/info/ProfileInterestsLayout/ProfileInterestsLayout";

interface ProfileInterestsPageProps {
  params: Promise<{ username: string }>;
}

const ProfileInterestsPage = async ({ params }: ProfileInterestsPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <ProfileInterestsLayout
        username={userData.username}
        interests={userData.interests}
      ></ProfileInterestsLayout>
    </>
  );
};

export default ProfileInterestsPage;
