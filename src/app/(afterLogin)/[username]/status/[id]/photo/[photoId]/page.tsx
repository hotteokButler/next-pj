import Status from '../../page';

interface IProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}

export default function PhotoPage({ params }: IProps) {
  return (
    <>
      <Status />
    </>
  );
}
