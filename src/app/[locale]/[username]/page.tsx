import { Header } from "@/app/components/Header/Header";
import { ProfileLayout } from "@/app/features/Profile/ProfileLayout/ProfileLayout";
import { getUser } from "@/app/api/user";
import { notFound } from "next/navigation";
import { getPostwall } from "@/app/api/postwall";
import { getPosts } from "@/app/api/post";

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);
  const postwallData = await getPostwall(awaitedParams.username);
  const postData = await getPosts(postwallData._id);

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
          avatar: userData.avatar,
          gender: userData.gender,
          breed: userData.breed,
          birthDate: userData.birthDate,
          city: userData.city,
          bio: userData.bio,
          interests: userData.interests,
          photos: userData.photos,
          postwallId: postwallData._id,
          posts: postData,
        }}
      />
    </>
  );
};

export default ProfilePage;
