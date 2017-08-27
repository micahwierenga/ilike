module.exports = function( sequelize, Sequelize ) {
	let model = sequelize.define( 'joke', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		description: Sequelize.STRING,
		order: Sequelize.INTEGER
	})
	return model;
}