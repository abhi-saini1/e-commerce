import prisma from '@/src/library/prismadb'
import getUserSession from "./getUserSession";

const GetCurrentUser = async () => {
  try {
    const session = await getUserSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
};

export default GetCurrentUser;