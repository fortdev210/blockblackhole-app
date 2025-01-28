interface NavbarProps {
  isAdmin?: boolean;
  username: string;
  logout: () => void;
}

export default function Navbar({ isAdmin, logout, username }: NavbarProps) {
  return (
    <div className="w-full h-12 bg-blue-700 text-white px-4 flex justify-between items-center ">
      <div className="flex">
        <span className="mx-2">Hello, I am {username}</span>
        {isAdmin && (
          <a href="/admin/dashboard" className="underline">
            Go to dashboard
          </a>
        )}
      </div>
      <p onClick={logout} className="cursor-pointer underline">
        Logout
      </p>
    </div>
  );
}
