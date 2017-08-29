module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'toy', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		toy_url: Sequelize.STRING,
		image_url: Sequelize.STRING,
		price: Sequelize.FLOAT,
		notes: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}