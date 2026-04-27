export default function handler(req, res) {
  try {
    const { pa, am, tid } = req.query;

    if (!pa || !am) {
      return res.status(400).send("Missing parameters");
    }

    const upiLink =
      `upi://pay?` +
      `pa=${encodeURIComponent(pa)}` +
      `&pn=NHCLC` +
      `&am=${encodeURIComponent(am)}` +
      `&cu=INR` +
      `&tid=${encodeURIComponent(tid || Date.now())}`;

    res.writeHead(302, {
      Location: upiLink,
    });

    res.end();

  } catch (error) {
    res.status(500).send("Server Error");
  }
}