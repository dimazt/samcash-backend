const express = require('express');
const router = express.Router();

// Rute: /mitra
router.get('/', (req, res) => {
  res.send('Mitra Route');
});


module.exports = router;
