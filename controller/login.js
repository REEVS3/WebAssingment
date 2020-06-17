exports.login= (req, res) => {
    res.render("login")
}


exports.signin= (req, res) => {
    if  (username =="user" && password =="P@ssw0rd123")

    {
        res.redirect("/")
    }
    
    else
    {
        res.redirect("/login")
    }

}

