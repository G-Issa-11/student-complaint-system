const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { adminPassword } = require('../config');


// Define the admin schema
const adminSchema = new mongoose.Schema({
  username: String,
  passwordHash: String
});

// Hash the admin password before saving to the database
adminSchema.pre('save', async function(next) {
  const admin = this;
  if (!admin.isModified('passwordHash')) {
    return next();
  }
  const salt = await bcrypt.genSalt();
  admin.passwordHash = await bcrypt.hash(admin.passwordHash, salt);
  next();
});


const Admin = mongoose.model('Admin', adminSchema);

// Wrap the code inside an async function
(async () => {
  try {
    // Check if the admin user already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create a new admin instance with the hashed password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(adminPassword, salt);
    const admin = new Admin({
      username: 'admin',
      passwordHash: passwordHash
    });

    // Save the admin to the database
    await admin.save();

    console.log('Admin user created successfully');
  } catch (err) {
    console.error(err);
  } finally {
    // Disconnect from MongoDB when done
    mongoose.disconnect();
  }
})();



module.exports = Admin ;
