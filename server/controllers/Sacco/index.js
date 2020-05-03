const { Login, Sacco, Riders } = require('../../models/data');
const bcrypt = require('bcrypt');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

exports.sacco = (req, res) => {
  Sacco.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
};

exports.riders = (req, res) => {
  Riders.find({}, (err, data) => {
    if (err) console.err(err);
    res.send(data);
  });
};

exports.newRider = (req, res) => {
  const {
    name,
    email,
    drivingLicense,
    dlIssueDate,
    dlExpDate,
    insNumber,
    insIssueDate,
    plateNumber,
    idNumber,
    // status:"Active",
    sacco,
    saccoId,
    phone,
    base,
    residence,
    motorbikeMake,
    motorbikeBrand,
    bikeOwnerID,
    bikeOwnerFname,
    bikeOwnerLname,
    bikeOwnerPhone,
    bikeOwnerResidence,
    password
  } = req.body;
  let errors;
  if (
    (name,
    !email ||
      !drivingLicense ||
      !dlIssueDate ||
      !dlExpDate ||
      !insNumber ||
      !insIssueDate ||
      !plateNumber ||
      !idNumber ||
      // status:"Active",
      !sacco ||
      !saccoId ||
      !phone ||
      !base ||
      !residence ||
      !motorbikeMake ||
      !motorbikeBrand ||
      !bikeOwnerID ||
      !bikeOwnerFname ||
      !bikeOwnerLname ||
      !bikeOwnerPhone ||
    !bikeOwnerResidence)
  ) {
    errors = 'Please fill all fields!';
  }
  if (password && password.length < 6) {
    errors = 'Password must be at least 6 characters';
  }

  if (errors) {
    res.send({ err: errors });
  } else {
    Login.findOne({ email: email }).then(rider => {
      if (rider) {
        errors = 'The rider already exists!';
        res.send({ err: errors });
      } else {
        const newMember = new Riders({
          name,
          email,
          drivingLicense,
          dlIssueDate,
          dlExpDate,
          insNumber,
          insIssueDate,
          plateNumber,
          idNumber,
          status: 'Active',
          sacco,
          saccoId,
          phone,
          base,
          residence,
          motorbikeMake,
          motorbikeBrand,
          bikeOwnerID,
          bikeOwnerFname,
          bikeOwnerLname,
          bikeOwnerPhone,
          bikeOwnerResidence
        });
        const newUser = new Login({
          email,
          password:"lakefire",
          phone,
          role: ['rider']
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => console.log('user Added!'))
              .catch(err => console.error(err));
            newMember
              .save()
              .then(user => {
                res.status(200).send('Sacco registered Successfully!');
              })
              .catch(err => {
                console.error(err.stack);
                res.send(
                  err.stack.includes('E11000')
                    ? { err: `Some details match existng Rider!` }
                    : { err: 'Internal Server Error!' }
                );
              });
          });
        });
      }
    });
  }
};
