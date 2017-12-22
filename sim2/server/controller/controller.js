module.exports={
    read: (req, res,) => {
        const db = req.app.get('db');
        db.get_listing().then(listing =>{
            res.status(200).send(listing)
        })
    }
}