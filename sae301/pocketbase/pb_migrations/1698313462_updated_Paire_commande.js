/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9xsn43j8suaihud")

  collection.name = "Paire_enregistre"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunettes.id) as lunettes_commandees FROM Lunettes WHERE Lunettes.enregistre=TRUE"
  }

  // remove
  collection.schema.removeField("y8wbpinj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yo4jsakt",
    "name": "lunettes_commandees",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9xsn43j8suaihud")

  collection.name = "Paire_commande"
  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunettes.id) as lunettes_commandees FROM Lunettes WHERE Lunettes.commande=TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8wbpinj",
    "name": "lunettes_commandees",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("yo4jsakt")

  return dao.saveCollection(collection)
})
