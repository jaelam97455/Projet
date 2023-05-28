migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2lnyqsfw",
    "name": "designation",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
