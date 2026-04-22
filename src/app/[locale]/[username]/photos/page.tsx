import { getPhotoComments } from "@/app/api/comment";
import { getUser } from "@/app/api/user";
import { Header } from "@/app/components/Header/Header";
import { PhotoGalleryLayout } from "@/app/features/Photos/PhotoGalleryLayout/PhotoGalleryLayout";
import { Photo } from "@/types";

interface PhotosPageProps {
  params: Promise<{ username: string }>;
}

const PhotosPage = async ({ params }: PhotosPageProps) => {
  const awaitedParams = await params;
  const userData = await getUser(awaitedParams.username);

  const photosWithComments = await Promise.all(
    (userData.photos ?? []).map(async (photo: Photo) => ({
      ...photo,
      comments: await getPhotoComments(photo.id),
    })),
  );

  return (
    <>
      <Header username={userData.username} />
      <PhotoGalleryLayout
        username={userData.username}
        name={userData.name}
        photos={photosWithComments}
        avatar={userData.avatar}
      />
    </>
  );
};

export default PhotosPage;
