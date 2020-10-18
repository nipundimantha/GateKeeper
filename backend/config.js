import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://user:123@electronttm.zal8h.mongodb.net/CSSE5?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AYmeqqeXWw76DHg5YTJ2Erio54wZDX9WLWnDArSBXaBWn46y9MFaJ8dqvU1cmViiZrsIT0yMakV6qhzb',
  accessKeyId: process.env.accessKeyId || 'access_token$sandbox$8nkh8gxf5mydc5rw$a9cd8a2e032e6d3c50289ad503e94340',
  secretAccessKey: process.env.secretAccessKey || 'EEJyeinmdmaR_7VwduZpX5oVl9qhj5UZfo16VhdTptRUQsjv0tBUF208NbhXVJqtj_QNAZVRJNsxVJxJ',
};

// export default {​​​​​​​
//   PORT: process.env.PORT || 5000,
//   MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://user:123@electronttm.zal8h.mongodb.net/gate_keeper?retryWrites=true&w=majority',
//   JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
//   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
//   accessKeyId: process.env.accessKeyId || 'accessKeyId',
//   secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
// }​​​​​​​;