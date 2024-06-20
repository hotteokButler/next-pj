import PhotoModal from '@/app/(afterLogin)/_components/PhotoModal';
interface IProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}
export default function PhotoModalPage({ params }: IProps) {
  return (
      <PhotoModal params={params} />
  );
}
