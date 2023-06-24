const express = require('express');
const router = express.Router();

// Rute: /mitra
router.get('/', (req, res) => {
  res.send('Administrators Route');
});



module.exports = router;
