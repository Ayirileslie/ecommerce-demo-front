import { User } from '@/types';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock user database
const mockUsers: Record<string, { password: string; user: User }> = {
  'user@demo.com': {
    password: 'password',
    user: {
      id: '1',
      email: 'user@demo.com',
      fullName: 'Demo User',
      role: 'customer',
      createdAt: new Date().toISOString(),
    },
  },
  'admin@demo.com': {
    password: 'admin123',
    user: {
      id: '2',
      email: 'admin@demo.com',
      fullName: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
  },
};

// Mock Login
export async function mockLogin(
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  await delay(800); // Simulate API call

  const userData = mockUsers[email.toLowerCase()];

  if (!userData || userData.password !== password) {
    throw new Error('Invalid email or password');
  }

  // Generate mock JWT token
  const token = `mock-jwt-token-${Date.now()}-${userData.user.id}`;

  return {
    user: userData.user,
    token,
  };
}

// Mock Register
export async function mockRegister(
  fullName: string,
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  await delay(1000); // Simulate API call

  // Check if user already exists
  if (mockUsers[email.toLowerCase()]) {
    throw new Error('Email already registered');
  }

  // Create new user
  const newUser: User = {
    id: `user-${Date.now()}`,
    email: email.toLowerCase(),
    fullName,
    role: 'customer',
    createdAt: new Date().toISOString(),
  };

  // Store in mock database (only for current session)
  mockUsers[email.toLowerCase()] = {
    password,
    user: newUser,
  };

  // Generate mock JWT token
  const token = `mock-jwt-token-${Date.now()}-${newUser.id}`;

  return {
    user: newUser,
    token,
  };
}

// Mock Logout
export async function mockLogout(): Promise<void> {
  await delay(300);
  // In a real app, would invalidate token on server
}

// Validate Token (for future use)
export async function validateToken(token: string): Promise<User | null> {
  await delay(200);
  
  // In a real app, would verify JWT token
  // For demo, just check if token exists and is valid format
  if (token && token.startsWith('mock-jwt-token-')) {
    // Extract user from mock database
    // This is a simplified version
    return mockUsers['user@demo.com'].user;
  }
  
  return null;
}