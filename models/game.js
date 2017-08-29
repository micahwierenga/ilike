module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'game', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		game_url: Sequelize.STRING,
		image_url: Sequelize.STRING,
		price: Sequelize.FLOAT,
		notes: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}