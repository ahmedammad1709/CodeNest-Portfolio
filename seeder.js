const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create admin user
const createAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'maidasyed@gmail.com' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      process.exit();
    }

    await User.create({
      email: 'maidasyed@gmail.com',
      password: 'maida@123'
    });

    console.log('Admin user created successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete admin user
const deleteAdmin = async () => {
  try {
    await User.deleteOne({ email: 'maidasyed@gmail.com' });
    console.log('Admin user deleted successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Check command line arguments
if (process.argv[2] === '-c') {
  createAdmin();
} else if (process.argv[2] === '-d') {
  deleteAdmin();
} else {
  console.log('Please provide a valid command: -c to create admin, -d to delete admin');
  process.exit();
}