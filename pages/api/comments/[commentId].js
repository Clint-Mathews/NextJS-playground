import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { commentId } = req.query;
    const data = comments.find((item) => item.id === parseInt(commentId));
    res.status(200).json(data);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    const index = comments.findIndex((item) => item.id === parseInt(commentId));
    comments.splice(index, 1);
    res.status(200).json(index);
  } else if (req.method === "PUT") {
    const { commentId } = req.query;
    console.log(req.body);
    const comment = req.body.comment;
    const index = comments.findIndex((item) => item.id === parseInt(commentId));
    console.log(index);
    console.log(comments[index]);
    console.log(comment);
    comments[index].text = comment;
    res.status(200).json(comments);
  }
}
