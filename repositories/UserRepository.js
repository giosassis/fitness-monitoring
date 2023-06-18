const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class UserRepository {
  async createUser(userData) {
    return prisma.user.create({
      data: userData,
    });
  }

  async updateUser(userId, userData) {
    return prisma.user.update({
      where: {
        user_id: userId,
      },
      data: userData,
    });
  }

  async deleteUser(userId) {
    return prisma.user.delete({
      where: {
        user_id: userId,
      },
    });
  }

  async getUserById(userId) {
    return prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });
  }

  async getUserByEmail(email) {
    return prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async getAllUsers() {
    return prisma.user.findMany();
  }
}

module.exports = UserRepository;
