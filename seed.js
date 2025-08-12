const connectDB = require('./config/db');
const Project = require('./models/projects');

const sampleData = [
  {
    title: "Pattern 1",
    image: "images/image1.jpg",
    link: "About Pattern 1",
    description: "A touch of beauty",
  },
  {
    title: "Pattern 2",
    image: "images/image2.jpg",
    link: "About Pattern 2",
    description: "A touch of Life",
  },
  {
    title: "Pattern 3",
    image: "images/image3.jpg",
    link: "About Pattern 3",
    description: "A touch of imagination",
  },
];

const seedData = async () => {
  await connectDB();

  try {
    await Project.deleteMany({});
    await Project.insertMany(sampleData);
    console.log("Sample data inserted");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

seedData();