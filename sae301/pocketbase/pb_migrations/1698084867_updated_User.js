/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s81ida6btgqsiz4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m9hpozwv",
    "name": "Mdp",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s81ida6btgqsiz4")

  // remove
  collection.schema.removeField("m9hpozwv")

  return dao.saveCollection(collection)
})
