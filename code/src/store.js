import {configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import { VehicleDetails } from './redux/vehicleDetailsSlice';
import { detailsOfCustomer } from './redux/detailsOfCustomerSlice';


const store = configureStore({
    reducer: {
        user: authSlice,
        vehicleDetails: VehicleDetails,
        detailsOfCustomer: detailsOfCustomer
    }
})


export default store;