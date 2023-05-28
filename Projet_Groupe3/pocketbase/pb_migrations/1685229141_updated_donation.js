migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6n3djocs",
    "name": "user_donation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // remove
  collection.schema.removeField("6n3djocs")

  return dao.saveCollection(collection)
})
