const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const { Login, Sacco, Riders, Messages } = require('../../models/data');

exports.register = (req, res) => {
  const { name, email, password, phone } = req.body;
  const role = ['admin'];
  const newAdmin = new Login({
    name,
    email,
    password,
    phone,
    role
  });
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        console.log(err);
      }
      newAdmin.password = hash;
      newAdmin.save({}, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.status(200).json({ data });
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  Login.findOne({ email: email }, (err, data) => {
    if (err) throw err;
    bcrypt.compare(password, data.password, function(err, result) {
      if (err) throw err;
      res.status(200).send(data);
    });
  });
};

exports.dashboard = (req, res) => {
  Riders.find({ reports: { $lte: 10 } }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};

exports.newSacco = (req, res) => {
  const {
    name,
    saccoCode,
    address,
    postal_code,
    registration_number,
    phone,
    location,
    date_founded,
    description,
    website,
    created,
    saccoleaderFname,
    saccoleaderLname,
    saccoleaderPhone,
    status,
    email,
    password
  } = req.body;

  let errors;
  if (
    !name ||
    !email ||
    !password ||
    !address ||
    !postal_code ||
    !registration_number ||
    !phone ||
    !location ||
    !date_founded ||
    !website ||
    !created ||
    !saccoleaderFname ||
    !saccoleaderLname ||
    !saccoleaderPhone
  ) {
    errors = 'Please enter all fields';
  }

  if (password && password.length < 6) {
    errors = 'Password must be at least 6 characters';
  }

  if (errors) {
    res.send({ err: errors });
  } else {
    Sacco.findOne({ email: email }).then(user => {
      if (user) {
        errors = 'The Sacco already exists!';
        res.send({ err: errors });
      } else {
        const newSacco = new Sacco({
          name,
          saccoCode,
          address,
          postal_code,
          registration_number,
          phone,
          location,
          date_founded,
          description,
          website,
          created,
          saccoleaderFname,
          saccoleaderLname,
          saccoleaderPhone,
          status,
          email
        });
        const newUser = new Login({
          password,
          email,
          phone,
          name,
          role: ['sacco']
        });
        //Send email(sendgrid)
        sgMail.setApiKey(process.env.SG_KEY);
        const msg = {
          to: [email],
          from: 'admin@fikasafe.com',
          subject: 'Your Fika Safe Logins',
          html:
            `<strong>Thank you for registering with Fika Safe. Your login credentials are:<br><br>` +
            `Email: ${email}<br>Passowrd: ${password}</strong>`
        };
        sgMail.send(msg);

        //Hash password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => console.log('user Added!'))
              .catch(err => console.error(err));
            newSacco
              .save()
              .then(user => {
                res.status(200).send('Sacco registered Successfully!');
              })
              .catch(err => {
                console.error(err.stack);
                res.send(
                  err.stack.includes('E11000')
                    ? { err: `Some details match existng Sacco!` }
                    : { err: 'Internal Server Error!' }
                );
              });
          });
        });
      }
    });
  }
};

exports.saccos = (req, res) => {
  Sacco.find()
    .exec()
    .then(sacco => {
      return Riders.find().then(rider =>
        res.send({ sacco: sacco, rider: rider })
      );
    })
    .catch(err => console.log(err.msg));
};

exports.messages = (req, res) => {
  Messages.find({}, (err, data) => {
    if (err) {
      res.send({ err: 'error getting the messages' });
    }
    res.send(data);
  });
};

exports.clearNotifications = (req, res) => {
  Messages.updateMany({ 'action.new': true }, { 'action.new': false })
    .then(data => res.send('notifications cleared!'))
    .catch(err => console.error(err.stack));
};
