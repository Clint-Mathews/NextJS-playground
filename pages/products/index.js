import Link from "next/link";
const productsList = ({ posts }) => {
  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <Link href={`/products/${data.id}`} passHref>
              <h2>
                {data.id} {data.title}
              </h2>
              {/* <p>{data.body}</p> */}
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default productsList;
export async function getStaticProps() {
  console.log("Generating/ Regenerating static props");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}
