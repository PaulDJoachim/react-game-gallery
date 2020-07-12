const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE


// PUT Route
router.put( '/like/:id', (req, res)=>{
  console.log( '/like PUT:', req.params.id);
  const queryString = `UPDATE gallery SET likes = (likes + 1) WHERE id=${ req.params.id };`;
  pool.query( queryString ).then( ( results )=>{
      res.sendStatus( 200 );
  }).catch( ( err )=>{
      console.log( err );
      res.sendStatus( 500 );
  })
}) 



// GET Route
router.get('/',(req, res)=>{
  console.log('GETing list from database')
  let queryString = `SELECT * FROM gallery ORDER BY id ASC`;
  pool.query(queryString).then((result)=>{
    res.send(result.rows);
  }).catch((err)=>{
    console.log('error GETing from database:', err);
    res.sendStatus(500);
  })
})


module.exports = router;