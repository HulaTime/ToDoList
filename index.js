const express = require('express'),
  app = express();

app.get('/notes', (req, res) => {
  res.json({notes: 'This is your notebook, edit this to start saving your notes'});
});

app.listen(3000, () => console.log('listening on port 3000'));