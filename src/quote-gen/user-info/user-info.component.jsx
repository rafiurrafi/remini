const UserInfo = ({ user: { name, email, phone } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserInfo;
