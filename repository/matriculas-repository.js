<<<<<<< HEAD
const { Matriculas } = require('../models/matricula');
=======
const { Matricula } = require('../models/matricula');
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d

async function getMatriculas() {
    return Matricula.findAll();
}

async function getMatricula(id) {
    return Matricula.findByPk(id);
}

async function addMatricula(matricula) {
    const newMatricula = await Matricula.create({
        aluno_id: matricula.aluno_id,
        curso_id: matricula.curso_id,
    });
    return newMatricula;
}

async function deleteMatricula(id) {
    return Matricula.destroy({ where: { id } });
}

module.exports = {
    getMatriculas,
    getMatricula,
    addMatricula,
    deleteMatricula
}
