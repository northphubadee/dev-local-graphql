// Code generated by Prisma (prisma@1.26.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  paymentconfirmation: (
    where?: paymentconfirmationWhereInput
  ) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  paymentconfirmation: (
    where: paymentconfirmationWhereUniqueInput
  ) => paymentconfirmationPromise;
  paymentconfirmations: (args?: {
    where?: paymentconfirmationWhereInput;
    orderBy?: paymentconfirmationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<paymentconfirmation>;
  paymentconfirmationsConnection: (args?: {
    where?: paymentconfirmationWhereInput;
    orderBy?: paymentconfirmationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => paymentconfirmationConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createpaymentconfirmation: (
    data: paymentconfirmationCreateInput
  ) => paymentconfirmationPromise;
  updatepaymentconfirmation: (args: {
    data: paymentconfirmationUpdateInput;
    where: paymentconfirmationWhereUniqueInput;
  }) => paymentconfirmationPromise;
  updateManypaymentconfirmations: (args: {
    data: paymentconfirmationUpdateManyMutationInput;
    where?: paymentconfirmationWhereInput;
  }) => BatchPayloadPromise;
  upsertpaymentconfirmation: (args: {
    where: paymentconfirmationWhereUniqueInput;
    create: paymentconfirmationCreateInput;
    update: paymentconfirmationUpdateInput;
  }) => paymentconfirmationPromise;
  deletepaymentconfirmation: (
    where: paymentconfirmationWhereUniqueInput
  ) => paymentconfirmationPromise;
  deleteManypaymentconfirmations: (
    where?: paymentconfirmationWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  paymentconfirmation: (
    where?: paymentconfirmationSubscriptionWhereInput
  ) => paymentconfirmationSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type paymentconfirmationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "payeeProxyId_ASC"
  | "payeeProxyId_DESC"
  | "payeeProxyType_ASC"
  | "payeeProxyType_DESC"
  | "payeeAccountNumber_ASC"
  | "payeeAccountNumber_DESC"
  | "payeeName_ASC"
  | "payeeName_DESC"
  | "payerProxyId_ASC"
  | "payerProxyId_DESC"
  | "payerProxyType_ASC"
  | "payerProxyType_DESC"
  | "payerAccountNumber_ASC"
  | "payerAccountNumber_DESC"
  | "payerName_ASC"
  | "payerName_DESC"
  | "sendingBankCode_ASC"
  | "sendingBankCode_DESC"
  | "receivingBankCode_ASC"
  | "receivingBankCode_DESC"
  | "amount_ASC"
  | "amount_DESC"
  | "transactionId_ASC"
  | "transactionId_DESC"
  | "transactionDateandTime_ASC"
  | "transactionDateandTime_DESC"
  | "billPaymentRef1_ASC"
  | "billPaymentRef1_DESC"
  | "billPaymentRef3_ASC"
  | "billPaymentRef3_DESC"
  | "currencyCode_ASC"
  | "currencyCode_DESC"
  | "resCode_ASC"
  | "resCode_DESC"
  | "resDesc_ASC"
  | "resDesc_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface paymentconfirmationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  payeeProxyId?: String;
  payeeProxyId_not?: String;
  payeeProxyId_in?: String[] | String;
  payeeProxyId_not_in?: String[] | String;
  payeeProxyId_lt?: String;
  payeeProxyId_lte?: String;
  payeeProxyId_gt?: String;
  payeeProxyId_gte?: String;
  payeeProxyId_contains?: String;
  payeeProxyId_not_contains?: String;
  payeeProxyId_starts_with?: String;
  payeeProxyId_not_starts_with?: String;
  payeeProxyId_ends_with?: String;
  payeeProxyId_not_ends_with?: String;
  payeeProxyType?: String;
  payeeProxyType_not?: String;
  payeeProxyType_in?: String[] | String;
  payeeProxyType_not_in?: String[] | String;
  payeeProxyType_lt?: String;
  payeeProxyType_lte?: String;
  payeeProxyType_gt?: String;
  payeeProxyType_gte?: String;
  payeeProxyType_contains?: String;
  payeeProxyType_not_contains?: String;
  payeeProxyType_starts_with?: String;
  payeeProxyType_not_starts_with?: String;
  payeeProxyType_ends_with?: String;
  payeeProxyType_not_ends_with?: String;
  payeeAccountNumber?: String;
  payeeAccountNumber_not?: String;
  payeeAccountNumber_in?: String[] | String;
  payeeAccountNumber_not_in?: String[] | String;
  payeeAccountNumber_lt?: String;
  payeeAccountNumber_lte?: String;
  payeeAccountNumber_gt?: String;
  payeeAccountNumber_gte?: String;
  payeeAccountNumber_contains?: String;
  payeeAccountNumber_not_contains?: String;
  payeeAccountNumber_starts_with?: String;
  payeeAccountNumber_not_starts_with?: String;
  payeeAccountNumber_ends_with?: String;
  payeeAccountNumber_not_ends_with?: String;
  payeeName?: String;
  payeeName_not?: String;
  payeeName_in?: String[] | String;
  payeeName_not_in?: String[] | String;
  payeeName_lt?: String;
  payeeName_lte?: String;
  payeeName_gt?: String;
  payeeName_gte?: String;
  payeeName_contains?: String;
  payeeName_not_contains?: String;
  payeeName_starts_with?: String;
  payeeName_not_starts_with?: String;
  payeeName_ends_with?: String;
  payeeName_not_ends_with?: String;
  payerProxyId?: String;
  payerProxyId_not?: String;
  payerProxyId_in?: String[] | String;
  payerProxyId_not_in?: String[] | String;
  payerProxyId_lt?: String;
  payerProxyId_lte?: String;
  payerProxyId_gt?: String;
  payerProxyId_gte?: String;
  payerProxyId_contains?: String;
  payerProxyId_not_contains?: String;
  payerProxyId_starts_with?: String;
  payerProxyId_not_starts_with?: String;
  payerProxyId_ends_with?: String;
  payerProxyId_not_ends_with?: String;
  payerProxyType?: String;
  payerProxyType_not?: String;
  payerProxyType_in?: String[] | String;
  payerProxyType_not_in?: String[] | String;
  payerProxyType_lt?: String;
  payerProxyType_lte?: String;
  payerProxyType_gt?: String;
  payerProxyType_gte?: String;
  payerProxyType_contains?: String;
  payerProxyType_not_contains?: String;
  payerProxyType_starts_with?: String;
  payerProxyType_not_starts_with?: String;
  payerProxyType_ends_with?: String;
  payerProxyType_not_ends_with?: String;
  payerAccountNumber?: String;
  payerAccountNumber_not?: String;
  payerAccountNumber_in?: String[] | String;
  payerAccountNumber_not_in?: String[] | String;
  payerAccountNumber_lt?: String;
  payerAccountNumber_lte?: String;
  payerAccountNumber_gt?: String;
  payerAccountNumber_gte?: String;
  payerAccountNumber_contains?: String;
  payerAccountNumber_not_contains?: String;
  payerAccountNumber_starts_with?: String;
  payerAccountNumber_not_starts_with?: String;
  payerAccountNumber_ends_with?: String;
  payerAccountNumber_not_ends_with?: String;
  payerName?: String;
  payerName_not?: String;
  payerName_in?: String[] | String;
  payerName_not_in?: String[] | String;
  payerName_lt?: String;
  payerName_lte?: String;
  payerName_gt?: String;
  payerName_gte?: String;
  payerName_contains?: String;
  payerName_not_contains?: String;
  payerName_starts_with?: String;
  payerName_not_starts_with?: String;
  payerName_ends_with?: String;
  payerName_not_ends_with?: String;
  sendingBankCode?: String;
  sendingBankCode_not?: String;
  sendingBankCode_in?: String[] | String;
  sendingBankCode_not_in?: String[] | String;
  sendingBankCode_lt?: String;
  sendingBankCode_lte?: String;
  sendingBankCode_gt?: String;
  sendingBankCode_gte?: String;
  sendingBankCode_contains?: String;
  sendingBankCode_not_contains?: String;
  sendingBankCode_starts_with?: String;
  sendingBankCode_not_starts_with?: String;
  sendingBankCode_ends_with?: String;
  sendingBankCode_not_ends_with?: String;
  receivingBankCode?: String;
  receivingBankCode_not?: String;
  receivingBankCode_in?: String[] | String;
  receivingBankCode_not_in?: String[] | String;
  receivingBankCode_lt?: String;
  receivingBankCode_lte?: String;
  receivingBankCode_gt?: String;
  receivingBankCode_gte?: String;
  receivingBankCode_contains?: String;
  receivingBankCode_not_contains?: String;
  receivingBankCode_starts_with?: String;
  receivingBankCode_not_starts_with?: String;
  receivingBankCode_ends_with?: String;
  receivingBankCode_not_ends_with?: String;
  amount?: Float;
  amount_not?: Float;
  amount_in?: Float[] | Float;
  amount_not_in?: Float[] | Float;
  amount_lt?: Float;
  amount_lte?: Float;
  amount_gt?: Float;
  amount_gte?: Float;
  transactionId?: String;
  transactionId_not?: String;
  transactionId_in?: String[] | String;
  transactionId_not_in?: String[] | String;
  transactionId_lt?: String;
  transactionId_lte?: String;
  transactionId_gt?: String;
  transactionId_gte?: String;
  transactionId_contains?: String;
  transactionId_not_contains?: String;
  transactionId_starts_with?: String;
  transactionId_not_starts_with?: String;
  transactionId_ends_with?: String;
  transactionId_not_ends_with?: String;
  transactionDateandTime?: DateTimeInput;
  transactionDateandTime_not?: DateTimeInput;
  transactionDateandTime_in?: DateTimeInput[] | DateTimeInput;
  transactionDateandTime_not_in?: DateTimeInput[] | DateTimeInput;
  transactionDateandTime_lt?: DateTimeInput;
  transactionDateandTime_lte?: DateTimeInput;
  transactionDateandTime_gt?: DateTimeInput;
  transactionDateandTime_gte?: DateTimeInput;
  billPaymentRef1?: String;
  billPaymentRef1_not?: String;
  billPaymentRef1_in?: String[] | String;
  billPaymentRef1_not_in?: String[] | String;
  billPaymentRef1_lt?: String;
  billPaymentRef1_lte?: String;
  billPaymentRef1_gt?: String;
  billPaymentRef1_gte?: String;
  billPaymentRef1_contains?: String;
  billPaymentRef1_not_contains?: String;
  billPaymentRef1_starts_with?: String;
  billPaymentRef1_not_starts_with?: String;
  billPaymentRef1_ends_with?: String;
  billPaymentRef1_not_ends_with?: String;
  billPaymentRef3?: String;
  billPaymentRef3_not?: String;
  billPaymentRef3_in?: String[] | String;
  billPaymentRef3_not_in?: String[] | String;
  billPaymentRef3_lt?: String;
  billPaymentRef3_lte?: String;
  billPaymentRef3_gt?: String;
  billPaymentRef3_gte?: String;
  billPaymentRef3_contains?: String;
  billPaymentRef3_not_contains?: String;
  billPaymentRef3_starts_with?: String;
  billPaymentRef3_not_starts_with?: String;
  billPaymentRef3_ends_with?: String;
  billPaymentRef3_not_ends_with?: String;
  currencyCode?: Int;
  currencyCode_not?: Int;
  currencyCode_in?: Int[] | Int;
  currencyCode_not_in?: Int[] | Int;
  currencyCode_lt?: Int;
  currencyCode_lte?: Int;
  currencyCode_gt?: Int;
  currencyCode_gte?: Int;
  resCode?: Int;
  resCode_not?: Int;
  resCode_in?: Int[] | Int;
  resCode_not_in?: Int[] | Int;
  resCode_lt?: Int;
  resCode_lte?: Int;
  resCode_gt?: Int;
  resCode_gte?: Int;
  resDesc?: String;
  resDesc_not?: String;
  resDesc_in?: String[] | String;
  resDesc_not_in?: String[] | String;
  resDesc_lt?: String;
  resDesc_lte?: String;
  resDesc_gt?: String;
  resDesc_gte?: String;
  resDesc_contains?: String;
  resDesc_not_contains?: String;
  resDesc_starts_with?: String;
  resDesc_not_starts_with?: String;
  resDesc_ends_with?: String;
  resDesc_not_ends_with?: String;
  AND?: paymentconfirmationWhereInput[] | paymentconfirmationWhereInput;
}

export interface paymentconfirmationCreateInput {
  payeeProxyId: String;
  payeeProxyType: String;
  payeeAccountNumber: String;
  payeeName: String;
  payerProxyId: String;
  payerProxyType: String;
  payerAccountNumber: String;
  payerName: String;
  sendingBankCode: String;
  receivingBankCode: String;
  amount: Float;
  transactionId: String;
  transactionDateandTime: DateTimeInput;
  billPaymentRef1: String;
  billPaymentRef3: String;
  currencyCode: Int;
  resCode?: Int;
  resDesc?: String;
}

export interface paymentconfirmationUpdateInput {
  payeeProxyId?: String;
  payeeProxyType?: String;
  payeeAccountNumber?: String;
  payeeName?: String;
  payerProxyId?: String;
  payerProxyType?: String;
  payerAccountNumber?: String;
  payerName?: String;
  sendingBankCode?: String;
  receivingBankCode?: String;
  amount?: Float;
  transactionId?: String;
  transactionDateandTime?: DateTimeInput;
  billPaymentRef1?: String;
  billPaymentRef3?: String;
  currencyCode?: Int;
  resCode?: Int;
  resDesc?: String;
}

export interface paymentconfirmationUpdateManyMutationInput {
  payeeProxyId?: String;
  payeeProxyType?: String;
  payeeAccountNumber?: String;
  payeeName?: String;
  payerProxyId?: String;
  payerProxyType?: String;
  payerAccountNumber?: String;
  payerName?: String;
  sendingBankCode?: String;
  receivingBankCode?: String;
  amount?: Float;
  transactionId?: String;
  transactionDateandTime?: DateTimeInput;
  billPaymentRef1?: String;
  billPaymentRef3?: String;
  currencyCode?: Int;
  resCode?: Int;
  resDesc?: String;
}

export interface paymentconfirmationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: paymentconfirmationWhereInput;
  AND?:
    | paymentconfirmationSubscriptionWhereInput[]
    | paymentconfirmationSubscriptionWhereInput;
}

export type paymentconfirmationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface paymentconfirmationEdge {
  node: paymentconfirmation;
  cursor: String;
}

export interface paymentconfirmationEdgePromise
  extends Promise<paymentconfirmationEdge>,
    Fragmentable {
  node: <T = paymentconfirmationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface paymentconfirmationEdgeSubscription
  extends Promise<AsyncIterator<paymentconfirmationEdge>>,
    Fragmentable {
  node: <T = paymentconfirmationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface paymentconfirmationPreviousValues {
  id: ID_Output;
  payeeProxyId: String;
  payeeProxyType: String;
  payeeAccountNumber: String;
  payeeName: String;
  payerProxyId: String;
  payerProxyType: String;
  payerAccountNumber: String;
  payerName: String;
  sendingBankCode: String;
  receivingBankCode: String;
  amount: Float;
  transactionId: String;
  transactionDateandTime: DateTimeOutput;
  billPaymentRef1: String;
  billPaymentRef3: String;
  currencyCode: Int;
  resCode: Int;
  resDesc: String;
}

export interface paymentconfirmationPreviousValuesPromise
  extends Promise<paymentconfirmationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  payeeProxyId: () => Promise<String>;
  payeeProxyType: () => Promise<String>;
  payeeAccountNumber: () => Promise<String>;
  payeeName: () => Promise<String>;
  payerProxyId: () => Promise<String>;
  payerProxyType: () => Promise<String>;
  payerAccountNumber: () => Promise<String>;
  payerName: () => Promise<String>;
  sendingBankCode: () => Promise<String>;
  receivingBankCode: () => Promise<String>;
  amount: () => Promise<Float>;
  transactionId: () => Promise<String>;
  transactionDateandTime: () => Promise<DateTimeOutput>;
  billPaymentRef1: () => Promise<String>;
  billPaymentRef3: () => Promise<String>;
  currencyCode: () => Promise<Int>;
  resCode: () => Promise<Int>;
  resDesc: () => Promise<String>;
}

export interface paymentconfirmationPreviousValuesSubscription
  extends Promise<AsyncIterator<paymentconfirmationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  payeeProxyId: () => Promise<AsyncIterator<String>>;
  payeeProxyType: () => Promise<AsyncIterator<String>>;
  payeeAccountNumber: () => Promise<AsyncIterator<String>>;
  payeeName: () => Promise<AsyncIterator<String>>;
  payerProxyId: () => Promise<AsyncIterator<String>>;
  payerProxyType: () => Promise<AsyncIterator<String>>;
  payerAccountNumber: () => Promise<AsyncIterator<String>>;
  payerName: () => Promise<AsyncIterator<String>>;
  sendingBankCode: () => Promise<AsyncIterator<String>>;
  receivingBankCode: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  transactionId: () => Promise<AsyncIterator<String>>;
  transactionDateandTime: () => Promise<AsyncIterator<DateTimeOutput>>;
  billPaymentRef1: () => Promise<AsyncIterator<String>>;
  billPaymentRef3: () => Promise<AsyncIterator<String>>;
  currencyCode: () => Promise<AsyncIterator<Int>>;
  resCode: () => Promise<AsyncIterator<Int>>;
  resDesc: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface Aggregatepaymentconfirmation {
  count: Int;
}

export interface AggregatepaymentconfirmationPromise
  extends Promise<Aggregatepaymentconfirmation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatepaymentconfirmationSubscription
  extends Promise<AsyncIterator<Aggregatepaymentconfirmation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface paymentconfirmation {
  id: ID_Output;
  payeeProxyId: String;
  payeeProxyType: String;
  payeeAccountNumber: String;
  payeeName: String;
  payerProxyId: String;
  payerProxyType: String;
  payerAccountNumber: String;
  payerName: String;
  sendingBankCode: String;
  receivingBankCode: String;
  amount: Float;
  transactionId: String;
  transactionDateandTime: DateTimeOutput;
  billPaymentRef1: String;
  billPaymentRef3: String;
  currencyCode: Int;
  resCode: Int;
  resDesc: String;
}

export interface paymentconfirmationPromise
  extends Promise<paymentconfirmation>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  payeeProxyId: () => Promise<String>;
  payeeProxyType: () => Promise<String>;
  payeeAccountNumber: () => Promise<String>;
  payeeName: () => Promise<String>;
  payerProxyId: () => Promise<String>;
  payerProxyType: () => Promise<String>;
  payerAccountNumber: () => Promise<String>;
  payerName: () => Promise<String>;
  sendingBankCode: () => Promise<String>;
  receivingBankCode: () => Promise<String>;
  amount: () => Promise<Float>;
  transactionId: () => Promise<String>;
  transactionDateandTime: () => Promise<DateTimeOutput>;
  billPaymentRef1: () => Promise<String>;
  billPaymentRef3: () => Promise<String>;
  currencyCode: () => Promise<Int>;
  resCode: () => Promise<Int>;
  resDesc: () => Promise<String>;
}

export interface paymentconfirmationSubscription
  extends Promise<AsyncIterator<paymentconfirmation>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  payeeProxyId: () => Promise<AsyncIterator<String>>;
  payeeProxyType: () => Promise<AsyncIterator<String>>;
  payeeAccountNumber: () => Promise<AsyncIterator<String>>;
  payeeName: () => Promise<AsyncIterator<String>>;
  payerProxyId: () => Promise<AsyncIterator<String>>;
  payerProxyType: () => Promise<AsyncIterator<String>>;
  payerAccountNumber: () => Promise<AsyncIterator<String>>;
  payerName: () => Promise<AsyncIterator<String>>;
  sendingBankCode: () => Promise<AsyncIterator<String>>;
  receivingBankCode: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  transactionId: () => Promise<AsyncIterator<String>>;
  transactionDateandTime: () => Promise<AsyncIterator<DateTimeOutput>>;
  billPaymentRef1: () => Promise<AsyncIterator<String>>;
  billPaymentRef3: () => Promise<AsyncIterator<String>>;
  currencyCode: () => Promise<AsyncIterator<Int>>;
  resCode: () => Promise<AsyncIterator<Int>>;
  resDesc: () => Promise<AsyncIterator<String>>;
}

export interface paymentconfirmationSubscriptionPayload {
  mutation: MutationType;
  node: paymentconfirmation;
  updatedFields: String[];
  previousValues: paymentconfirmationPreviousValues;
}

export interface paymentconfirmationSubscriptionPayloadPromise
  extends Promise<paymentconfirmationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = paymentconfirmationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = paymentconfirmationPreviousValuesPromise>() => T;
}

export interface paymentconfirmationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<paymentconfirmationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = paymentconfirmationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = paymentconfirmationPreviousValuesSubscription>() => T;
}

export interface paymentconfirmationConnection {
  pageInfo: PageInfo;
  edges: paymentconfirmationEdge[];
}

export interface paymentconfirmationConnectionPromise
  extends Promise<paymentconfirmationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<paymentconfirmationEdge>>() => T;
  aggregate: <T = AggregatepaymentconfirmationPromise>() => T;
}

export interface paymentconfirmationConnectionSubscription
  extends Promise<AsyncIterator<paymentconfirmationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <
    T = Promise<AsyncIterator<paymentconfirmationEdgeSubscription>>
  >() => T;
  aggregate: <T = AggregatepaymentconfirmationSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "paymentconfirmation",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;