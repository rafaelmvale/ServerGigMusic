import express from 'express';

const app = express();


app.get("/gig", (req, res) => {
  return res.send("Olá Músico");
})
app.listen(3333, () => {
  console.log('HTTP server listening on')
});