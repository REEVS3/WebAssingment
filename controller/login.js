exports.login= (req, res) => {
    res.render("login")
}
    exports.signin= (req, res) => {
     
    const user = req.body.username
    const password = req.body.password
     
    if (user =="user" && password =="P@ssw0rd123")

    {
        res.redirect("/")
    } 
    
     else
    {
        res.redirect("/login")
    } 

 }
