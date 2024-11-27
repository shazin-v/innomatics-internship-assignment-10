const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    console.log("Extracted token:", token);
    console.log("token       - ", token);
    if (!token) {
      return res.status(200).json({
        message: " hey hey hePlease Login...!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log("decoded", decoded);

      if (err) {
        console.log("error auth", err);
      }

      req.userId = decoded?._id;
      console.log("req.userId", req.userId);

      next();
    });
  } catch (err) {
    res.status(400).json({
      message: "catch error -" || err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
