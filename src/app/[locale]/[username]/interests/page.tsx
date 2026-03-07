import { Header } from "@/app/components/Header/Header";
import { ProfileInterestsLayout } from "@/app/features/Profile/ProfileInterestsLayout/ProfileInterestsLayout";
import axios from "axios";

const getUser = async (username: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3005/user/${username}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

interface ProfileInterestsPageProps {
  params: Promise<{ username: string }>;
}

const ProfileInterestsPage = async ({ params }: ProfileInterestsPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <ProfileInterestsLayout username={userData.username}></ProfileInterestsLayout>
    </>
  );
};

export default ProfileInterestsPage;
