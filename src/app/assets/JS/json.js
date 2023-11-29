// Inicializa uma array vazia se o arquivo não existir
let usuarios = [];

// Função para obter os usuários armazenados ou retornar uma array vazia se não houver
function getUsuarios() {
  return usuarios;
}

// Função para adicionar um novo usuário à array
function adicionarUsuario(usuario) {
  usuarios.push(usuario);
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = {
  getUsuarios,
  adicionarUsuario
};
