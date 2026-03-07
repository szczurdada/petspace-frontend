import { Header } from "@/app/components/Header/Header";
import { ProfileEditorLayout } from "@/app/features/Profile/ProfileEditorLayout/ProfileEditorLayout";
import axios from "axios";

const getUser = async (username: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3005/user/${username}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

interface EditPageProps {
  params: Promise<{ username: string }>;
}

const EditPage = async ({ params }: EditPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <ProfileEditorLayout
        name={userData.name}
        username={userData.username}
        breed={userData.breed}
        country={userData.country}
        city={userData.city}
        bio={userData.bio}
      />
    </>
  );
};

export default EditPage;
