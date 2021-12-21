import { useRouter } from "next/router";
const PostDetails = ({ post }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <h1>
        {post.id}
        {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
};
export default PostDetails;
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const respose = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await respose.json();
  console.log(`Generating page for /post/${params.postId}`);
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((item) => {
    return { params: { postId: `${item.id}` } };
  });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}
