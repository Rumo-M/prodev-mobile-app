// Property interface
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: any; // local require() or remote URL string
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number; // in square meters
}

// User interface (for auth)
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // only for local use; never store plain passwords in production
  avatar?: any;
}

// Optional: for messages/inbox
export interface Message {
  id: string;
  fromUserId: string;
  toUserId: string;
  content: string;
  timestamp: string;
}
