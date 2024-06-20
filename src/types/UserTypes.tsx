
  
  export interface Product {
    id: string;
    name: string;
    size: string;
    quantity: number;
    image?: string;
  }
  export interface User {
    id: string | null;
    name: string | null;
    email: string | null;
    image: string | null;
    hashedPassword: string | null;
  }
  
  export interface Order {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    status: string;
    createdDate: Date;
    paymentIntentID?: string | null;
    items: OrderItem[];
  }

  export interface OrderItem {
    id: string;
    orderId: string;
    name: string;
    quantity: number;
    price: number;
    image?: string | null;
    size: string | null;
  }