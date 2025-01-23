const router = require("express").Router();
const Message = require("../models/message");
const Chat = require("../models/chat");

router.post("/createMessage", async (req, res) => {
  const { text } = req.body;
  if (!text)
    return res.status(400).json({ message: "Please provide a message" });
  const message = await Message.create(req.body);

  await Chat.findOneAndUpdate(
    { _id: req.body.chatId },
    { lastMessage: message._id, $inc: { unReadMessages: 1 } },
    { new: true }
  );
  res.status(201).json(message);
});

router.get("/getMessages/:chatId", async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId }).sort({
    createdAt: 1,
  });
  res.status(200).json(messages);
});

module.exports = router;
