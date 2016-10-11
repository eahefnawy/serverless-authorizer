# Serverless Authorizer
Example of a service that uses API Gateway custom authorizer feature to authorize your endpoints.

## Usage

* `serverless install --url https://github.com/eahefnawy/serverless-authorizer`
* `cd serverless-authorizer`
* `serverless deploy`
* Notice the displayed endpoint after deployment
* `curl --header "Authorization: allow" <endpoint>` - Should work! Authorized!
* `curl --header "Authorization: deny" <endpoint>` - Should not work
* `curl --header "Authorization: unauthorized" <endpoint>` - Should not work
* `curl --header "Authorization: blabla" <endpoint>` - Should not work
* `curl <endpoint>` - Should not work
