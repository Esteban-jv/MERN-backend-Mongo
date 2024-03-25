import Project from '../models/Project.js'

const getProjects = async (req, res) => {
    const projects = await Project.find().where('creator').equals(req.usuario)

    res.json(projects);
};

const getProject = async (req, res) => {
    const { id } = req.params;

    //checar si existe
    const project = await Project.findById(id);
    if(!project) {
        const error = new Error("No encontrado");
        return res.status(404).json({ msg: error.message });
    }

    if(project.creator.toString() === req.usuario.id.toString())
    {
        return res.json({project});
    }
    else {
        const error = new Error("Acción no válida");
        return res.status(401).json({ msg: error.message });
    }

};

const newProject = async (req, res) => {
    const project = new Project(req.body);
    project.creator = req.usuario._id;

    try {
        const storedProject = await project.save();
        res.json(storedProject);
    } catch (error) {
        console.error(error)
    }
};

const editProject = async (req, res) => {
    //
};

const deleteProject = async (req, res) => {
    //
};

const addCollaborator = async (req, res) => {
    //
};

const deleteCollaborator = async (req, res) => {
    //
};

const getTasks = async (req, res) => {
    //
};

export {
    getProjects,
    newProject,
    getProject,
    editProject,
    deleteProject,

    addCollaborator,
    deleteCollaborator,

    getTasks
};