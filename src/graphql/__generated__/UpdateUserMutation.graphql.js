/**
 * @generated SignedSource<<357da07b8e5848ae2f91e73ec6f4206f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          }
        ],
        "kind": "ObjectValue",
        "name": "_set"
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "example_user_mutation_response",
    "kind": "LinkedField",
    "name": "update_example_user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "example_user",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "69b5f06d9646d16f5019c3d2d6954aea",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $id: String!\n  $name: String!\n) {\n  update_example_user(where: {id: {_eq: $id}}, _set: {name: $name}) {\n    returning {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

node.hash = "732004348443fdf9d1fad4716c30b339";

module.exports = node;
