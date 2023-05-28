migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xxvhkvhd0pbozay")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwzwxj7e",
    "name": "product_order",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xxvhkvhd0pbozay")

  // remove
  collection.schema.removeField("fwzwxj7e")

  return dao.saveCollection(collection)
})
