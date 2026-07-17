/**
 * 统一 API 请求层
 * 依赖：js/config.js（需在其后加载）
 */
(function () {
  const baseURL =
    (window.API_CONFIG && window.API_CONFIG.baseURL) ||
    "http://localhost:3000";

  const Auth = {
    getToken() {
      return localStorage.getItem("token");
    },
    getUserId() {
      return localStorage.getItem("user_id");
    },
    setSession(token, userId) {
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", String(userId));
    },
    clearSession() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
    },
    isLoggedIn() {
      return !!this.getToken();
    },
  };

  async function request(path, options = {}) {
    const { method = "GET", body, auth = false } = options;

    const headers = {
      "Content-Type": "application/json",
    };

    const token = Auth.getToken();
    if (token && (auth || options.sendToken)) {
      headers.Authorization = "Bearer " + token;
    }

    const res = await fetch(baseURL + path, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      data = {};
    }

    if (!res.ok) {
      throw new Error(data.msg || "请求失败 (" + res.status + ")");
    }

    return data;
  }

  const api = {
    register(username, password) {
      return request("/user/register", {
        method: "POST",
        body: { username, password },
      });
    },

    login(username, password) {
      return request("/user/login", {
        method: "POST",
        body: { username, password },
      });
    },

    getQuestions() {
      return request("/questions");
    },

    saveRecord(userId, questionId, isCorrect) {
      return request("/record", {
        method: "POST",
        body: {
          user_id: userId,
          question_id: questionId,
          is_correct: isCorrect,
        },
        sendToken: true,
      });
    },

    getDashboard(userId) {
      return request("/dashboard/" + userId);
    },

    getWrongQuestions(userId) {
      return request("/wrong/" + userId);
    },

    deleteWrong(id) {
      return request("/wrong/" + id, { method: "DELETE" });
    },

    masterWrong(id) {
      return request("/wrong/" + id, { method: "PUT" });
    },

    health() {
      return request("/health");
    },
  };

  window.Auth = Auth;
  window.api = api;
})();
