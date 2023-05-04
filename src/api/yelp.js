import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer Md6rcKDWy8vfZHQAcSAfgqU1G7QYiC5gLKhF4C1CYeIQn-E_JWx2P0Z-KWroG-4M8gSXOTglFbVhogNtgsDPKJBrhOq9u_HJV0OwwOFby9Uael192mflxmdxVeBQZHYx`,
  },
});
