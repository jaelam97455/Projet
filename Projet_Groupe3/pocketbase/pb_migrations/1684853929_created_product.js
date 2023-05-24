migrate((db) => {
  const collection = new Collection({
    "id": "bb6j77yh66ahyn8",
    "created": "2023-05-23 14:58:49.461Z",
    "updated": "2023-05-23 14:58:49.461Z",
    "name": "product",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2lnyqsfw",
        "name": "title",
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
        "id": "ivkpqmt5",
        "name": "category",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Légume",
            "Fruit"
          ]
        }
      },
      {
        "system": false,
        "id": "evr4woxw",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "qh1hnxeh",
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
        "id": "4gqz7iok",
        "name": "img",
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
      },
      {
        "system": false,
        "id": "paevaeg5",
        "name": "productor",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "unn58ns58mgwjei",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8");

  return dao.deleteCollection(collection);
})
