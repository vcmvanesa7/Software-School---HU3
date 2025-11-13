export function createEmailTemplate() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email from Kirin Art School</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #F8F6FF;
      color: #ededed;
      padding: 0;
      margin: 0;
    }

    .container {
      background: #050a22; /* --bluedark */
      max-width: 600px;
      margin: 30px auto;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
      border: 2px solid #BCA16A; /* --gold */
    }

    .header {
      background: linear-gradient(90deg, #0b255c, #050a22); /* blue → bluedark */
      color: #fff;
      padding: 25px;
      text-align: center;
    }

    .header img {
      width: 260px;
      margin-bottom: 12px;
    }

    .content {
      padding: 25px 30px;
      font-size: 16px;
      line-height: 1.7;
      text-align: center;
      color: #ededed;
    }

    .content h2 {
      color: #BCA16A; /* gold */
      margin-bottom: 15px;
    }

    .footer {
      background: #050a22; /* bluedark */
      text-align: center;
      font-size: 12px;
      padding: 12px;
      color: #aaa;
      border-top: 1px solid #BCA16A; /* gold */
    }

    .btn {
      display: inline-block;
      background: #050a22; /* bluedark */
      color: #BCA16A; /* gold */
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      margin-top: 20px;
      font-weight: 600;
      border: 1px solid #BCA16A;
      transition: all 0.3s ease;
    }

    .btn:hover {
      background: #BCA16A;
      color: #050a22;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:imagotipo.png" alt="Kirin Art School Logo" />
      <h1>Welcome to Kirin Art School!</h1>
    </div>

    <div class="content">
      <h2>Your Artistic Journey Begins Here </h2>
      <p>
        Hello!!!, welcome to the <strong>Kirin Art School</strong> community! We're absolutely delighted to have you join us.
      </p>
      <p>
        Get ready to unleash your creativity and let your imagination flow! ✨  
        Every brushstroke tells a story — a story of growth, expression, and inspiration.  
        Let's make this journey as colorful and bright as your dreams. 🌈🖌️🎨
      </p>
      <a class="btn" href="https://kirinartschool.com">Visit Our Website</a>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} Kirin Art School — All rights reserved.
    </div>
  </div>
</body>
</html>
`;
}
