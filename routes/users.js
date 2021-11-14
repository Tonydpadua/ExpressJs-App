const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    console.log(req.query.name);
    res.send('Users list');
});

router.get('/new',(req, res) => {
    res.render('users/new', {firstName: 'Test'});
});

router.post('/',(req, res) => {
    const ivValid = true;
    if (ivValid) {
        users.push({ firstName: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('Error');
        res.render('/users/new', { firstName: req.body.firstName });
    }
});

router
    .route('/:id')
        .get((req, res) => {
            console.log(req.user);
            res.send(`Get user with Id ${req.params.id}`)
        })
        .put((rer, res) => {
            res.send(`Update user with Id ${req.params.id}`)
        })
        .delete((req, res) => {
            res.send(`Delete user with Id ${req.params.id}`)
        })

const users = [{ name: 'Kyle'}, { name: 'Sally'}];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
})

module.exports = router;