export default {
    Query: {
        allPeople: (parent, args, { models }) => models.People.findAll(),
        //fetch('https://swapi.co/api/people').then(response => response.json()),
    },
    Mutation: {
        createPeople: (parent, args, { models }, info) => {
            //console.log(parent, args,  models)
            //return { name: "asdasd" }
            return models.People.create(args)
        }
    },
};