export const user_schema = `
    type User {
        id_user: Int
        username_user: String
        passhash_user: String
        address_user: String
        cellphone_user: String
        email_user: String
    }

    input UserInput {
        username_user: String
        passhash_user: String
        address_user: String
        cellphone_user: String
        email_user: String
    }
`

export const user_querys = `
    users: [User]!
    getUser(id: Int): User
`

export const user_mutations = `
    createUser(input: UserInput): User
    updateUser(id : ID, input: UserInput): User
    deleteUser(id: ID): User
`