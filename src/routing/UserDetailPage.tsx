import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const param = useParams();
  console.log(param);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString());

  const location = useLocation();
  console.log(location);

  return <p>User</p>;
};

export default UserDetailPage;
