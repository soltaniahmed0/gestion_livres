import Joi from "joi";

const eventValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required().greater(Joi.ref("startDate")).messages({
    "date.greater": "La date de fin doit être après la date de début",
  }),
});

const validateEvent = (req, res, next) => {
  const { error } = eventValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validateEvent;
