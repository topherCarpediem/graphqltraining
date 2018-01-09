export default (sequelize, DataTypes) => { 
    
    const People = sequelize.define('People', {
        name: { type: DataTypes.STRING },
        height: { type: DataTypes.STRING },
        mass: { type: DataTypes.STRING },
        hair_color: { type: DataTypes.STRING },
        skin_color: { type: DataTypes.STRING },
        eye_color: { type: DataTypes.STRING },
        birth_year: { type: DataTypes.STRING },
        gender: { type: DataTypes.STRING },
        homeworld: { type: DataTypes.STRING }
    });

    return People;
}