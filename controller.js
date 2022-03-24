let list = []
const sequelize = require('./sequelize')

module.exports = {
  // Regular Endpoints
  addItem: async (req, res) => {
    const {item} = req.body
    list.push(item)
    res.status(200).send(`Successfully added ${item}`)
  },

  getList: async (req, res) => {
    res.status(200).send(list)
  },

  deleteList: async (req, res) => {
    list = []
    res.status(200).send("Deleted da whole list!")
  },

  deleteItem: async (req, res) => {
    const {id} = req.params.id
    list.splice(1, id)
    res.status(200).send(list)
  }
  //Sequelize Endpoints
  // addItem: async (req, res) => {
  //   const {item} = req.body
  //   await sequelize.query(`
  //     INSERT INTO items (name)
  //     VALUES('${item}')
  //   `)
  //   res.status(200).send(`Successfully added ${item}`)
  // },

  // getList: async (req, res) => {
  //   let info = await sequelize.query(`
  //     SELECT name FROM items
  //   `)
  //   res.status(200).send(info[0])
  // },

  // deleteList: async (req, res) => {
  //   list = []
  //   res.status(200).send("Deleted da whole list!")
  // },

  // deleteItem: async (req, res) => {
  //   const {id} = req.params
  //   let info = await sequelize.query(`
  //     DELETE FROM items
  //     WHERE id = ${id}
  //     RETURNING items
  //   `)
  //   res.status(200).send(info[0])
  // }
}