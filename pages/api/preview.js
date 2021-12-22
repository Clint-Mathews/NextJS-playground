export default function handler(req, res) {
  res.setPreviewData({ user: "clint" });
  res.redirect(req.query.redirect);
}
