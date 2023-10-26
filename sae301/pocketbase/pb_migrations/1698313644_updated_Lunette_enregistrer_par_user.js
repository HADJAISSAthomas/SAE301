/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tyea3b85scovoss")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix \n  \nFROM Lunettes, users \nWHERE Lunettes.enregistre = TRUE AND Lunettes.id_user_user = users.id \n"
  }

  // remove
  collection.schema.removeField("zexp8opp")

  // remove
  collection.schema.removeField("cn2sxln5")

  // remove
  collection.schema.removeField("hues03e6")

  // remove
  collection.schema.removeField("brzbx3qf")

  // remove
  collection.schema.removeField("34gyjmr6")

  // remove
  collection.schema.removeField("65cbl5gu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mupi4vqe",
    "name": "user",
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
    "id": "rv9fwfot",
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
    "id": "kycsmd1j",
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
    "id": "ml2gjeox",
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
    "id": "rbwuf2ws",
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
    "id": "8zwcsyex",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix \n  \nFROM Lunettes, users \nWHERE Lunettes.enregistre = TRUE AND Lunettes.id_user_user = users.id \nGROUP BY users.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zexp8opp",
    "name": "user",
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
    "id": "cn2sxln5",
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
    "id": "hues03e6",
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
    "id": "brzbx3qf",
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
    "id": "34gyjmr6",
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
    "id": "65cbl5gu",
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
  collection.schema.removeField("mupi4vqe")

  // remove
  collection.schema.removeField("rv9fwfot")

  // remove
  collection.schema.removeField("kycsmd1j")

  // remove
  collection.schema.removeField("ml2gjeox")

  // remove
  collection.schema.removeField("rbwuf2ws")

  // remove
  collection.schema.removeField("8zwcsyex")

  return dao.saveCollection(collection)
})
