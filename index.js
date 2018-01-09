import path from 'path';
import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

// import { typeDefs } from "./schema";
// import { resolvers } from "./schema/resolvers";

import models from "./models";

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

const PORT = 3000;
const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema, 
    context: {
        models,
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

models.sequelize.authenticate().then( () => {

    console.log('Connected to the database')

    models.sequelize.sync({ force: false})
        .then(context => {
            app.listen(PORT, () => { 
                console.log(`Server started and listening on port ${PORT}`) 
            });    
        })

}).catch( err => {
    console.log('There was an error when connecting', err)
});

