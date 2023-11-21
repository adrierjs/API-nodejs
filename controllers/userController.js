export const getAllUsers = (req, res) => {
  try {
    res.send('Listagem de usuários');
    res.send('Adrier teste')
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const createUser = (req, res) => {
  try {
    const { nome, idade, cidade, telefone } = req.body;

    if (!req.body || !nome || !idade) {
      res.status(400).send('Formato inválido')
      return 'Formato inválido';
    }
    if (nome && idade) {
      console.log(`Dados recebidos de ${nome}`)
      if (nome && idade && cidade && !telefone) {
        res.send(`${nome} tem ${idade} anos e mora em ${cidade}`)
        return;
      }
      if (nome && idade && cidade && telefone){
        res.send(`Nome: ${nome}
        Idade: ${idade} anos
        Cidade: ${cidade}
        Telefone: ${telefone}`)
        return;
      }
      res.send(`${nome} tem ${idade} anos`);
    }
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500).send('Internal Server Error');
  }
};

