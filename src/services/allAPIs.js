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