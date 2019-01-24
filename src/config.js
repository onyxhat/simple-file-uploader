const dotenv = require('dotenv');
dotenv.config();

//Read from ENV or set defaults
const PORT = process.env.PORT || 8000;
const UPLOAD_DIR = process.env.UPLOAD_DIR || '/app/uploads';
const S3_ENABLED = process.env.S3_KEY || false;
const S3_KEY = process.env.S3_KEY || '';
const S3_SECRET =  process.env.S3_SECRET || '';
const S3_BUCKET =  process.env.S3_BUCKET || '';

module.exports = {
  port: PORT,
  s3: {
    key: S3_KEY,
    secret: S3_SECRET,
    bucket: S3_BUCKET
  },
  s3_enabled: S3_ENABLED,
  upload_dir: UPLOAD_DIR
};
