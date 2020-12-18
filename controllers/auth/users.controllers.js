const User = require('../../models/auth/users.models');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () => {
               res.status(201).json(
                   {message: 'new user created'}) 
            }).catch( error => {
                res.status(400).json({message: error})
            })
        }
    ).catch((error) => res.status(500).json({error: error}))
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email}).then(
        (user) => {
            if(!user){
                return res.status(400).json({error: new Error('user not found' )
            })
            };
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if(!valid){
                        return res.status(400).json({error: new Error('password not valid')
                    })
                }
                    res.status(200).json({
                       userId: user._id,
                       token: 'token' 
                    })
                }
            ).catch((error) => res.status(500).json({error: error}) )
        }
    ).catch((error) => res.status(500).json({error: error}))
};