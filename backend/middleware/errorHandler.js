/**
 * 统一错误响应中间件（放在所有路由之后）
 */
function errorHandler(err, req, res, next) {
  console.error("[API Error]", err.message || err);

  const status = err.status || 500;
  res.status(status).json({
    msg: err.message || "服务器内部错误",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}

/**
 * 404 处理
 */
function notFoundHandler(req, res) {
  res.status(404).json({ msg: `接口不存在: ${req.method} ${req.path}` });
}

module.exports = { errorHandler, notFoundHandler };
