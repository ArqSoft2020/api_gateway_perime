// Hardcoded data store
import {files, getFile, getFileRegister, getFileImage} from './multimedia_ms/multimedia_querys'
import {storeFile, updateFile, deleteFile} from './multimedia_ms/multimedia_mutations'
import {allUbication, ubicationById, ubicationByPublication} from './ubication_ms/ubication_querys'
import {createUbication, updateUbication, deleteUbication} from './ubication_ms/ubication_mutations'


const resolvers = {
    Query: {
        files,
        getFile,
        getFileRegister,
        getFileImage,
        allUbication, 
        ubicationById, 
        ubicationByPublication
    },

    Mutation: {
        storeFile,
        updateFile,
        deleteFile,
        createUbication, 
        updateUbication, 
        deleteUbication
    }
}

export default resolvers