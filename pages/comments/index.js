import { useState } from "react";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setCommentsList(data);
  };
  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setComment("");
  };
  async function deleteComment(commentId) {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchComments();
  }
  async function updateComment(commentId) {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    fetchComments();
  }
  return (
    <>
      <h1>Comments Page</h1>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={addComment}>Add Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {commentsList.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id}
              {data.text}
            </h2>
            <button onClick={() => updateComment(data.id)}>Update</button>
            <button onClick={() => deleteComment(data.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};
export default Comments;
