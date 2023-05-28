migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xxvhkvhd0pbozay")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwpo79nq",
    "name": "user_order",
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
  const collection = dao.findCollectionByNameOrId("xxvhkvhd0pbozay")

  // remove
  collection.schema.removeField("kwpo79nq")

  return dao.saveCollection(collection)
})
