module.exports = {
   getAllHouses: async (req, res) => {
      const houses = await req.app.get('db').get_all_houses();

      res.status(200).json(houses);
   },
   addHouse: async (req, res) => {
      const {name, address, city, state, zip, img, mortgage, rent} = req.body;
      const houses = await req.app.get('db').add_house(name, address, city, state, zip, img, mortgage, rent);

      res.status(201).json(houses);
   },
   deleteHouse: async (req, res) => {
      const {id} = req.params;
      console.log(id)
      const houses = await req.app.get('db').delete_house(id);

      res.status(200).json(houses);
   }
}