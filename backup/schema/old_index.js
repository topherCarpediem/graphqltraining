export const typeDefs = `
type People {
    name: String!
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String!
    homeworld: Planet!
}

type AllPeople {
    count: Int!
    next: String
    previous: String
    results: [People!]!
}

type Planet {
    name: String!
    rotation_period: String!
    orbital_period: String!
    diameter: String!
    climate: String!
    gravity: String!
    terrain: String!
    surface_water: String!
    population: String! 
}

type Query {
    allPeople: [People!]!,
}

type Mutation {
    createPeople(
        name: String!,
        height: String!,
        mass: String!,
        hair_color: String!,
        skin_color: String!,
        eye_color: String!,
        birth_year: String!,
        gender: String!,
    ): People
}
`;