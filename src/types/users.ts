export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface IErrorUser {
  message: string;
  documentation_url: string;
}

export interface ILocalUser {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  repos: number;
  followers: number;
  following: number;
  created: string;
}
