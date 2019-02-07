module.exports = {
        typeDefs: /* GraphQL */ `type Aggregatepaymentconfirmation {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createpaymentconfirmation(data: paymentconfirmationCreateInput!): paymentconfirmation!
  updatepaymentconfirmation(data: paymentconfirmationUpdateInput!, where: paymentconfirmationWhereUniqueInput!): paymentconfirmation
  updateManypaymentconfirmations(data: paymentconfirmationUpdateManyMutationInput!, where: paymentconfirmationWhereInput): BatchPayload!
  upsertpaymentconfirmation(where: paymentconfirmationWhereUniqueInput!, create: paymentconfirmationCreateInput!, update: paymentconfirmationUpdateInput!): paymentconfirmation!
  deletepaymentconfirmation(where: paymentconfirmationWhereUniqueInput!): paymentconfirmation
  deleteManypaymentconfirmations(where: paymentconfirmationWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type paymentconfirmation {
  id: ID!
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: Float!
  transactionId: String!
  transactionDateandTime: DateTime!
  billPaymentRef1: String!
  billPaymentRef3: String!
  currencyCode: Int!
  resCode: Int!
  resDesc: String!
}

type paymentconfirmationConnection {
  pageInfo: PageInfo!
  edges: [paymentconfirmationEdge]!
  aggregate: Aggregatepaymentconfirmation!
}

input paymentconfirmationCreateInput {
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: Float!
  transactionId: String!
  transactionDateandTime: DateTime!
  billPaymentRef1: String!
  billPaymentRef3: String!
  currencyCode: Int!
  resCode: Int
  resDesc: String
}

type paymentconfirmationEdge {
  node: paymentconfirmation!
  cursor: String!
}

enum paymentconfirmationOrderByInput {
  id_ASC
  id_DESC
  payeeProxyId_ASC
  payeeProxyId_DESC
  payeeProxyType_ASC
  payeeProxyType_DESC
  payeeAccountNumber_ASC
  payeeAccountNumber_DESC
  payeeName_ASC
  payeeName_DESC
  payerProxyId_ASC
  payerProxyId_DESC
  payerProxyType_ASC
  payerProxyType_DESC
  payerAccountNumber_ASC
  payerAccountNumber_DESC
  payerName_ASC
  payerName_DESC
  sendingBankCode_ASC
  sendingBankCode_DESC
  receivingBankCode_ASC
  receivingBankCode_DESC
  amount_ASC
  amount_DESC
  transactionId_ASC
  transactionId_DESC
  transactionDateandTime_ASC
  transactionDateandTime_DESC
  billPaymentRef1_ASC
  billPaymentRef1_DESC
  billPaymentRef3_ASC
  billPaymentRef3_DESC
  currencyCode_ASC
  currencyCode_DESC
  resCode_ASC
  resCode_DESC
  resDesc_ASC
  resDesc_DESC
}

type paymentconfirmationPreviousValues {
  id: ID!
  payeeProxyId: String!
  payeeProxyType: String!
  payeeAccountNumber: String!
  payeeName: String!
  payerProxyId: String!
  payerProxyType: String!
  payerAccountNumber: String!
  payerName: String!
  sendingBankCode: String!
  receivingBankCode: String!
  amount: Float!
  transactionId: String!
  transactionDateandTime: DateTime!
  billPaymentRef1: String!
  billPaymentRef3: String!
  currencyCode: Int!
  resCode: Int!
  resDesc: String!
}

type paymentconfirmationSubscriptionPayload {
  mutation: MutationType!
  node: paymentconfirmation
  updatedFields: [String!]
  previousValues: paymentconfirmationPreviousValues
}

input paymentconfirmationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: paymentconfirmationWhereInput
  AND: [paymentconfirmationSubscriptionWhereInput!]
}

input paymentconfirmationUpdateInput {
  payeeProxyId: String
  payeeProxyType: String
  payeeAccountNumber: String
  payeeName: String
  payerProxyId: String
  payerProxyType: String
  payerAccountNumber: String
  payerName: String
  sendingBankCode: String
  receivingBankCode: String
  amount: Float
  transactionId: String
  transactionDateandTime: DateTime
  billPaymentRef1: String
  billPaymentRef3: String
  currencyCode: Int
  resCode: Int
  resDesc: String
}

input paymentconfirmationUpdateManyMutationInput {
  payeeProxyId: String
  payeeProxyType: String
  payeeAccountNumber: String
  payeeName: String
  payerProxyId: String
  payerProxyType: String
  payerAccountNumber: String
  payerName: String
  sendingBankCode: String
  receivingBankCode: String
  amount: Float
  transactionId: String
  transactionDateandTime: DateTime
  billPaymentRef1: String
  billPaymentRef3: String
  currencyCode: Int
  resCode: Int
  resDesc: String
}

input paymentconfirmationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  payeeProxyId: String
  payeeProxyId_not: String
  payeeProxyId_in: [String!]
  payeeProxyId_not_in: [String!]
  payeeProxyId_lt: String
  payeeProxyId_lte: String
  payeeProxyId_gt: String
  payeeProxyId_gte: String
  payeeProxyId_contains: String
  payeeProxyId_not_contains: String
  payeeProxyId_starts_with: String
  payeeProxyId_not_starts_with: String
  payeeProxyId_ends_with: String
  payeeProxyId_not_ends_with: String
  payeeProxyType: String
  payeeProxyType_not: String
  payeeProxyType_in: [String!]
  payeeProxyType_not_in: [String!]
  payeeProxyType_lt: String
  payeeProxyType_lte: String
  payeeProxyType_gt: String
  payeeProxyType_gte: String
  payeeProxyType_contains: String
  payeeProxyType_not_contains: String
  payeeProxyType_starts_with: String
  payeeProxyType_not_starts_with: String
  payeeProxyType_ends_with: String
  payeeProxyType_not_ends_with: String
  payeeAccountNumber: String
  payeeAccountNumber_not: String
  payeeAccountNumber_in: [String!]
  payeeAccountNumber_not_in: [String!]
  payeeAccountNumber_lt: String
  payeeAccountNumber_lte: String
  payeeAccountNumber_gt: String
  payeeAccountNumber_gte: String
  payeeAccountNumber_contains: String
  payeeAccountNumber_not_contains: String
  payeeAccountNumber_starts_with: String
  payeeAccountNumber_not_starts_with: String
  payeeAccountNumber_ends_with: String
  payeeAccountNumber_not_ends_with: String
  payeeName: String
  payeeName_not: String
  payeeName_in: [String!]
  payeeName_not_in: [String!]
  payeeName_lt: String
  payeeName_lte: String
  payeeName_gt: String
  payeeName_gte: String
  payeeName_contains: String
  payeeName_not_contains: String
  payeeName_starts_with: String
  payeeName_not_starts_with: String
  payeeName_ends_with: String
  payeeName_not_ends_with: String
  payerProxyId: String
  payerProxyId_not: String
  payerProxyId_in: [String!]
  payerProxyId_not_in: [String!]
  payerProxyId_lt: String
  payerProxyId_lte: String
  payerProxyId_gt: String
  payerProxyId_gte: String
  payerProxyId_contains: String
  payerProxyId_not_contains: String
  payerProxyId_starts_with: String
  payerProxyId_not_starts_with: String
  payerProxyId_ends_with: String
  payerProxyId_not_ends_with: String
  payerProxyType: String
  payerProxyType_not: String
  payerProxyType_in: [String!]
  payerProxyType_not_in: [String!]
  payerProxyType_lt: String
  payerProxyType_lte: String
  payerProxyType_gt: String
  payerProxyType_gte: String
  payerProxyType_contains: String
  payerProxyType_not_contains: String
  payerProxyType_starts_with: String
  payerProxyType_not_starts_with: String
  payerProxyType_ends_with: String
  payerProxyType_not_ends_with: String
  payerAccountNumber: String
  payerAccountNumber_not: String
  payerAccountNumber_in: [String!]
  payerAccountNumber_not_in: [String!]
  payerAccountNumber_lt: String
  payerAccountNumber_lte: String
  payerAccountNumber_gt: String
  payerAccountNumber_gte: String
  payerAccountNumber_contains: String
  payerAccountNumber_not_contains: String
  payerAccountNumber_starts_with: String
  payerAccountNumber_not_starts_with: String
  payerAccountNumber_ends_with: String
  payerAccountNumber_not_ends_with: String
  payerName: String
  payerName_not: String
  payerName_in: [String!]
  payerName_not_in: [String!]
  payerName_lt: String
  payerName_lte: String
  payerName_gt: String
  payerName_gte: String
  payerName_contains: String
  payerName_not_contains: String
  payerName_starts_with: String
  payerName_not_starts_with: String
  payerName_ends_with: String
  payerName_not_ends_with: String
  sendingBankCode: String
  sendingBankCode_not: String
  sendingBankCode_in: [String!]
  sendingBankCode_not_in: [String!]
  sendingBankCode_lt: String
  sendingBankCode_lte: String
  sendingBankCode_gt: String
  sendingBankCode_gte: String
  sendingBankCode_contains: String
  sendingBankCode_not_contains: String
  sendingBankCode_starts_with: String
  sendingBankCode_not_starts_with: String
  sendingBankCode_ends_with: String
  sendingBankCode_not_ends_with: String
  receivingBankCode: String
  receivingBankCode_not: String
  receivingBankCode_in: [String!]
  receivingBankCode_not_in: [String!]
  receivingBankCode_lt: String
  receivingBankCode_lte: String
  receivingBankCode_gt: String
  receivingBankCode_gte: String
  receivingBankCode_contains: String
  receivingBankCode_not_contains: String
  receivingBankCode_starts_with: String
  receivingBankCode_not_starts_with: String
  receivingBankCode_ends_with: String
  receivingBankCode_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  transactionId: String
  transactionId_not: String
  transactionId_in: [String!]
  transactionId_not_in: [String!]
  transactionId_lt: String
  transactionId_lte: String
  transactionId_gt: String
  transactionId_gte: String
  transactionId_contains: String
  transactionId_not_contains: String
  transactionId_starts_with: String
  transactionId_not_starts_with: String
  transactionId_ends_with: String
  transactionId_not_ends_with: String
  transactionDateandTime: DateTime
  transactionDateandTime_not: DateTime
  transactionDateandTime_in: [DateTime!]
  transactionDateandTime_not_in: [DateTime!]
  transactionDateandTime_lt: DateTime
  transactionDateandTime_lte: DateTime
  transactionDateandTime_gt: DateTime
  transactionDateandTime_gte: DateTime
  billPaymentRef1: String
  billPaymentRef1_not: String
  billPaymentRef1_in: [String!]
  billPaymentRef1_not_in: [String!]
  billPaymentRef1_lt: String
  billPaymentRef1_lte: String
  billPaymentRef1_gt: String
  billPaymentRef1_gte: String
  billPaymentRef1_contains: String
  billPaymentRef1_not_contains: String
  billPaymentRef1_starts_with: String
  billPaymentRef1_not_starts_with: String
  billPaymentRef1_ends_with: String
  billPaymentRef1_not_ends_with: String
  billPaymentRef3: String
  billPaymentRef3_not: String
  billPaymentRef3_in: [String!]
  billPaymentRef3_not_in: [String!]
  billPaymentRef3_lt: String
  billPaymentRef3_lte: String
  billPaymentRef3_gt: String
  billPaymentRef3_gte: String
  billPaymentRef3_contains: String
  billPaymentRef3_not_contains: String
  billPaymentRef3_starts_with: String
  billPaymentRef3_not_starts_with: String
  billPaymentRef3_ends_with: String
  billPaymentRef3_not_ends_with: String
  currencyCode: Int
  currencyCode_not: Int
  currencyCode_in: [Int!]
  currencyCode_not_in: [Int!]
  currencyCode_lt: Int
  currencyCode_lte: Int
  currencyCode_gt: Int
  currencyCode_gte: Int
  resCode: Int
  resCode_not: Int
  resCode_in: [Int!]
  resCode_not_in: [Int!]
  resCode_lt: Int
  resCode_lte: Int
  resCode_gt: Int
  resCode_gte: Int
  resDesc: String
  resDesc_not: String
  resDesc_in: [String!]
  resDesc_not_in: [String!]
  resDesc_lt: String
  resDesc_lte: String
  resDesc_gt: String
  resDesc_gte: String
  resDesc_contains: String
  resDesc_not_contains: String
  resDesc_starts_with: String
  resDesc_not_starts_with: String
  resDesc_ends_with: String
  resDesc_not_ends_with: String
  AND: [paymentconfirmationWhereInput!]
}

input paymentconfirmationWhereUniqueInput {
  id: ID
}

type Query {
  paymentconfirmation(where: paymentconfirmationWhereUniqueInput!): paymentconfirmation
  paymentconfirmations(where: paymentconfirmationWhereInput, orderBy: paymentconfirmationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [paymentconfirmation]!
  paymentconfirmationsConnection(where: paymentconfirmationWhereInput, orderBy: paymentconfirmationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): paymentconfirmationConnection!
  node(id: ID!): Node
}

type Subscription {
  paymentconfirmation(where: paymentconfirmationSubscriptionWhereInput): paymentconfirmationSubscriptionPayload
}
`
      }
    