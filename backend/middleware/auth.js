const jwt = require("jsonwebtoken");
const config = require("../config");

/**
 * 必须携带有效 JWT，否则返回 401
 */
function verifyToken(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ msg: "未登录或令牌无效" });
  }

  try {
    req.user = jwt.verify(token, config.jwtSecret);
    next();
  } catch {
    return res.status(401).json({ msg: "令牌已过期或无效" });
  }
}

/**
 * 可选 JWT：有 token 则解析到 req.user，无 token 也放行（兼容现有前端）
 */
function optionalToken(req, res, next) {
  const token = extractToken(req);

  if (token) {
    try {
      req.user = jwt.verify(token, config.jwtSecret);
    } catch {
      // 无效 token 不阻断，保持向后兼容
    }
  }

  next();
}

function extractToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const [scheme, token] = authHeader.split(" ");
  return scheme === "Bearer" ? token : null;
}

module.exports = { verifyToken, optionalToken };
