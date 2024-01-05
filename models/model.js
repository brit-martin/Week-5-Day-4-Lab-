import Sequelize, { DataTypes, Model } from 'sequelize'

const sequelize = new Sequelize('postgresql:///recipe_app')

class Ingredient extends Model {}

Ingredient.init(
    { 
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true,
         },
         name: {
            type: DataTypes.STRING(60),
            allowNull: false,
         },
         units: {
            type: DataTypes.STRING(60),
            allowNull: false,
         },
         
    },
    {
        modelName: 'ingredient',
        sequelize: sequelize,
        timestamps: false,
    })

class Recipe extends Model {}

Recipe.init({},
    
    
    
    
    
    {

    })

await sequelize.sync({ force: true })
await sequelize.close()