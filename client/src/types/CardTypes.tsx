export interface UserInput {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: string;
    company: string;
    role: string;
    photo?: any;
  }

  export interface CardTypes {
    photos: string;
    action: string;
    featured: boolean
    title: string;
    slug: string;
    bedrooms: number;
    bathrooms: number;
    landsize: number;
    price: number;
  }
  
export interface PropertyInput {
    photos: any[];
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    landsize: number;
    carpark: number;
    location: {
      type: string;
      cordinates: number[];
    };
    title: string;
    slug: string;
    description: any;
    sold: boolean;
    googleMap: {};
    type: string;
    action: string;
    view: number;
  }
  
  