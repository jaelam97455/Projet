migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("x9ajkjg6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6xsl2qkr",
    "name": "donation_users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "br6tax7n1rgxa15",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9ajkjg6",
    "name": "field",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("6xsl2qkr")

  return dao.saveCollection(collection)
})
