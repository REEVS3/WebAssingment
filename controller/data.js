const apiurl = "https://gist.githubusercontent.com/REEVS3/158f6bab328021d1f1d73ed02ed143d8/raw/6ae434298a6fc6102dbf468b017783b5036f29ad/data.json"
const fetch = require("node-fetch")

exports.data = (req, res) => {
    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        let count = req.query.count;
        let GridSongs = data['GridSongs'].slice(0,count)
        let RecentSongs = data['RecentSongs'].slice(0,count)
        let TopSongs = data['TopSongs'].slice(0,count)
        data['GridSongs'] = GridSongs;
        data['RecentSongs'] = RecentSongs;
        data['TopSongs'] = TopSongs;
        res.send(data);
    })
}




     
