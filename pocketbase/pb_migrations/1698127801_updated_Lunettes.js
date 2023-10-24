/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9kgmrgutuvstn4c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyve6jdq",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3nsqanrh",
    "name": "id_user_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9kgmrgutuvstn4c")

  // remove
  collection.schema.removeField("iyve6jdq")

  // remove
  collection.schema.removeField("3nsqanrh")

  return dao.saveCollection(collection)
})
