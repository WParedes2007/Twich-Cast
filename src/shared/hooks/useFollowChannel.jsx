import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../services";

export const useFollowChannel = () => {

    const followChannel = async (channelId, onSuccess) => {

        const responseData = await followChannelRequest(channelId);

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || "Ocurrio Un Error Al Seguri El Canal"
            )
        }

        toast.success("Channel Followed Succesfully")
        onSuccess(true)
    }

    return{
        followChannel
    }
}