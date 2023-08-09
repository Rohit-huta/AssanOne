import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  vehicleData: [],
  loading: false,
  success: false,
  error: null,
};

export const vehicleDetailsInfo = createAsyncThunk(
  "vehicleDeatils/vehicle",
  async () => {
    console.log(2);
    const options = {
      method: "POST",
      url: "https://vehicle-rc-information.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3c720b5980msh1e4d3f5aeec3f51p14a87bjsn1835be8e708a",
        "X-RapidAPI-Host": "vehicle-rc-information.p.rapidapi.com",
      },
      data: {
        VehicleNumber: "MH14CH3077",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(1);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const vehicleDetailsSlice = createSlice({
  name: "vehicleDetails",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(vehicleDetailsInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(vehicleDetailsInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      console.log(payload);
    });
    builder.addCase(vehicleDetailsInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    });
  },
});

export const VehicleDetails = vehicleDetailsSlice.reducer;
