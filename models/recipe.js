module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'recipe', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		recipe_url: Sequelize.STRING,
		image_url: Sequelize.STRING,
		instructions: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}