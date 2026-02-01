const registerUser = (req, res) =>{
    res.json({message: 'Register User'})
}

const loginUser = (req, res) =>{
    res.json({message: 'user login data'})
}

const getMyAccount = (req,res) =>{
    res.json({message: 'get account data'})
}

module.exports ={registerUser, loginUser, getMyAccount}