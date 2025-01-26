import { useState } from "react";

function Rightbar({ showUserList, selectedUser, setShowUserList }) {
  const messages = [
    {
      id: "1",
      sender: "Alice",
      content: "Hey, how are you?",
      timestamp: "10:00 AM",
    },
    {
      id: "2",
      sender: "You",
      content: "I'm good, thanks! How about you?",
      timestamp: "10:05 AM",
    },
    {
      id: "3",
      sender: "Alice",
      content: "Doing well, thanks for asking!",
      timestamp: "10:10 AM",
    },
  ];
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    // Logic to send message
    setMessage("");
  };
  return (
    <div
      className={`w-full md:w-3/4 flex flex-col bg-gray-900 ${
        showUserList ? "hidden" : "flex"
      } md:flex`}
    >
      {selectedUser ? (
        <>
          <div className="bg-gray-800 p-4 flex items-center space-x-3">
            <button
              className="md:hidden text-white"
              onClick={() => setShowUserList(true)}
            >
              {/* <ArrowLeft className="h-6 w-6" /> */}||
            </button>
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {selectedUser.name[0]}
              </span>
            </div>
            <h2 className="text-white font-semibold">{selectedUser.name}</h2>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs ${
                    msg.sender === "You" ? "bg-indigo-500" : "bg-gray-700"
                  } rounded-lg p-3`}
                >
                  <p className="text-white">{msg.content}</p>
                  <p className="text-xs text-gray-300 mt-1">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="bg-gray-800 p-4 flex space-x-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-md p-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* <Send className="h-5 w-5" /> */}||
            </button>
          </form>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Select a user to start chatting
          </p>
        </div>
      )}
    </div>
  );
}
export default Rightbar;
