export default `
    # Living creatures is called people
    type People {
        # The name called to the people
        name: String!
        # The exact height of the people
        height: String!
        # The weight of the people
        mass: String!
        # The color of the hair 
        hair_color: String!
        # The color of the skin
        skin_color: String!
        # The color of the eye
        eye_color: String!
        # Year of the birth
        birth_year: String!
        # Sexual description
        gender: String!
        # The people's planet where they came from
        homeworld: Planet!
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
`