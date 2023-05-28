migrate((db) => {
  const collection = new Collection({
    "id": "snihau3imrjtbu7",
    "created": "2023-05-27 23:25:32.708Z",
    "updated": "2023-05-27 23:25:32.708Z",
    "name": "subscription_cagette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w0iel1sh",
        "name": "users_subscription",
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
      },
      {
        "system": false,
        "id": "jfschv7a",
        "name": "formule",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Light",
            "Giant"
          ]
        }
      },
      {
        "system": false,
        "id": "vwcjqicl",
        "name": "frequence",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1_month",
            "2_month",
            "3_month",
            "4_month"
          ]
        }
      },
      {
        "system": false,
        "id": "mjurfg8l",
        "name": "prix",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("snihau3imrjtbu7");

  return dao.deleteCollection(collection);
})
