import express from "express";

import Contact from "../models/ContactModel.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(201).json({ mgs: "Pesan terkirim" });
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
