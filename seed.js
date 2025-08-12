const connectDB = require('../config/db');
const { seedProjects } = require('../services/seedService');

const seedData = async () => {
  await connectDB();

  try {
    await seedProjects();
    console.log("Sample data inserted");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

seedData();
