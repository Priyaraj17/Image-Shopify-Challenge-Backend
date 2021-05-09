const fs = require("fs");
const images = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/images.json`)
);

exports.getAllImages = (req, res) => {
  res.status(200).json({
    status: "success",
    results: images.length,
    data: {
      images,
    },
  });
};

exports.createImage = (req, res) => {
  const newId = images[images.length - 1].id + 1;
  const newImage = Object.assign({ id: newId }, req.body);
  images.push(newImage);
  fs.writeFile("../images.json", JSON.stringify(images), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        image: newImage,
      },
    });
  });
};

exports.getImage = (req, res) => {
  const id = req.params.id * 1;
  const image = images.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      image,
    },
  });
};

exports.updateImage = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: "success",
    data: {
      image: "<Updated Image>",
    },
  });
};

exports.deleteImage = (req, res) => {
  res.status(204).json({
    status: "success",
    data: "null",
  });
};
