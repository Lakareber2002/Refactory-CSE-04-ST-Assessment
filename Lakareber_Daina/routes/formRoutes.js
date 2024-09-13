const express = require('express');
const router = express.Router();


// Import the User model
const Form = require('../models/form');

// Route to get all form
router.get('/Form', (req, res) => {
    res.render('form');
    console.log('form');
});

//Route for handling the form submission to add new page
router.post('/Form', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        await newForm.save();
        res.redirect('/formlist');
    } catch (err) {
        res.status(400).send('unable to save form to database');
        console.log('Error saving form:', err);
    }
});


// Route to render the form list page
router.get('/formList', async (req, res) => {
    try {
        const form = await Credit.find().sort({ $natural: -1 }); // Sorting the new produce
        res.render('formList', {
            title: 'Form List',
           credit
        });
    } catch (err) {
        res.status(400).send('Unable to find items in the database');
    }
});

// Route for handling form deletion
router.post('/deleteForm', async (req, res) => {
    try {
        await Credit.deleteOne({ _id: req.body.id });
        res.redirect('back');
    } catch (err) {
        res.status(404).send('Unable to delete item in the database');
    }
});

// Export the router
module.exports = router;
