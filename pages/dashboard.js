import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashbaordData, setDashbaordData] = useState(null);
  useEffect(() => {
    const getDashBoardData = async () => {
      const response = await fetch(`http://localhost:4000/dashboard`);
      const data = await response.json();
      setDashbaordData(data);
      setIsLoading(false);
    };
    getDashBoardData();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>Posts</h2>
      {dashbaordData.post}
      <h2>Likes</h2>
      {dashbaordData.likes}
      <h2>Followers</h2>
      {dashbaordData.followers}
      <h2>Following</h2>
      {dashbaordData.following}
    </div>
  );
};
export default Dashboard;
