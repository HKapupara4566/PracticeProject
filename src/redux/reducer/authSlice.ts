import {
  Country,
  createAccountAction,
  getCountyDataAction,
  loginAction,
  LoginResponse,
  updateProfileAction,
} from '@redux/actions/authActions';
import {createSlice} from '@reduxjs/toolkit';

export interface ICountry {
  isLoading: boolean;
  countries: Country;
  error: string;
  loginData: LoginResponse;
}

const initialState: ICountry = {
  isLoading: false,
  countries: {
    message: '',
    status: 0,
    info: [],
  },
  error: '',
  loginData: {
    message: '',
    status: 0,
    jwt_token: '',
    device_id: '',
    info: {
      id: 0,
      primary_email: '',
      username: '',
      alias: '',
      colour_code: '',
      user_picture: '',
      alias_picture: '',
      alias_name: '',
      first_name: '',
      last_name: '',
      phone_country: '',
      phone: '',
      mobile_country: '',
      mobile: '',
      organization: null,
      mc_service: 0,
      status: '',
      alias_status: '',
      mc_newsletter: 0,
      gdpr_expiration: null,
      mc_marketing: 0,
      mc_education: 0,
      real_id_verified: 0,
      real_id_verification_data: null,
      device_token: '',
      profile: null,
      work_place: null,
      work_role: null,
      dob: null,
      language: '',
      is_visible: false,
      created_at: '',
      updated_at: '',
      createdAt: '',
      updatedAt: '',
      type: '',
      name: '',
      os_platform: '',
      os_platform_version: '',
      user_agent: '',
      platform: '',
      session_id: 0,
      device_id: 0,
    },
  },
};

const AUTH_SLICE = 'authSlice';

const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCountyDataAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCountyDataAction.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(getCountyDataAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(loginAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginData = action.payload;
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(createAccountAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(createAccountAction.fulfilled, (state, action) => {
        state.loginData = action.payload;
        state.isLoading = false;
      })
      .addCase(createAccountAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateProfileAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfileAction.fulfilled, (state, action) => {
        state.loginData.info = action.payload.info;
        state.isLoading = false;
      })
      .addCase(updateProfileAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {logout} = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
