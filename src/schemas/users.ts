import {IUser} from './../types/user'
import {normalize, schema} from 'normalizr'

const userSchema = new schema.Entity('user')

export function usersNormalize(users: IUser[]) {
    return normalize(users, [userSchema])
}

export function userNormalize(user: IUser[]) {
    return normalize(user, userSchema)
}

