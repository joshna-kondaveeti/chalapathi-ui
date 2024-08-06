const mongoose = require("mongoose")
mongoose.pluralize(null)
const UserSchema = mongoose.Schema({
    tname: String,
    tid:Number,
    tage:Number,
    taddress:String,
    temail:String,
    tphone:Number,
    tdob:Date,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Topper', UserSchema);