window.SITE_CONFIG = window.SITE_CONFIG || {};
window.SITE_CONFIG.baseUrl = "https://mazen-ghzaly.github.io/home";
window.SITE_CONFIG.getUrl = function (path) {
  const normalizedPath = String(path || "").replace(/^\/+/, "");
  return normalizedPath ? `${this.baseUrl}/${normalizedPath}` : this.baseUrl;
};
