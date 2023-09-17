const circuitRepository = require('../repositories/circuitRepository');

async function getAll(req, res) {
  try {
    const circuits = await circuitRepository.findAll();
    res.json(circuits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar pistas de corrida' });
  }
}

async function getById(req, res){
  try {
    const id = req.params.id;
    const circuit = await circuitRepository.findById(id);
    if (!circuit) {
      res.status(404).json({ error: 'Pista de corrida não encontrada' });
    } else {
      res.json(circuit);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar pista de corrida' });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await circuitRepository.delete(id);
    res.json({ message: 'Pista de corrida excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a pista de corrida' });
  }
}

async function update(req, res){
  try {
    const id = req.params.id;
    const circuit = req.body;
    const updatedCircuit = await circuitRepository.update(id, circuit);
    res.json(updatedCircuit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a pista de corrida' });
  }
}

async function create(req, res){
  try {
    const circuit = req.body;
    const createdCircuit = await circuitRepository.create(circuit);
    res.json(createdCircuit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a pista de corrida' });
  }
}

module.exports = {
  getAll,
  getById,
  remove,
  update, 
  create
}