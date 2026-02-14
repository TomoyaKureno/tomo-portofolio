// src/lib/hygraphFetcher.ts
import { GraphQLClient } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_URL!;
const HYGRAPH_REVALIDATE_SECONDS = 3600;

const graphQLClient = new GraphQLClient(endpoint, {
  fetch: (input, init) =>
    fetch(input, {
      ...init,
      cache: "force-cache",
      next: {
        revalidate: HYGRAPH_REVALIDATE_SECONDS,
        tags: ["hygraph"],
      },
    }),
});

export async function hygraphFetcher<
  TData,
  TVariables extends object | undefined = undefined
>(
  document: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  return graphQLClient.request(document, variables);
}
