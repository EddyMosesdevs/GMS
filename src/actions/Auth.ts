"use server";

import baseUrl from "@/utils/constant";

interface Data {
  email: string;
  password: string;
  name: string; // Required for both login and registration
}

// Function to login the user
export async function loginUser(data: Data) {
  try {
    const res = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the status is 200 (OK) - Success response
    if (res.status === 200) {
      const result = await res.json(); // Parse JSON response
      return result;
    }
    
    // Handle non-200 responses
    throw new Error(`Network issue: Received status code ${res.status}`);
  } catch (error) {
    console.error("Login error:", error); // Log error for debugging
    throw error; // Rethrow the error to be handled by the calling function
  }
}

// Function to register the user
export async function registerUser(data: Data) {
  try {
    const res = await fetch(baseUrl + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      const result = await res.json();
      console.log(result, "Registration success:", result.data);
      return result.data;
    }

    // Handle non-201 responses
    throw new Error("Network issue during registration");
  } catch (error) {
    console.log("Registration error:", error); // Log registration error
    throw error; // Rethrow to be handled by calling function
  }
}


export async function getAllUser(){
  const res = await fetch(baseUrl + "users",{
    method:"GET",
    headers:{
      "Content-Type": "application/json",
    },
  })
  console.log(res.status, res.body, "status")

  if(!res.ok){
    throw new Error('Something went Wrong');
  }

  const data = await res.json()
  return data.data;
}
