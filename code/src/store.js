import {configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import { VehicleDetails } from './redux/vehicleDetailsSlice';
// import vehicleDetailsSlice from './redux/vehicleDetailsSlice';


const store = configureStore({
    reducer: {
        user: authSlice,
        vehicleDetails: VehicleDetails
    }
})


export default store;