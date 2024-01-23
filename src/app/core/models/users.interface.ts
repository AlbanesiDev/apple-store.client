export interface UsersInterface {
  id:        number;
  role:      string;
  token:     string;
  name:      string;
  email:     string;
  password:  string;
  phone?:     string;
  card?:      string;
  address?:   Address;
  favorites?: Favorite[];
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Favorite {
  id:       number;
  model:    string;
  category: string;
  image:    string;
  link:     string;
}
