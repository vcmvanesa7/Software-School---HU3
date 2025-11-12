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
      color: #222;
      padding: 0;
      margin: 0;
    }

    .container {
      background: #fff;
      max-width: 600px;
      margin: 30px auto;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 15px rgba(138, 43, 226, 0.25);
      border: 2px solid #8A2BE2;
    }

    .header {
      background: linear-gradient(90deg, #8A2BE2, #5E1BA6);
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
    }

    .content h2 {
      color: #8A2BE2;
      margin-bottom: 15px;
    }

    .footer {
      background: #F8F6FF;
      text-align: center;
      font-size: 12px;
      padding: 12px;
      color: #555;
      border-top: 1px solid #E6E1FF;
    }

    .btn {
      display: inline-block;
      background: #8A2BE2;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      margin-top: 20px;
      font-weight: 600;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #5E1BA6;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:kirin-art-logo" alt="Kirin Art School Logo" />
      <h1>Welcome to Kirin Art School!</h1>
    </div>

    <div class="content">
      <h2>Your artistic journey begins here 🎨</h2>
      <p>
        Hello!!!, welcome to the <strong>Kirin Art School</strong> community! We're absolutely delighted to have you join us.
      </p>
      <p>
        Get ready to unleash your creativity and let your imagination flow! ✨  
        Every brushstroke tells a story — a story of growth, expression, and inspiration.  
        Let's make this journey as colorful and bright as your dreams. 🌈🖌️🎨
      </p>
      <a class="btn">Visit Our Website</a>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} Kirin Art School — All rights reserved.
    </div>
  </div>
</body>
</html>
`;
}
