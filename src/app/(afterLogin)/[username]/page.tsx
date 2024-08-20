import UserProfilePage from "../_components/UserProfilePage";

export default function UserPage({ params }: { params: { username: string } }) {
  return <UserProfilePage params={params}/>;
}
