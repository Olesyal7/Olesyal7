/// <reference types="react-scripts" />
export interface IPlace {
    id: number;
    name: string;
    geoPosition: string;
    climate: string;
    country: number;
    description: string;
    entertainment: number;
    image: string;
}

interface IPlaceState {
    isLoading: boolean
    placeList: number[]
    places: { [key: number]: IPlace}
}

interface IState  {
    users: IUserState
}

export interface IUser {
    id: number;
    name: string;
    login: string;
    password: string;
    userPlaces: Array<number>
}

interface IUserState {
    userList: number[]
    users: { [key: number]: IUser}
}