const router = require("express").Router();
const Chat = require("../models/chat");

router.post("/createChat", async (req, res) => {
  const { members } = req.body;
  const chat = await Chat.create({ members });
  res.status(201).json(chat);
});

router.get("/getAllChats", async (req, res) => {
  const allChats = await Chat.find({ members: { $in: [req.userId] } });
  res.status(200).json(allChats);
});

module.exports = router;
