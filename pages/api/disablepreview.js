export default function handler(req, res) {
  res.clearPreviewData();
  res.end("Prview Mode ended");
}
