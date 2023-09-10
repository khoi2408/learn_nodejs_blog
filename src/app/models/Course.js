const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name', unique: true },
  videoId: { type: String, required: true, maxLength: 255 },
}, {
  timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, { 
  overrideMethods: 'all',
  deletedAt : true
});

module.exports = mongoose.model('Course', Course);
