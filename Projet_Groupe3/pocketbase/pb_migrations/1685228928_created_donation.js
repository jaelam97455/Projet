migrate((db) => {
  const collection = new Collection({
    "id": "br6tax7n1rgxa15",
    "created": "2023-05-27 23:08:48.119Z",
    "updated": "2023-05-27 23:08:48.119Z",
    "name": "donation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q0e4yw85",
        "name": "title_donation",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4mgy5ppz",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cekun59v",
        "name": "localisation",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15");

  return dao.deleteCollection(collection);
})
