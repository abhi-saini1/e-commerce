import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default async function getUserSession(){
    return await getServerSession(authOptions);
}