const router = require('express').Router();
const sequelize = require('../config/connection');
const Guitar = require('../models/Guitar')
router.get('/', (req, res) => {
  console.log(req.session);
    Guitar.findAll({
      attributes: [
        'id',
        'guitar_type',
        'guitar_brand',
        'price',
        'comment_text'
      ],
    //   include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    })
    .then(dbGuitarData => {
      const guitars = dbGuitarData.map(guitar => guitar.get({ plain: true }));
  
      res.render('guitarsection', {guitars});
      
    })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     })
  });
  
  router.get('/login', (req, res) => {
    // check for session and redirect to homepage if one exists
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

  router.get('/main', (req, res) => {
    res.render('main')
  })

  module.exports = router;