interface UserInfoProps {
  user?: {
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
  };
}
const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <ul>
      <li>{user?.id}</li>
      <li>{user?.username}</li>
      <li>{user?.email}</li>
      <li>{user?.password}</li>
    </ul>
  );
};

export default UserInfo;
