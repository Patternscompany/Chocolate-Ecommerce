


const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/send-order-confirmation", async (req, res) => {
  const { name, email, cart, totalPrice, paymentId } = req.body;

  const adminEmail = "pandureddypatterns@gmail.com"; // Replace with actual admin email

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pandureddypatterns@gmail.com", // Replace with your email
      pass: "ahyg lifr qvvp qkpr", // Replace with your app password
    },
  });

  const userMailOptions = {
    from: "pandureddypatterns@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: `<h2>Thank you for your order, ${name}!</h2>
           <p>Your payment was successful. Payment ID: ${paymentId}</p>
           <p>Total Amount: ₹${totalPrice}</p>
           <p>Items:</p>
           <ul>${cart.map(item => `<li>${item.name} - ₹${item.price} x ${item.quantity}</li>`).join("")}</ul>`,
  };

//   const adminMailOptions = {
//     from: "your-email@gmail.com",
//     to: adminEmail,
//     subject: "New Order Received",
//     html: `<h2>New Order Received</h2>
//            <p>Customer: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Payment ID: ${paymentId}</p>
//            <p>Total Amount: ₹${totalPrice}</p>
//            <p>Items:</p>
//            <ul>${cart.map(item => `<li>${item.name} - ₹${item.price} x ${item.quantity}</li>`).join("")}</ul>`,
//   };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.json({ message: "Order confirmation email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send order confirmation email." });
  }
});

module.exports = router;
