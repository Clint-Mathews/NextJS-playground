import { comments } from "../../../data/comment";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const data = { id: Date.now(), text: comment };
    comments.push(data);
    res.status(201).json(data);
  }
}
