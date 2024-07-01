export interface Usuario {
  id: string; 
  username: string; 
  email: string;
  password: string;
  phone: string;
  address:{
    city: string;
    street: string;
    number: number;
    zipcode: string; 
  }  
}
   