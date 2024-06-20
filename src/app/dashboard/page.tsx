import GetCurrentUser from "@/app/(auth)/actions/GetCurrentUser";
import { GetOrders } from "@/app/actions/GetOrders";
import PageHeader from '@/components/PageHeader'
import UserProfile from "@/components/UserProfile";
import {User,Order} from '@/types/UserTypes'

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
