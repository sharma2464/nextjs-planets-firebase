// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  // console.log("req", req);
  res.status(200).json({ name: 'Hello, world!', req: req.headers });
};
