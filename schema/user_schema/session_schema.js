export const session_schema = `

    type Token {
        id_session: Int
        token_session: String
    }

    input SessionInput {
        email: String
        password: String
    }

    type NoSale {
        Nada: String
    }
`

export const session_mutations = `
    sessionmLogin(input: SessionInput): Token
    sessionmLogout(id: Int): NoSale
    sessionwLogin(input: SessionInput): Token
    sessionwLogout(id: Int): NoSale
`