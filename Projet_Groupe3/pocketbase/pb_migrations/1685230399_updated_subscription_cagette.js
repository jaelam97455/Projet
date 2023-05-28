migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("snihau3imrjtbu7")

  // remove
  collection.schema.removeField("lhrph9w8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("snihau3imrjtbu7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhrph9w8",
    "name": "user_subscription",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
