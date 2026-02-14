import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL!);

export function hygraphClientFetcher<
  TData,
  TVariables extends object | undefined = undefined
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
): Promise<TData> {
  return client.request(document, variables);
}
