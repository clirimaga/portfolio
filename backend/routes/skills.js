const express= require('express');
const skillRouter= express.Router();
const {getSkills}= require('../controllers/skills')


skillRouter.route('/').get(getSkills)

module.exports = {
    skillRouter
}
