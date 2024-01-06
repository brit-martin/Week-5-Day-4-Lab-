import express from 'express'
import ViteExpress from 'vite-express' 
import {Ingredient, Author, RecipeIngredient, Recipe} from './models/model.js'

const app = express()

app.use(express.json())

app.get('/recipes', async (req, res) => {
    const recipeArray = await Recipe.findAll()

    for (let i =0; i < recipeArray.length; i++){
        let recipe = recipeArray[i]

        let recipeIngredientsArray = await recipe.getRecipe_ingredients()

        let ingredients = []
            for (let k =0; k < recipeIngredientsArray.length; k++){
                let recipeIngredient = recipeIngredientsArray[k]

                let ingredient = await recipeIngredient.getIngredient()
                
                ingredient.dataValues.quantity = recipeIngredient.dataValues.quantity

                ingredients.push(ingredient.dataValues)

                recipeArray[i].dataValues.ingredients  = ingredients
            }
    } 
    res.send(recipeArray)
})


ViteExpress.listen(app, 8372, () => {
    console.log('App is up on 8372')
})

