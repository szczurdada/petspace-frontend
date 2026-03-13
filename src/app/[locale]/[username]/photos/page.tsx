import { getUser } from "@/app/api/user";
import { Header } from "@/app/components/Header/Header";
import { PhotoGalleryLayout } from "@/app/features/Photos/PhotoGalleryLayout/PhotoGalleryLayout";
import { MOCK_PHOTOS } from "@/app/uikit/constants/profile";

interface PhotosPageProps {
  params: Promise<{ username: string}>;
}

const PhotosPage = async ({ params }: PhotosPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username}></Header>
      <PhotoGalleryLayout username={userData.username} photos={MOCK_PHOTOS}></PhotoGalleryLayout>
    </>
  );
};

export default PhotosPage;
