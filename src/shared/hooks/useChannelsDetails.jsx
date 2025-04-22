import { useState } from "react";
import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    
    const [channelDetails, setChannelDetails] = useState();

    const getChannelDetails = async (id) => {

        const responseData = await getChannelDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || "Error Al Cargar La Informacion Del Canal"
            )
        }

        setChannelDetails(responseData)
    } 

    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}