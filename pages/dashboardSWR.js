import useSWR from "swr";

const DashboardSWR = () => {
  const fetcher = async () => {
    const response = await fetch(`http://localhost:4000/dashboard`);
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("DashboardSWR", fetcher);
  if (error) {
    return <h1>Error has occured.</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>Posts</h2>
      {data.post}
      <h2>Likes</h2>
      {data.likes}
      <h2>Followers</h2>
      {data.followers}
      <h2>Following</h2>
      {data.following}
    </div>
  );
};
export default DashboardSWR;
