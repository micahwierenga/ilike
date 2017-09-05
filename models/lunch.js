module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'lunch', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		lunch_url: Sequelize.TEXT,
		image_url: Sequelize.TEXT,
		price: Sequelize.FLOAT,
		notes: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}