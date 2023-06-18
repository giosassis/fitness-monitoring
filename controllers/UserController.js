const UserService = require('../services/UserService');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(ctx) {
    try {
      const userData = ctx.request.body;
      const user = await this.userService.createUser(userData);
      ctx.status = 201;
      ctx.body = user;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }

  async updateUser(ctx) {
    try {
      const userId = ctx.params.id;
      const userData = ctx.request.body;
      const user = await this.userService.updateUser(userId, userData);
      ctx.body = user;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }

  async deleteUser(ctx) {
    try {
      const userId = ctx.params.id;
      await this.userService.deleteUser(userId);
      ctx.status = 204;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }

  async getUserById(ctx) {
    try {
      const userId = ctx.params.id;
      const user = await this.userService.getUserById(userId);
      ctx.body = user;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }

  async getAllUsers(ctx) {
    try {
      const users = await this.userService.getAllUsers();
      ctx.body = users;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  }
}

module.exports = UserController;
