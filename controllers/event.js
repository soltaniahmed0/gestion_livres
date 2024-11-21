import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { name, startDate, endDate } = req.body;

  try {
    const newEvent = new Event({
      name,
      startDate,
      endDate,
    });

    await newEvent.save();
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
