module.exports = (app) => {
   return {
      read: (req, res, next) => {
         console.log(req.params)
         let db = app.get('db');
         db.get_bins({shelfletter: req.params.shelfletter}).then(bins => {
            res.send(bins);
         }).catch(err => console.error(err))
      },
   }
}
