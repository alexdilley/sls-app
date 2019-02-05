import middy from 'middy';
import { cors, httpHeaderNormalizer } from 'middy/middlewares';

// Whitelist of frontend domains.
const origins = [
  process.env.ORIGIN,
  // Scripted requests from localhost can hit non-production stages *only*.
  ...(process.env.STAGE !== 'prod' ? ['http://localhost:8080'] : []),
];

const helloWorld = middy((event, context, cb) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  cb(null, response);
})
  .use(httpHeaderNormalizer())
  .use(cors({ origins, credentials: true }));

export { helloWorld };
