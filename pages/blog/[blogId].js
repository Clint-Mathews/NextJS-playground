import Head from "next/head";

const Blog = ({ title, des }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={des} />
      </Head>
      <h1> Blog Page Clint</h1>;
    </>
  );
};
export default Blog;
export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASSWORD;
  console.log(user);
  console.log(pass);
  return {
    props: {
      title: "Clint",
      des: "Clint123",
    },
  };
}
