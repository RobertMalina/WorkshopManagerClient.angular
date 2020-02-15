export const config = {
  server: 'localhost',
  apiPrefix: '/api',
  port: 4210,
  getApiUrl() {
    return `http://${this.server}:${this.port}${this.apiPrefix}`;
  }
};
