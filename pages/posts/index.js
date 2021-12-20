import Link from "next/link";
const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <Link href={`/posts/${data.id}`} passHref>
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
export default PostList;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
