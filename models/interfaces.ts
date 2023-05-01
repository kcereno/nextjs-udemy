import { RequestStatus } from './types';

export interface IPost {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
}

export interface IPostData {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  content: any;
}

export interface IContactData {
  email: string;
  name: string;
  message: string;
}

export interface IContactDetails {
  email: string;
  name: string;
  message: string;
}

export interface INotificationData {
  status: RequestStatus;
  title: string;
  message: string;
}
