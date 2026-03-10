import { Header } from "@/app/components/Header/Header";
import { ProfileInterestsLayout } from "@/app/features/Profile/ProfileInterestsLayout/ProfileInterestsLayout";
import { getUser } from "@/app/api/user";

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
