const mongoose = require("mongoose");
console.log("employee");
const employerSchema = mongoose.Schema({
  employerID: {
    type: Number,
    required: true,
  },
  employerName: {
    type: String,
    /*required: true,*/
  },
  website: {
    type: String,
    /*required: true,*/
  },
  companyType: {
    type: String,
    /*required: true,*/
  },
  aboutTheCompany: {
    revenue: {
      type: Number,
      /*required: true,*/
    },
    headQuarters: {
      type: String,
      /*required: true,*/
    },
    industry: {
      type: String,
      /*required: true,*/
    },
    founded: {
      type: Number,
      /*required: true,*/
    },
    misssionandvisson: {
      type: String,
      /*required: true,*/
    },
    ceo: {
      type: String,
      /*required: true,*/
    },
    description: {
      type: String,
      /*required: true,*/
    },
    companySize: {
      type: Number,
      /*required: true,*/
    },
    workCulture: {
      type: String,
    },
    companyValues: {
      type: String,
    },
  },
  photos: [
    {
      path: {
        type: String,
        /*required: true,*/
      },
      status: {
        type: String,
        /*required: true,*/
      },
    },
  ],
  Views: [
    {
      date: {
        type: Date,
        default: Date.now(),
      },
      count: {
        type: Number,
        /*required: true,*/
      },
    },
  ],
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

const Employer = mongoose.model("Employer", employerSchema);
module.exports = Employer;
