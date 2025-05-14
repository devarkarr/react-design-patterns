// Partial Component: UserAvatar
function UserAvatar({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <div>
      <img
        src={avatarUrl}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h3>{name}</h3>
    </div>
  );
}

// Partial Component: UserDetails
function UserDetails({ email, phone }: { email: string; phone: string }) {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

// Main Component: UserProfile
function UserProfile({
  user,
}: {
  user: { name: string; avatarUrl: string; email: string; phone: string };
}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <UserAvatar avatarUrl={user.avatarUrl} name={user.name} />
      <UserDetails email={user.email} phone={user.phone} />
    </div>
  );
}

// Usage
function PartialComponent() {
  const user = {
    name: "John Doe",
    avatarUrl: "https://via.placeholder.com/150",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  return <UserProfile user={user} />;
}

export default PartialComponent;
