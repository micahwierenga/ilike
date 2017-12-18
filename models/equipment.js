module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'equipment', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		equipment_url: Sequelize.TEXT,
		image_url: Sequelize.TEXT,
		price: Sequelize.FLOAT,
		notes: Sequelize.TEXT,
		order: Sequelize.INTEGER,
		owned: Sequelize.INTEGER
	})
	return model;
}