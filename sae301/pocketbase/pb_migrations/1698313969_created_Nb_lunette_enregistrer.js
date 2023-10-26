/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jqgql9x6idgt3h7",
    "created": "2023-10-26 09:52:49.512Z",
    "updated": "2023-10-26 09:52:49.512Z",
    "name": "Nb_lunette_enregistrer",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g8mbpary",
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
      },
      {
        "system": false,
        "id": "naqmu2rq",
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
      },
      {
        "system": false,
        "id": "ns9nkmj9",
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
      },
      {
        "system": false,
        "id": "vh7qivdq",
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
      },
      {
        "system": false,
        "id": "kqm8900u",
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
      },
      {
        "system": false,
        "id": "cjsbe8ut",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,Lunettes.Couleur_cadran as Couleur_Cadran, Lunettes.Couleur_verre as Couleur_verre, Lunettes.Type_cadran as Type_Cadran, Lunettes.Type_verre as Type_Verre, Lunettes.prix as Prix \n  \nFROM Lunettes, users \nWHERE Lunettes.enregistre = TRUE AND Lunettes.id_user_user = users.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jqgql9x6idgt3h7");

  return dao.deleteCollection(collection);
})
