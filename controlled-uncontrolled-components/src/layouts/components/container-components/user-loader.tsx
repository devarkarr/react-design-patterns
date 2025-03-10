import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface UserLoaderProps {
  children: ReactNode;
  resourceUrl: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  __v: number;
}
const UserLoader = ({ children, resourceUrl }: UserLoaderProps) => {
  const [user, setUser] = useState<User[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setUser(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
