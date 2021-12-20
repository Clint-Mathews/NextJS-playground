import User from "../components/user";

const Users = ({ users }) => {
  console.log(users);
  return (
    <>
      <h1>Users</h1>
      {users.map((data) => {
        return (
          <div key={data.id}>
            <User user={data} />;
          </div>
        );
      })}
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
