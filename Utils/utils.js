const AWS = require("aws-sdk");
const uuid = require("uuid");
const multer = require("multer");

exports.fileDataMiddleware = (fileName) => {
  const storage = multer.memoryStorage();
  const uploads = multer({ storage });
  return uploads.array(fileName);
};

exports.upload2S3 = (data, fileName) => {
  const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
  const IAM_USER_KEY = process.env.IAM_USER_KEY;
  const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    //Bucket:BUCKET_NAME
  });

  var params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: data,
    ACL: "public-read",
  };

  return new Promise((resolve, reject) => {
    s3bucket.upload(params, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};

exports.uploadFileWithRandomName = async (req) => {
  const file = req.files[0];
  const fileName = uuid.v4() + "-" + file.originalname;
  const awsResponse = await this.upload2S3(file.buffer, fileName);

  return awsResponse.Location;
};
