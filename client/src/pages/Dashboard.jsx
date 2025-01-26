import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
function Dashboard() {
  const users = [
    { id: "1", name: "Alice", lastMessage: "Hey, how are you?" },
    { id: "2", name: "Bob", lastMessage: "Can we meet tomorrow?" },
    { id: "3", name: "Charlie", lastMessage: "Thanks for your help!" },
  ];
  const [showUserList, setShowUserList] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setShowUserList(false);
  };
  return (
    <div className="flex h-[91%] bg-gray-900">
      <Sidebar
        {...{
          showUserList,
          users,
          handleUserSelect,
        }}
      />
      <Rightbar
        {...{ showUserList, selectedUser, handleUserSelect, setShowUserList }}
      />
    </div>
  );
}
export default Dashboard;
