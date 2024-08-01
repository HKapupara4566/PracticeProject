import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '@services/api';
import {
  getDeviceName,
  getDeviceUniqueId,
  getOSVersion,
} from '@services/globalFunction';
import {Platform} from 'react-native';

export interface Country {
  message: string;
  status: number;
  info: Info[];
}

export interface Info {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
}

interface Flags {
  svg: string;
  png: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}

export const getCountyDataAction = createAsyncThunk<Country>(
  'getCountyDataAction ',
  async (_, {rejectWithValue, fulfillWithValue}) => {
    try {
      const response = await axiosInstance.get('/users/get_country');
      const responseData: Country = response.data;
      return fulfillWithValue(responseData);
    } catch (e) {
      return rejectWithValue(e || 'Unable to fetch country data');
    }
  },
);

export interface UserInfo {
  id: number;
  primary_email: string;
  username: string;
  alias: string;
  colour_code: string;
  user_picture: string;
  alias_picture: string;
  alias_name: string;
  first_name: string;
  last_name: string;
  phone_country: string;
  phone: string;
  mobile_country: string;
  mobile: string;
  organization: string | null;
  mc_service: number;
  status: string;
  alias_status: string;
  mc_newsletter: number;
  gdpr_expiration: string | null;
  mc_marketing: number;
  mc_education: number;
  real_id_verified: number;
  real_id_verification_data: string | null;
  device_token: string;
  profile: string | null;
  work_place: string | null;
  work_role: string | null;
  dob: string | null;
  language: string;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  name: string;
  os_platform: string;
  os_platform_version: string;
  user_agent: string;
  platform: string;
  session_id: number;
  device_id: number;
}

// Define an interface for the main response object
export interface LoginResponse {
  message: string;
  status: number;
  jwt_token: string;
  device_id: string;
  info: UserInfo;
}

export const loginAction = createAsyncThunk(
  'loginAction',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, fulfillWithValue},
  ) => {
    const device_id = await getDeviceUniqueId();
    const device_name = await getDeviceName();
    const os_platform_version = await getOSVersion();
    const os_platform = Platform.OS;
    try {
      const signInResult = await axiosInstance.post(
        `/users/login`,
        {
          primary_email: email,
          os_platform,
          os_platform_version,
          user_agent: 'user_agent',
          device_name,
          type: 'mobile',
          password,
          device_id,
          language: 'english',
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = signInResult.data;
      return fulfillWithValue(responseData);
    } catch (e: any) {
      return rejectWithValue(e.message ?? 'Incorrect username or password.');
    }
  },
);

export const createAccountAction = createAsyncThunk(
  'createAccountAction',
  async ({email, password}: any, {rejectWithValue, fulfillWithValue}) => {
    const device_id = await getDeviceUniqueId();
    const device_name = await getDeviceName();
    const os_platform_version = await getOSVersion();
    const os_platform = Platform.OS;
    try {
      const signInResult = await axiosInstance.post(
        `/users/register`,
        {
          primary_email: email,
          os_platform,
          os_platform_version,
          user_agent: 'user_agent',
          device_name,
          type: 'mobile',
          password,
          device_id,
          device_token: 'device_token',
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = signInResult.data;
      return fulfillWithValue(responseData);
    } catch (e: any) {
      return rejectWithValue(e?.message ?? 'Something went wrong.');
    }
  },
);

export const updateProfileAction = createAsyncThunk(
  'updateProfileAction',
  async ({profileData}: any, {rejectWithValue, fulfillWithValue}) => {
    try {
      const signInResult = await axiosInstance.post(
        `users/update_profile`,
        {
          ...profileData,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = signInResult.data;
      return fulfillWithValue(responseData);
    } catch (e: any) {
      return rejectWithValue(e?.message ?? 'Something went wrong.');
    }
  },
);
