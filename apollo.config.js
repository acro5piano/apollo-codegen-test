module.exports = {
  client: {
    includes: ['src/queries/**'],
    service: {
      name: "test",
      localSchemaFile: 'schema.graphql',
    },
  }
}
