
const Project = require('../models/projects');
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

const seedProjects = async () => {
  await Project.deleteMany({});
  await Project.insertMany(sampleData);
};

module.exports = { seedProjects };
