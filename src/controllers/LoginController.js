function login(req, res) {
    req.render('login/index');
}

function register(req, res) {
    req.render('login/register');
}

module.exports = {
    login: login,
    register: register,
}