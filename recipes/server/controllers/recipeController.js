require('../models/database')
const User = require('../models/Users')
exports.homepage = async(req, res) => {
    res.render('index', { title: 'Recipes'});
}

async function insertUser(){
    try {
        await User.insertMany(
            {
                "email": "kurts@aols.com", 
                "username": "Kurts", 
                "password": "kurt222"
            },
            
        );
    } catch (error) {
        console.log('err', + error)
    }
}

insertUser();