const router = require('express').Router();
require('dotenv').config();
const { Sacco, Riders, Messages } = require('../models/data');

router.post('/sms', (req, res) => {
  let { from, text } = req.body;
  let phoneNumber = from;
  Riders.findOne({ plateNumber: text })
    .then(data => {
      let reply;
      if (!data) {
        reply = 'The rider requested is not registered.';
      } else if (data) {
        const { name, plateNumber, sacco } = data;
        reply = `The Rider ${name} is registerd with ${sacco}`;
      }
      const credentials = {
        apiKey: process.env.AT_KEY,
        username: 'Sandbox'
      };

      // Initialize the SDK
      const AfricasTalking = require('africastalking')(credentials);

      // Get the SMS service
      const sms = AfricasTalking.SMS;

      function sendMessage() {
        const options = {
          // Set the numbers you want to send to in international format
          to: phoneNumber,
          // Set your message
          message: reply
          // Set your shortCode or senderId
          //   from: 'XXYYZZ'
        };

        // That’s it, hit send and we’ll take care of the rest
        sms
          .send(options)
          .then(console.log)
          .catch(console.log);
      }

      const newMessage = new Messages({
        from: phoneNumber,
        text: text,
        time: new Date(),
        action: { new: true, read: false },
        sacco: !data ? '' : data.sacco
      });
      newMessage
        .save()
        .then(() => {
          sendMessage();
          res.status(200).send('ok!');
        })
        .catch(err => console.log(err));
    })

    .catch(err => console.log(err));
});

module.exports = router;
