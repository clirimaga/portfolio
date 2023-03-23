const Skill = require('../model/skill');


const getSkills = async (req,res) =>{
    try {
        const skills = await Skill.find({});
        res.json(skills);
      } catch (error) {
        res.status(500).send(error.messages);
      }
}

module.exports = {
    getSkills
}