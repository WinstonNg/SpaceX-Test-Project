const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType,
     GraphQLString,
      GraphQLSchema,
      
    } = graphql;

//Dummy Data
var rockets = [
    {name:'Forward Unto Dawn', country:'USA', type:'Carrier'},
    {name:'Infinity', country:'UK', type:'Dreadnought'},
    {name:'Pillar of Autumn', country:'Canada', type:'Destroyer'}
];

const RocketType = new GraphQLObjectType({
    name:'Rocket',
    fields:() => ({
        name: { type: GraphQLString },
        country: {type:GraphQLString},
        type: {type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQUeryType',
    fields: () => ({
        rocket: {
            type: RocketType,
            args: {name: {type:GraphQLString}},
            resolve(parent, args){
                //Code to get data from DB / other source
                return _.find(rockets, {name:args.name});
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});