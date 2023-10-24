/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s81ida6btgqsiz4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kiwsnxkq",
    "name": "id_user_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "s81ida6btgqsiz4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xke2ufb7",
    "name": "id_materiaux_materiaux",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "6iqnm5hp1ibi3p7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s81ida6btgqsiz4")

  // remove
  collection.schema.removeField("kiwsnxkq")

  // remove
  collection.schema.removeField("xke2ufb7")

  return dao.saveCollection(collection)
})
