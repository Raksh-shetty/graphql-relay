/**
 * @generated SignedSource<<6d654567d08396e23d110a80f0d74150>>
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
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "name": "delete_example_user",
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
    "name": "DeleteUserMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "549f9e7d71ef1c32ac65e08d487ca72a",
    "id": null,
    "metadata": {},
    "name": "DeleteUserMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteUserMutation(\n  $id: String!\n) {\n  delete_example_user(where: {id: {_eq: $id}}) {\n    returning {\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "00c3e1a484bd2096f87d9beb31a1e38c";

module.exports = node;
