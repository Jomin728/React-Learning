import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Faker } from "@faker-js/faker";
const addUser = createAsyncThunk('users/add',async() => {
  const response = await axios.post('http://localhost:3005/users',
    {
     name:Faker.name.fullName()
    }
  )
  return response.data;
})

export {addUser}