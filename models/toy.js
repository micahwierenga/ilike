module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'toy', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		toy_url: Sequelize.TEXT,
		image_url: Sequelize.TEXT,
		price: Sequelize.FLOAT,
		notes: Sequelize.TEXT,
		order: Sequelize.INTEGER,
		owned: Sequelize.INTEGER
	})
	return model;
}