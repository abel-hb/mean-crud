//Const
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwtService = require('../services/jwt.services');
// creamos un JSON
const userCrtl = {};

userCrtl.saveUser = (req, res) => {
    const user = new User();
    var params = req.body;
    
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image= 'null';

    if (params.password){
        // Crypt and saved data
        bcrypt.hash(params.password,null,null,(err,hash) =>{
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null){
                // Save user
                user.save()
                .then(user => {
                    res.status(200).send({user:user});
                })
                .catch(err => {
                    res.status(500).send({error:err});
                })
            }else{
                res.status(200).send({message: 'Fill out form.'});
            }
        })
    }else{
        res.status(200).send({message: 'Enter the pass'});
    }

}

userCrtl.loginUser = (req, res) => {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email:email.toLowerCase()}, (err, user) => {
        if (err){
            res.status(500).send({message: 'Server Error'});
        }else{
            if (!user){
                res.status(404).send({message: 'User not found'});
            }else{
                bcrypt.compare(password,user.password, (err, check)=>{
                    if (check){
                        if (params.gethash){
                            //Here return token crypt
                            res.status(200).send({token:jwtService.createToken(user)});
                        }else{
                            res.status(200).send({message: 'All Ok with out get hash'});
                        }
                    }else{
                        res.status(404).send({message: 'User not login'});
                    }
                })
            }
        }
    })
}


module.exports = userCrtl;