module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'snack', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: Sequelize.STRING,
		image_url: Sequelize.TEXT,
		order: Sequelize.INTEGER
	})
	return model;
}