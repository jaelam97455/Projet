migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bj1bpjqt",
    "name": "order_product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "xxvhkvhd0pbozay",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // remove
  collection.schema.removeField("bj1bpjqt")

  return dao.saveCollection(collection)
})
