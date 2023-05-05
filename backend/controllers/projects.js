const Project = require('../model/project');


const getProjects = async (req,res) =>{
// const queryObj = {...req.query};
//   const excludedFields = ['page','sort','limit','fields'];
//   excludedFields.forEach(el => delete queryObj[el]);

  try {
    const allProjects = await Project.find({});
        if (req.query.sort) {
          if (req.query.sort === 'Low') {
           const sortedProjects = await Project.find({}).where('complexity').equals('1')
           res.json(sortedProjects);
          }
          if (req.query.sort === 'Medium') {
            const sortedProjects = await Project.find({}).where('complexity').equals('2')
            res.json(sortedProjects);
           }
          if (req.query.sort === 'High') {
            const sortedProjects = await Project.find({}).where('complexity').equals('3')
            res.json(sortedProjects);
           }
          else res.json(allProjects);
        } else {
          res.json(allProjects)
        }
      } catch (error) {
        res.status(500).send(error.messages);
      }
}

module.exports = {
    getProjects
}