const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
    Query: {
        get(root, args, context) {
            return context.prisma.paymentconfirmations()
        }
    },
    Mutation: {
        create(root, args, context) {
            return context.prisma.createpaymentconfirmation({
                payeeProxyId: args.payerProxyId,
                payeeProxyType: args.payeeProxyType,
                payeeAccountNumber: args.payeeAccountNumber,
                payeeName: args.payeeName,
                payerProxyId: args.payerProxyId,
                payerProxyType: args.payerProxyType,
                payerAccountNumber: args.payerAccountNumber,
                payerName: args.payerName,
                sendingBankCode: args.sendingBankCode,
                receivingBankCode: args.receivingBankCode,
                amount: args.amount,
                transactionId: args.transactionId,
                transactionDateandTime: args.transactionDateandTime,
                billPaymentRef1: args.billPaymentRef1,
                billPaymentRef3: args.billPaymentRef3,
                currencyCode: args.currencyCode,
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma
    },
  })
  server.start(() => console.log('Server is running on http://localhost:4000'))