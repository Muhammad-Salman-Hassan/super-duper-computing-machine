"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUserbyid = exports.getUser = void 0;
const userSchema_1 = require("./userSchema");
// GetMethod
let getUser = (req, res) => {
    const userdata = userSchema_1.User.find((err, users) => {
        if (err) {
            return res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
exports.getUser = getUser;
let getUserbyid = (req, res) => {
    const usersbyid = userSchema_1.User.findById(req.params.id, (err, users) => {
        if (err) {
            return res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
exports.getUserbyid = getUserbyid;
//put method
let addUser = (req, res) => {
    let user = new userSchema_1.User(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.addUser = addUser;
let updateUser = (req, res) => {
    userSchema_1.User.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Updated Sucessfully");
        }
    });
};
exports.updateUser = updateUser;
let deleteUser = (req, res) => {
    userSchema_1.User.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Delete success full");
        }
    });
};
exports.deleteUser = deleteUser;
