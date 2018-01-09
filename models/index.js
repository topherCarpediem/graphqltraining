import Sequelize from "sequelize";

const sequelize = new Sequelize(
    'starwars', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    }
);

const models = {
    People: sequelize.import('./People')
}

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]){
        models[modelName].associate(models)
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;