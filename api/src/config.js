export default {
  port: process.env['PORT'] || 5000,
  database: {
    url: process.env['DATABASE_URL']
  }
}