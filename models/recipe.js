module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'recipe', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		recipe_url: Sequelize.TEXT,
		image_url: Sequelize.TEXT,
		instructions: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}