/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tyea3b85scovoss")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix \n  \nFROM Lunettes, users \nWHERE Lunettes.enregistre=TRUE AND Lunettes.id_user_user = users.id \nGROUP BY users.id"
  }

  // remove
  collection.schema.removeField("6qhozgdw")

  // remove
  collection.schema.removeField("5ne5rmao")

  // remove
  collection.schema.removeField("yshyes26")

  // remove
  collection.schema.removeField("tsktkz7q")

  // remove
  collection.schema.removeField("dwohpqwe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "va1bcdxv",
    "name": "Couleur_Cadran",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zws8afw2",
    "name": "Couleur_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xinx0kig",
    "name": "Type_Cadran",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlumwcjt",
    "name": "Type_Verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmtqdg61",
    "name": "Prix",
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
  const collection = dao.findCollectionByNameOrId("tyea3b85scovoss")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix \n  \nFROM Lunettes, users \nWHERE Lunettes.enregistre=TRUE AND Lunettes.id_user_user=users.id \nGROUP BY users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6qhozgdw",
    "name": "Couleur_Cadran",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ne5rmao",
    "name": "Couleur_verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yshyes26",
    "name": "Type_Cadran",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsktkz7q",
    "name": "Type_Verre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwohpqwe",
    "name": "Prix",
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
  collection.schema.removeField("va1bcdxv")

  // remove
  collection.schema.removeField("zws8afw2")

  // remove
  collection.schema.removeField("xinx0kig")

  // remove
  collection.schema.removeField("vlumwcjt")

  // remove
  collection.schema.removeField("tmtqdg61")

  return dao.saveCollection(collection)
})
