function Sidebar({ showUserList, users, handleUserSelect }) {
  return (
    <div
      className={`w-full md:w-1/4 bg-gray-800 ${
        showUserList ? "block" : "hidden"
      } md:block`}
    >
      <div className="p-4">
        <form onSubmit={() => null} className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-gray-700 text-white rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              // value={searchTerm}
              onChange={(e) => {}}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {/* <Search className="h-5 w-5 text-gray-400" /> */}
              icon
            </button>
          </div>
        </form>
        <div className="space-y-2">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
              onClick={() => handleUserSelect(user)}
            >
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{user.name[0]}</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
