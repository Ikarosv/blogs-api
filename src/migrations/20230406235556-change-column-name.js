'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'publised', 'published');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('blog_posts', 'published', 'publised');
  }
};
