const User = require('../model/User');
//import * as user from '../model/User.js'
//하나 씩 보고싶을 때 * as


//exports. 를 export const으로 바꿈 (밑에 다)

// export const index = (req, res) => {
//     res.render('index');
// };

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    //model
    User.post_signup(req.body, () => {
        res.send({ result: true });
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

// export const signin = (req, res) => {
//     res.render('signin');
// };


exports.post_signin = (req, res) => {
    //model
    User.post_signin(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    });
};

exports.post_profile = (req, res) => {
    User.post_profile(req.body, (result) => {
        if (result.length > 0) {
            res.render('profile', { data: result[0] });
        }
    });
};

exports.edit_profile = (req, res) => {
    User.edit_profile(req.body, () => {
        res.send({ result: true });
    });
};

exports.delete_profile = (req, res) => {
    User.delete_profile(req.body.id, () => {
        res.send({ result: true });
    });
};
//여기도 async await 처리 해주기 
