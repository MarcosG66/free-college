<<<<<<< HEAD
const { Cursos } = require('../models/curso');
const { Salas } = require('../models/sala');
const { Professores } = require('../models/professor');


=======
const { Curso } = require('../models/curso');
const { Sala } = require('../models/sala');
const { Professor } = require('../models/professor');
>>>>>>> 072940068cb708eebc7fd5de82196d035fad0c1d

async function getCursos() {
    return Curso.findAll({ attributes: ['id', 'nome'] });
}

async function getCurso(id) {
    return Curso.findByPk(id, { attributes: ['id', 'nome'] , include: [Sala, Professor]});
}

async function addCurso(curso) {
    try {
        const newCurso = await Curso.create({
            nome: curso.nome,
            professor_id: curso.professor_id,
            sala_id: curso.sala_id,
        });
        console.log('New Curso:', newCurso); // Add this logging statement
        return newCurso;
    } catch (error) {
        console.error('Error creating curso:', error);
        throw error;
    }
}

async function deleteCurso(id) {
    return Curso.destroy({ where: { id } });
}

async function editCurso(curso) {
    try {
        const updatedCurso = await Curso.findByPk(curso.id);
        if (!updatedCurso) {
            throw new Error('Curso não encontrado');
        }
        updatedCurso.nome = curso.nome;
        await updatedCurso.save();
        return updatedCurso;
    } catch (error) {
        throw new Error('Erro ao atualizar curso: ' + error.message);
    }
}

module.exports = {
    getCursos,
    getCurso,
    addCurso,
    deleteCurso,
    editCurso
}