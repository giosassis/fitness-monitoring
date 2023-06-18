const UserRepository = require('../repositories/UserRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    // Verifica se o e-mail já está sendo usado por outro usuário
    const existingUser = await this.userRepository.getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('E-mail already exists');
    }

    // Cria o novo usuário
    return this.userRepository.createUser(userData);
  }

  async updateUser(userId, userData) {
    // Verifica se o usuário existe
    const existingUser = await this.userRepository.getUserById(userId);
    if (!existingUser) {
      throw new Error('User not found');
    }

    // Atualiza as informações do usuário
    return this.userRepository.updateUser(userId, userData);
  }

  async deleteUser(userId) {
    // Verifica se o usuário existe
    const existingUser = await this.userRepository.getUserById(userId);
    if (!existingUser) {
      throw new Error('User not found');
    }

    // Exclui o usuário
    return this.userRepository.deleteUser(userId);
  }

  async getUserById(userId) {
    // Verifica se o usuário existe
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }
}

module.exports = UserService;
