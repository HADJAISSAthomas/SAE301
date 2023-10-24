/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9xsn43j8suaihud",
    "created": "2023-10-24 07:12:19.834Z",
    "updated": "2023-10-24 07:12:19.834Z",
    "name": "Paire_commande",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, COUNT(Lunettes.id) as lunettes_commandees FROM Lunettes WHERE Lunettes.commande=TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9xsn43j8suaihud");

  return dao.deleteCollection(collection);
})
