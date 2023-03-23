const express= require('express');
const projectRouter= express.Router();
const {getProjects}= require('../controllers/projects')


projectRouter.route('/').get(getProjects)

module.exports = {
    projectRouter
}
