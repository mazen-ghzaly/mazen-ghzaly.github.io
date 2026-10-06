(function () {
  const origin = window.location.origin || 'https://mazen-ghzaly.github.io';
  const rawPath = window.location.pathname || '/';
  const basePath = rawPath.startsWith('/quran') ? '/quran' : '';
  const baseUrl = (origin + basePath).replace(/\/$/, '');

  window.SITE_CONFIG = {
    baseUrl: baseUrl || origin,
    getUrl: function (path) {
      if (!path) return this.baseUrl || '/';
      if (/^https?:\/\//i.test(path)) return path;
      const normalized = String(path).replace(/^\/+/, '');
      return `${this.baseUrl || ''}/${normalized}`.replace(/([^:]\/)\/+/, '$1');
    }
  };
})();
