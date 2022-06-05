const express = require('express')
const router = express.Router()

// @decs Login/Landing page
// @route GET /
router.get('/',(req,res)=>{
    res.render('login',{
        layout: 'login',
      })
})

// @decs Dashboard page
// @route GET /dashboard
router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
module.exports = router