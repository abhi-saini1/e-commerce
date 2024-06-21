import GetCurrentUser from "../(auth)/actions/GetCurrentUser";
import { GetOrders } from "../actions/GetOrders";
import PageHeader from "@/src/components/PageHeader";
import UserProfile from "@/src/components/UserProfile";
import {User,Order} from '@/src/types/UserTypes'

const page: React.FC = async () => {
   const user: User | null = await GetCurrentUser();
  const orders: Order[] = user ? await GetOrders(user) : [];
  return (
    <>
    <section className="py-20">
      <PageHeader title="dashboard" curpage="dashboard"/>
        
        <UserProfile user={user} orders={orders}/>
      </section>
    </>
  );
};

export default page;
