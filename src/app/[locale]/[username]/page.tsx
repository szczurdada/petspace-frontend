import { Header } from "@/app/components/Header/Header";
import { ProfileLayout } from "@/app/features/Profile/ProfileLayout/ProfileLayout";
import { getUser } from "@/app/api/user";
import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  if (!userData) {
    notFound();
  }

  return (
    <>
      <Header username={userData.username} />
      <ProfileLayout
        bannerInfo={{
          name: userData.name,
          username: userData.username,
          gender: userData.gender,
          breed: userData.breed,
          birthDate: userData.birthDate,
          city: userData.city,
          bio: userData.bio,
          interests: userData.interests,
        }}
      />
    </>
  );
};

export default ProfilePage;
