import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
})

const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer