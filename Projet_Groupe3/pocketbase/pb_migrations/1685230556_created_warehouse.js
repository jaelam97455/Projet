migrate((db) => {
  const collection = new Collection({
    "id": "laaxcrr4r1mfzem",
    "created": "2023-05-27 23:35:56.914Z",
    "updated": "2023-05-27 23:35:56.914Z",
    "name": "warehouse",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tghs49ec",
        "name": "warehouse_products",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bb6j77yh66ahyn8",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "j4dpazvx",
        "name": "capacity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("laaxcrr4r1mfzem");

  return dao.deleteCollection(collection);
})
