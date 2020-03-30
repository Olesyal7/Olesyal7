import {IPlace} from './../types/place'
import {normalize, schema} from 'normalizr'

const placeSchema = new schema.Entity('place')

export function placesNormalize(places: IPlace[]) {
    return normalize(places, [placeSchema])
}

export function placeNormalize(place: IPlace) {
    return normalize(place, placeSchema)
}

