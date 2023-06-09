import cors from "cors";

export const corsOptions = {
  origin: [
    "https://jc-project.vercel.app/",
    "https://postutmeportal.com.ng",
    "postutmeportal.com.ng",
    "http://localhost:5173",
  ],
  optionsSuccessStatus: 200,
};