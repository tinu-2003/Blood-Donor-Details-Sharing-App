import { serverURL } from "./ServerURL";
import { commonAPI } from "./CommonAPI";

// add api call api call are used by "POST" method


export const regDonors = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/donors`,reqBody)
}

export const FindDonors = async()=>{
    return await commonAPI('GET',`${serverURL}/donors`,{})
}

// issue repots add

export const issueDonors = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/issue`,reqBody)
}

// Admin All users view

export const AllUsers = async()=>{
    return await commonAPI('GET',`${serverURL}/donors`,{})
}

// Admin All issuse  view

export const issueviewAdmin = async()=>{
    return await commonAPI('GET',`${serverURL}/issue`,{})
}

// Api for Userstatus update


export const updateUserStatus = async(id ,reqBody)=>{
    return await commonAPI('PUT',`${serverURL}/donors/${id}`,reqBody)
}

