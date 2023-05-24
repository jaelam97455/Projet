migrate((db) => {
  const collection = new Collection({
    "id": "unn58ns58mgwjei",
    "created": "2023-05-23 14:58:47.781Z",
    "updated": "2023-05-23 14:58:47.781Z",
    "name": "productors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t6erdos6",
        "name": "lastname",
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
        "id": "pfdaz9t6",
        "name": "firstname",
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
        "id": "tp49oo9b",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "19ylniqm",
        "name": "profilepic",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("unn58ns58mgwjei");

  return dao.deleteCollection(collection);
})
