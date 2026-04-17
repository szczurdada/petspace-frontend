import { getUser } from "@/app/api/user";
import { Header } from "@/app/components/Header/Header";
import { PhotoGalleryLayout } from "@/app/features/Photos/PhotoGalleryLayout/PhotoGalleryLayout";

interface PhotosPageProps {
  params: Promise<{ username: string}>;
}

const PhotosPage = async ({ params }: PhotosPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  return (
    <>
      <Header username={userData.username} />
      <PhotoGalleryLayout
        username={userData.username}
        photos={userData.photos ?? []}
        avatar={userData.avatar}
      />
    </>
  );
};

export default PhotosPage;
