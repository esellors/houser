module.exports = {
   getAllHouses: async (req, res) => {
      const houses = await req.app.get('db').get_all_houses();
      res.status(200).json(houses);
   }
}