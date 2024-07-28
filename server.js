import app from "./app.js";
import { connectDB } from "./config/database.js";
connectDB();

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });

app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(
    `server is working on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
  )
);
