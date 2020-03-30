import {FETCH_PLACES_SUCCESS, FETCH_PLACES, FETCH_PLACE_SUCCESS} from '.././actions/places'
import {IPlace, IPlaceState} from "../react-app-env";

const initialState: IPlaceState = {
    placeList: [],
    places: {},
    isLoading: false
}

interface IAction {
    type: string
    payload: {
        result: number[] | number
        entities: {place: {[key: number]: IPlace}}
    }
}

export default function (state=initialState, action: IAction) {
    switch(action.type) {
        case FETCH_PLACES:
        case FETCH_PLACE_SUCCESS:
            return {
                ...state,
                places: {
                    ...state.places,
                    ...action.payload.entities.place
                },
                placeList: [action.payload.result as number],
                isLoading: false
            }
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                places: action.payload.entities.place,
                placeList: action.payload.result as number[],
                isLoading: false
            }
    }
    return state
}