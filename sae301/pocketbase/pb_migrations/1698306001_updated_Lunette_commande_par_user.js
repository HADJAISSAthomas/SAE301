/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tyea3b85scovoss")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix FROM Lunettes, users WHERE Lunettes.enregistre=TRUE GROUP BY users.id"
  }

  // remove
  collection.schema.removeField("xzur7fyg")

  // remove
  collection.schema.removeField("zlg2tco4")

  // remove
  collection.schema.removeField("yc3iovg5")

  // remove
  collection.schema.removeField("wetk9sak")

  // remove
  collection.schema.removeField("rppxhj1j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pipcbsdz",
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
    "id": "dvzbcqic",
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
    "id": "hfbxvmth",
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
    "id": "bkzn20ui",
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
    "id": "4quydlci",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix FROM Lunettes WHERE Lunettes.enregistre=TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzur7fyg",
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
    "id": "zlg2tco4",
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
    "id": "yc3iovg5",
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
    "id": "wetk9sak",
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
    "id": "rppxhj1j",
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
  collection.schema.removeField("pipcbsdz")

  // remove
  collection.schema.removeField("dvzbcqic")

  // remove
  collection.schema.removeField("hfbxvmth")

  // remove
  collection.schema.removeField("bkzn20ui")

  // remove
  collection.schema.removeField("4quydlci")

  return dao.saveCollection(collection)
})
