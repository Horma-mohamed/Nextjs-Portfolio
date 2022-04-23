const path = require('path')

module.exports = {
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
    formats: ["image/webp"],
  },
}