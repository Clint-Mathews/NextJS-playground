import { comments } from "../../data/comment";

const CommentDetails = ({ comment }) => {
  return (
    <div>
      <h1>Comment Details</h1>
      <h2>{comment.id}</h2>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find((item) => item.id === parseInt(commentId));
  // Not recommended for getStaticProps or getServerSideProps for api data from next
  //   const response = await fetch(
  //     `http://localhost:3000/api/comments/${commentId}`
  //   );
  //   const comment = await response.json();
  return {
    props: {
      comment,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/comments");
  const resData = await response.json();
  const paths = resData.map((item) => {
    return { params: { commentId: `${item.id}` } };
  });
  return {
    paths,
    fallback: false,
  };
}
