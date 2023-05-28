migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unn58ns58mgwjei")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ugvusdd",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aipeax7q",
    "name": "adresse",
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
  const collection = dao.findCollectionByNameOrId("unn58ns58mgwjei")

  // remove
  collection.schema.removeField("2ugvusdd")

  // remove
  collection.schema.removeField("aipeax7q")

  return dao.saveCollection(collection)
})
