// IMPORT nodemailer
const nodemailer = require("nodemailer");

// GET URL
export async function GET(req: Request) {
  return new Response("hello");
}

// POST URL
export async function POST(req: Request, res: Response) {
  const data = await req.json();

  // SMTP config
  let transporter = await nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: "support@adrofx.live",
      pass: "Adrofx_GT11",
    },
  });

  // send mail
  await transporter.sendMail({
    from: "support@adrofx.live",
    to: data.email,
    subject: "welcome to AdroFx",
    html: `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-family: 'Cabin',sans-serif; font-size: 14px; line-height: 200%; text-align: left; word-wrap: break-word;">
    <div>
<p style="line-height: 200%;"><strong>Dear Valued  Client,    </strong></p>
</div>
<p style="line-height: 200%;">­</p>
<div>
<p style="line-height: 200%;">We trust this message finds you well and thriving in your forex trading. At AdroFx, we're dedicated to enhancing your trading experience, and we're thrilled to bring you the exciting news that's bound to elevate your journey with us.</p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;"><strong>Introducing Our Cashback Program: Turning Your Trades into Rewards!</strong></p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;">We understand that forex trading is about performance and achievements also celebrating your dedication and achievements. That's why we proudly present our exclusive Cashback Program – a powerful way to earn while you trade.    <br /> </p>
<p style="line-height: 200%;"><strong>How Does It Work?</strong></p>
<p style="line-height: 200%;">It's simple:</p>
<p style="line-height: 200%;"><strong>1. Trade Freely:</strong> Continue to trade as you always have, exploring the dynamic forex markets with complete freedom.</p>
<p style="line-height: 200%;"><strong>2. Accumulate Lots:</strong> Your trading activity will accumulate lots, a testament to your commitment and expertise.</p>
<p style="line-height: 200%;"><strong>3. Watch Your Rewards Grow:</strong> Witness your rewards grow exponentially as you hit key milestones. Our Cashback Program features a three-tier structure that acknowledges your efforts in a big way.    </p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;"><strong>Cashback Structure:</strong><br /><strong>*10 - 1,000 Lots:</strong> Earn a generous 5% cashback from your spread for trading between 10 to 1,000 lots. </p>
<p style="line-height: 200%;"><br /><strong>*1,000 - 3,000 Lots:</strong> Level up your earnings with a remarkable 10% cashback from your spread for trading between 1,000 to 3,000 lots. </p>
<p style="line-height: 200%;"><br /><strong>*More Than 3,000 Lots:</strong> For the true trading maestros among us, enjoy a fantastic 15% cashback from your spread for trading more than 3,000 lots.</p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;"> <strong>Why AdroFx Cashback?</strong><br /><strong>- Transparency:</strong> We pride ourselves on transparent cashback calculations, ensuring you receive what you've rightfully earned.<br /><strong>- No Hidden Terms: </strong>We keep it simple – there are no hidden conditions. Just trade, earn, and enjoy!<br /><strong>- Suitable for All Traders:</strong> Whether you're a seasoned trader or just starting out, our Cashback Program is designed to benefit everyone.<br /><strong>- Boost Your Profits:</strong> Cashback isn't just a reward; it's a way to amplify your trading profits and make every trade count.</p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;">Trade more, earn more, and unlock your trading potential with AdroFx Cashback Program. Your success is our priority, and your rewards await.</p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;">Should you have any questions or need assistance with getting started, our dedicated support team is here to help. Feel free to reach out to us at <a rel="noopener" href="mailto:support@adrofx.com" target="_blank">support@adrofx.</a>live or via<a rel="noopener" href="https://r.sender.adrofx.com/mk/cl/f/sh/1t6Af4OiGsDg0irXfOA3MQieLD2skN/hCPZZnXRtg3S" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://r.sender.adrofx.com/mk/cl/f/sh/1t6Af4OiGsDg0irXfOA3MQieLD2skN/hCPZZnXRtg3S&amp;source=gmail&amp;ust=1700139306990000&amp;usg=AOvVaw3ApsedHix6ioN1MhY6tqkn"> live chat</a></p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;">Thank you for choosing AdroFx for your forex trading journey. We look forward to celebrating your successes together with our Cashback Program!</p>
<p style="line-height: 200%;"> </p>
<p style="line-height: 200%;">Happy Trading!</p>
<p style="line-height: 200%;">Warm regards,<br />AdroFx Team<br /> </p>
</div>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>

`,
  });

  // confirmation
  return new Response("email sent");
}
