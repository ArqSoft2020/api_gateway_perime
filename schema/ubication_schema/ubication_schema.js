export const ubication_schema = `
    type Ubication {
        _id: ID
        nameUser: String
        dirUser: String
        dirPublication: String
        idPublication: Int
        namePublication: String
        date: String
    }
`

export const ubication_queries = `
    allUbication: [Ubication]
    ubicationById(id: ID, type: String): Ubication
    ubicationByPublication(id: ID, idPublication: Int): Ubication
`

export const ubication_mutations = `
    createUbication(id: ID, type: String): Ubication
    updateUbication(id: ID, type: String): Ubication
    deleteUbication(id: ID, type: String): Ubication
`
