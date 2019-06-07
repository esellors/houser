module.exports = {
   getAllHouses: async (req, res) => {
      const houses = await req.app.get('db').get_all_houses();

      res.status(200).json(houses);
   },
   addHouse: async (req, res) => {
      const {name, address, city, state, zip, img, mortgage, rent} = req.body;
      const houses = req.app.get('db').add_house(name, address, city, state, zip, img, mortgage, rent);

      res.status(200).json(houses);
   }
}