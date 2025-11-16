import { useAuth } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";

const Home = () => {
  const { user } = useAuth();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const userData = {
    name:
      `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
      user?.username,
    email: user?.email,
    bio: "React Developer | Coffee Enthusiast ☕️",
    avatar: "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
    coverPhoto:
      "https://plus.unsplash.com/premium_photo-1671229456411-659ff6049231?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    joined: "November 2025",
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Cover Photo */}
      <div className="relative h-64 bg-linear-to-r from-primary to-secondary">
        <img
          src={userData.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Avatar */}
          <div className="avatar absolute -top-16 left-4">
            <div className="w-32 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2">
              <img src={userData.avatar} alt={userData.name} />
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="pt-20 pb-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h1 className="card-title text-3xl">{userData.name}</h1>
                    <p className="text-base-content/70">{userData.email}</p>
                    <p className="mt-2">{userData.bio}</p>
                    <p className="text-sm text-base-content/50 mt-1">
                      Joined {userData.joined}
                    </p>
                  </div>
                  <button
                    className="btn btn-error"
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                  >
                    {logoutMutation.isPending ? "Logging out..." : "Logout"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
