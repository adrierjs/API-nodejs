export const getAllUsers = (req, res) => {
  try {
    res.send("Listagem de usuários");
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const createUser = (req, res) => {
  try {
    const users = req.body;

    if (
      !Array.isArray(users) ||
      users.length === 0 ||
      !users.every((user) => user.name) //Verfica se existe o atributo name para cada usuário
    ) {
      res.status(400).send("Formato inválido!");
      return "Formato inválido";
    }

    const greetings = [];

    users.forEach((user) => {
      if (
        !user.shipping_address ||
        user.shipping_address.length === 0 ||
        !Array.isArray(user.shipping_address)
      ) {
        greetings.push(
          `Olá, ${user.name}. Não encontrei informações referente ao seu endereço.`
        );
      }

      if (
        user.shipping_address &&
        user.shipping_address.length !== 0 &&
        Array.isArray(user.shipping_address)
      ) {
        greetings.push(
          `Olá, ${user.name}! Você mora na ${user.shipping_address[0].street}, no bairro ${user.shipping_address[0].neighborhood} em ${user.shipping_address[0].city} - ${user.shipping_address[0].region}.`
        );
        console.log(`Dados recebidos com sucesso de ${user.name}`);
      }
    });

    res.status(200).send(greetings.join("\n"));
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
