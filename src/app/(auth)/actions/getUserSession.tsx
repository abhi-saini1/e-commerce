import { getServerSession } from "next-auth";
import { authOptions } from "@/src/utils/authOptions";

export default async function getUserSession(){
    return await getServerSession(authOptions);
}