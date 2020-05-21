export const session_schema = `

    type Token {
        id_session: Int
        token_session: String
    }

    input SessionInput {
        email: String
        password: String
    }
`

export const session_mutations = `
    sessionmLogin(input: SessionInput): Token
    sessionmLogout(id: Int): Token
    sessionwLogin(input: SessionInput): Token
    sessionwLogout(id: Int): Token
`