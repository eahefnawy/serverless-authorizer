'use strict';

const generatePolicy = function(principalId, effect, resource) {
  const authResponse = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};

module.exports.profile = (event, context, callback) => {
   const body = {
   message: 'Successs - Profile Retrieved!',
   input: event,
   };

   const response = {
     statusCode: 200,
     body: JSON.stringify(body),
   };

   callback(null, response);
};

module.exports.auth = (event, context, callback) => {

  var token = event.authorizationToken;
  /*
   *
   * extra custom authorization logic here: OAUTH, JWT ... etc
   *
   */

  // In this example, the token is treated as the status for simplicity.
  switch (token) {
    case 'allow':
      callback(null, generatePolicy('user', 'Allow', event.methodArn));
      break;
    case 'deny':
      callback(null, generatePolicy('user', 'Deny', event.methodArn));
      break;
    case 'unauthorized':
      callback('Unauthorized');
      break;
    default:
      callback('Error');
  }
};
