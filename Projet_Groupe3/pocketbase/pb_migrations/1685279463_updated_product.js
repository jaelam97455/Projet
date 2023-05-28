migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // remove
  collection.schema.removeField("qh1hnxeh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
