import { useRouter } from "next/router";
const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>
        {post.id}
        {post.title}
        {post.price}
      </h1>
      <p>{post.description}</p>
    </>
  );
};
export default PostDetails;
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const respose = await fetch(
    `http://localhost:4000/products/${params.productsId}`
  );
  const data = await respose.json();
  console.log(`Generating / Regenerating page for /post/${params.productsId}`);
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  // const response = await fetch("http://localhost:4000/products");
  // const data = await response.json();
  // const paths = data.map((item) => {
  //   return { params: { productsId: `${item.id}` } };
  // });
  return {
    paths: [
      {
        params: { productsId: "1" },
      },
    ],
    fallback: true,
  };
}
