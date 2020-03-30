import {Dispatch} from 'redux'
import {placeNormalize, placesNormalize} from "../schemas/places";

export const FETCH_PLACES = 'FETCH_PLACES'
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS'
export const FETCH_PLACE_SUCCESS = 'FETCH_PLACE_SUCCESS'

export function fetchPlaces() {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_PLACES
        })
        const response = await fetch('/api/place')
        const data = await response.json()

        dispatch({
            type: FETCH_PLACES_SUCCESS,
            payload: placesNormalize(data)
        })
    }
}

export function fetchPlace(placeId: string) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_PLACES
        })
        const response = await fetch(`/api/place/${placeId}`)
        const data = await response.json()

        dispatch({
            type: FETCH_PLACE_SUCCESS,
            payload: placeNormalize(data)
        })
    }
}