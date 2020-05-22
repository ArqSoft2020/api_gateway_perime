export const session_schema = `

    type Token {
        id_session: Int
        token_session: String
    }

    input SessionInput {
        email: String
        password: String
    }

    input UserInputRegister {
        username_user: String
        passhash_user: String
        address_user: String
        cellphone_user: String
        email_user: String
    }    
`

export const session_mutations = `
    sessionmLogin(input: SessionInput): Token
    sessionmLogout(id: Int): Token
    sessionwLogin(input: SessionInput): Token
    sessionwLogout(id: Int): Token
    sessionmRegister(input: UserInputRegister): Token
    sessionwRegister(input: UserInputRegister): Token
`