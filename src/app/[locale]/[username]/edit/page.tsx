import { Header } from "@/app/components/Header/Header";
import { ProfileEditorLayout } from "@/app/features/Profile/info/ProfileEditorLayout/ProfileEditorLayout";
import { getUser } from "@/app/api/user";

interface EditPageProps {
  params: Promise<{ username: string }>;
}

const EditPage = async ({ params }: EditPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <main>
        <ProfileEditorLayout
          avatar={userData.avatar}
          avatarPhotos={userData.avatarPhotos}
          name={userData.name}
          username={userData.username}
          birthDate={userData.birthDate}
          gender={userData.gender}
          breed={userData.breed}
          country={userData.country}
          city={userData.city}
          bio={userData.bio}
        />
      </main>
    </>
  );
};

export default EditPage;
