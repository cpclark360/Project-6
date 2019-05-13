
const express = require('express');
const router = express.Router();
const data = require('../data.json');
const project =JSON.parse(JSON.stringify(data));

// Process route to project and redirects to index page if user inputs are invalid
router.get('/projects/:projectId', (req, res) => {
    const projectId = req.params.projectId;
    if( projectId > project.projects.length 
        || projectId < 0 
        ||isNaN(projectId) 
        || projectId === '00' ){
        res.redirect('/');
    } else {
        res.render('project',{ projects : project.projects[req.params.projectId] });
    }
});
    
module.exports = router;
