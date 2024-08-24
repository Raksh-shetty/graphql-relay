/**
 * @generated SignedSource<<c09f07211529bcce07b4c4026b2ca1a5>>
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
        "name": "objects"
      }
    ],
    "concreteType": "example_user_mutation_response",
    "kind": "LinkedField",
    "name": "insert_example_user",
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
    "name": "AddUserMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "792ce7f69e2f2fc970fbb70e08967485",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $name: String!\n) {\n  insert_example_user(objects: {name: $name}) {\n    returning {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

node.hash = "19d2b82f51c9b28bbc32a2b421d63a0d";

module.exports = node;
