const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  bio: "Web Developer | Tech Enthusiast | Coffee Lover",
  profilePicture: "https://via.placeholder.com/100",
};
const UserProfile = () => {
  const { name, email, bio, profilePicture } = user;
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-gray-700 mt-4">{bio}</p>
    </div>
  );
};

export default UserProfile;
