import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const postDetailsOfCustomer = createAsyncThunk(
    "postDetailsOfCustomer/customerDetails",
    async (data) => {
      console.log(2);
      console.log(data);
      const options = {
        method: "POST",
        url: "http://localhost:8080/api/customer_details",
        headers: {
          "content-type": "application/json",
        },
        data: data,
      };
  
      try {
        const response = await axios.request(options);
        console.log(1);
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  );

const detailsOfCustomerSlice = createSlice({
  name: "customerDetails",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDetailsOfCustomer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postDetailsOfCustomer.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      console.log(payload);
    });
    builder.addCase(postDetailsOfCustomer.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    });
  },
});

export const detailsOfCustomer = detailsOfCustomerSlice.reducer;
