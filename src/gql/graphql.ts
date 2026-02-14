/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  fileCertificate: Array<Certificate>;
  /** The file name */
  fileName: Scalars['String']['output'];
  galeriesProject: Array<Project>;
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageProfile: Array<Profile>;
  issuerImageCertificate: Array<Certificate>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetFileCertificateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CertificateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateWhereInput>;
};


/** Asset system model */
export type AssetGaleriesProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageProfileArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetIssuerImageCertificateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CertificateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileCertificate?: InputMaybe<CertificateCreateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  galeriesGroupRecord?: InputMaybe<GroupRecordCreateManyInlineInput>;
  galeriesProject?: InputMaybe<ProjectCreateManyInlineInput>;
  galeriesResume?: InputMaybe<ResumeCreateManyInlineInput>;
  galeriesResumeRecord?: InputMaybe<ResumeRecordCreateManyInlineInput>;
  imageProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  issuerImageCertificate?: InputMaybe<CertificateCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileCertificate_every?: InputMaybe<CertificateWhereInput>;
  fileCertificate_none?: InputMaybe<CertificateWhereInput>;
  fileCertificate_some?: InputMaybe<CertificateWhereInput>;
  galeriesProject_every?: InputMaybe<ProjectWhereInput>;
  galeriesProject_none?: InputMaybe<ProjectWhereInput>;
  galeriesProject_some?: InputMaybe<ProjectWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProfile_every?: InputMaybe<ProfileWhereInput>;
  imageProfile_none?: InputMaybe<ProfileWhereInput>;
  imageProfile_some?: InputMaybe<ProfileWhereInput>;
  issuerImageCertificate_every?: InputMaybe<CertificateWhereInput>;
  issuerImageCertificate_none?: InputMaybe<CertificateWhereInput>;
  issuerImageCertificate_some?: InputMaybe<CertificateWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileCertificate?: InputMaybe<CertificateUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  galeriesGroupRecord?: InputMaybe<GroupRecordUpdateManyInlineInput>;
  galeriesProject?: InputMaybe<ProjectUpdateManyInlineInput>;
  galeriesResume?: InputMaybe<ResumeUpdateManyInlineInput>;
  galeriesResumeRecord?: InputMaybe<ResumeRecordUpdateManyInlineInput>;
  imageProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  issuerImageCertificate?: InputMaybe<CertificateUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileCertificate_every?: InputMaybe<CertificateWhereInput>;
  fileCertificate_none?: InputMaybe<CertificateWhereInput>;
  fileCertificate_some?: InputMaybe<CertificateWhereInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  galeriesProject_every?: InputMaybe<ProjectWhereInput>;
  galeriesProject_none?: InputMaybe<ProjectWhereInput>;
  galeriesProject_some?: InputMaybe<ProjectWhereInput>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProfile_every?: InputMaybe<ProfileWhereInput>;
  imageProfile_none?: InputMaybe<ProfileWhereInput>;
  imageProfile_some?: InputMaybe<ProfileWhereInput>;
  issuerImageCertificate_every?: InputMaybe<CertificateWhereInput>;
  issuerImageCertificate_none?: InputMaybe<CertificateWhereInput>;
  issuerImageCertificate_some?: InputMaybe<CertificateWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Certificate's Model */
export type Certificate = Entity & Node & {
  __typename?: 'Certificate';
  categories: Array<CertificateCategory>;
  certificateCode: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Certificate>;
  /** Certificate file in PDF type */
  file: Asset;
  /** List of Certificate versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  issued: Scalars['Date']['output'];
  issuer: Scalars['String']['output'];
  issuerImage: Asset;
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sourceUrl?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Certificate's Model */
export type CertificateCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CertificateCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateCategoryWhereInput>;
};


/** Certificate's Model */
export type CertificateCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Certificate's Model */
export type CertificateDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Certificate's Model */
export type CertificateFileArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Certificate's Model */
export type CertificateHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Certificate's Model */
export type CertificateIssuerImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Certificate's Model */
export type CertificatePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Certificate's Model */
export type CertificateScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Certificate's Model */
export type CertificateUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CertificateCategory = Entity & Node & {
  __typename?: 'CertificateCategory';
  certificates: Array<Certificate>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CertificateCategory>;
  /** List of CertificateCategory versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CertificateCategoryCertificatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CertificateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateWhereInput>;
};


export type CertificateCategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CertificateCategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CertificateCategoryHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CertificateCategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CertificateCategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CertificateCategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CertificateCategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CertificateCategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CertificateCategoryConnection = {
  __typename?: 'CertificateCategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CertificateCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CertificateCategoryCreateInput = {
  certificates?: InputMaybe<CertificateCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CertificateCategoryCreateManyInlineInput = {
  /** Connect multiple existing CertificateCategory documents */
  connect?: InputMaybe<Array<CertificateCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing CertificateCategory documents */
  create?: InputMaybe<Array<CertificateCategoryCreateInput>>;
};

export type CertificateCategoryCreateOneInlineInput = {
  /** Connect one existing CertificateCategory document */
  connect?: InputMaybe<CertificateCategoryWhereUniqueInput>;
  /** Create and connect one CertificateCategory document */
  create?: InputMaybe<CertificateCategoryCreateInput>;
};

/** An edge in a connection. */
export type CertificateCategoryEdge = {
  __typename?: 'CertificateCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CertificateCategory;
};

/** Identifies documents */
export type CertificateCategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  certificates_every?: InputMaybe<CertificateWhereInput>;
  certificates_none?: InputMaybe<CertificateWhereInput>;
  certificates_some?: InputMaybe<CertificateWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CertificateCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CertificateCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CertificateCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CertificateCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CertificateCategoryUpdateInput = {
  certificates?: InputMaybe<CertificateUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateCategoryUpdateManyInlineInput = {
  /** Connect multiple existing CertificateCategory documents */
  connect?: InputMaybe<Array<CertificateCategoryConnectInput>>;
  /** Create and connect multiple CertificateCategory documents */
  create?: InputMaybe<Array<CertificateCategoryCreateInput>>;
  /** Delete multiple CertificateCategory documents */
  delete?: InputMaybe<Array<CertificateCategoryWhereUniqueInput>>;
  /** Disconnect multiple CertificateCategory documents */
  disconnect?: InputMaybe<Array<CertificateCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CertificateCategory documents */
  set?: InputMaybe<Array<CertificateCategoryWhereUniqueInput>>;
  /** Update multiple CertificateCategory documents */
  update?: InputMaybe<Array<CertificateCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CertificateCategory documents */
  upsert?: InputMaybe<Array<CertificateCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CertificateCategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateCategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CertificateCategoryUpdateManyInput;
  /** Document search */
  where: CertificateCategoryWhereInput;
};

export type CertificateCategoryUpdateOneInlineInput = {
  /** Connect existing CertificateCategory document */
  connect?: InputMaybe<CertificateCategoryWhereUniqueInput>;
  /** Create and connect one CertificateCategory document */
  create?: InputMaybe<CertificateCategoryCreateInput>;
  /** Delete currently connected CertificateCategory document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CertificateCategory document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CertificateCategory document */
  update?: InputMaybe<CertificateCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CertificateCategory document */
  upsert?: InputMaybe<CertificateCategoryUpsertWithNestedWhereUniqueInput>;
};

export type CertificateCategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CertificateCategoryUpdateInput;
  /** Unique document search */
  where: CertificateCategoryWhereUniqueInput;
};

export type CertificateCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CertificateCategoryCreateInput;
  /** Update document if it exists */
  update: CertificateCategoryUpdateInput;
};

export type CertificateCategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CertificateCategoryUpsertInput;
  /** Unique document search */
  where: CertificateCategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CertificateCategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CertificateCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  certificates_every?: InputMaybe<CertificateWhereInput>;
  certificates_none?: InputMaybe<CertificateWhereInput>;
  certificates_some?: InputMaybe<CertificateWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CertificateCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CertificateCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CertificateCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CertificateCategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateCategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateCategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateCategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CertificateCategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CertificateCategory record uniquely */
export type CertificateCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CertificateWhereUniqueInput;
};

/** A connection to a list of items. */
export type CertificateConnection = {
  __typename?: 'CertificateConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CertificateEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CertificateCreateInput = {
  categories?: InputMaybe<CertificateCategoryCreateManyInlineInput>;
  certificateCode: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  file: AssetCreateOneInlineInput;
  issued: Scalars['Date']['input'];
  issuer: Scalars['String']['input'];
  issuerImage: AssetCreateOneInlineInput;
  name: Scalars['String']['input'];
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CertificateCreateManyInlineInput = {
  /** Connect multiple existing Certificate documents */
  connect?: InputMaybe<Array<CertificateWhereUniqueInput>>;
  /** Create and connect multiple existing Certificate documents */
  create?: InputMaybe<Array<CertificateCreateInput>>;
};

export type CertificateCreateOneInlineInput = {
  /** Connect one existing Certificate document */
  connect?: InputMaybe<CertificateWhereUniqueInput>;
  /** Create and connect one Certificate document */
  create?: InputMaybe<CertificateCreateInput>;
};

/** An edge in a connection. */
export type CertificateEdge = {
  __typename?: 'CertificateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Certificate;
};

/** Identifies documents */
export type CertificateManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<CertificateCategoryWhereInput>;
  categories_none?: InputMaybe<CertificateCategoryWhereInput>;
  categories_some?: InputMaybe<CertificateCategoryWhereInput>;
  certificateCode?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  certificateCode_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  certificateCode_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  certificateCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  certificateCode_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  certificateCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  certificateCode_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  certificateCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  certificateCode_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  certificateCode_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CertificateWhereStageInput>;
  documentInStages_none?: InputMaybe<CertificateWhereStageInput>;
  documentInStages_some?: InputMaybe<CertificateWhereStageInput>;
  file?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  issued?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  issued_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  issued_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  issued_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  issued_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  issued_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  issued_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  issued_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  issuerImage?: InputMaybe<AssetWhereInput>;
  /** All values containing the given string. */
  issuer_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  issuer_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  issuer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  issuer_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  issuer_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  issuer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  issuer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  issuer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  issuer_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sourceUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sourceUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sourceUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sourceUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sourceUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sourceUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sourceUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sourceUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sourceUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CertificateOrderByInput {
  CertificateCodeAsc = 'certificateCode_ASC',
  CertificateCodeDesc = 'certificateCode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IssuedAsc = 'issued_ASC',
  IssuedDesc = 'issued_DESC',
  IssuerAsc = 'issuer_ASC',
  IssuerDesc = 'issuer_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SourceUrlAsc = 'sourceUrl_ASC',
  SourceUrlDesc = 'sourceUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CertificateUpdateInput = {
  categories?: InputMaybe<CertificateCategoryUpdateManyInlineInput>;
  certificateCode?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<AssetUpdateOneInlineInput>;
  issued?: InputMaybe<Scalars['Date']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  issuerImage?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateUpdateManyInlineInput = {
  /** Connect multiple existing Certificate documents */
  connect?: InputMaybe<Array<CertificateConnectInput>>;
  /** Create and connect multiple Certificate documents */
  create?: InputMaybe<Array<CertificateCreateInput>>;
  /** Delete multiple Certificate documents */
  delete?: InputMaybe<Array<CertificateWhereUniqueInput>>;
  /** Disconnect multiple Certificate documents */
  disconnect?: InputMaybe<Array<CertificateWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Certificate documents */
  set?: InputMaybe<Array<CertificateWhereUniqueInput>>;
  /** Update multiple Certificate documents */
  update?: InputMaybe<Array<CertificateUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Certificate documents */
  upsert?: InputMaybe<Array<CertificateUpsertWithNestedWhereUniqueInput>>;
};

export type CertificateUpdateManyInput = {
  certificateCode?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  issued?: InputMaybe<Scalars['Date']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CertificateUpdateManyInput;
  /** Document search */
  where: CertificateWhereInput;
};

export type CertificateUpdateOneInlineInput = {
  /** Connect existing Certificate document */
  connect?: InputMaybe<CertificateWhereUniqueInput>;
  /** Create and connect one Certificate document */
  create?: InputMaybe<CertificateCreateInput>;
  /** Delete currently connected Certificate document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Certificate document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Certificate document */
  update?: InputMaybe<CertificateUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Certificate document */
  upsert?: InputMaybe<CertificateUpsertWithNestedWhereUniqueInput>;
};

export type CertificateUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CertificateUpdateInput;
  /** Unique document search */
  where: CertificateWhereUniqueInput;
};

export type CertificateUpsertInput = {
  /** Create document if it didn't exist */
  create: CertificateCreateInput;
  /** Update document if it exists */
  update: CertificateUpdateInput;
};

export type CertificateUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CertificateUpsertInput;
  /** Unique document search */
  where: CertificateWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CertificateWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CertificateWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<CertificateCategoryWhereInput>;
  categories_none?: InputMaybe<CertificateCategoryWhereInput>;
  categories_some?: InputMaybe<CertificateCategoryWhereInput>;
  certificateCode?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  certificateCode_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  certificateCode_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  certificateCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  certificateCode_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  certificateCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  certificateCode_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  certificateCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  certificateCode_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  certificateCode_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CertificateWhereStageInput>;
  documentInStages_none?: InputMaybe<CertificateWhereStageInput>;
  documentInStages_some?: InputMaybe<CertificateWhereStageInput>;
  file?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  issued?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  issued_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  issued_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  issued_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  issued_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  issued_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  issued_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  issued_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  issuerImage?: InputMaybe<AssetWhereInput>;
  /** All values containing the given string. */
  issuer_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  issuer_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  issuer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  issuer_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  issuer_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  issuer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  issuer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  issuer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  issuer_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sourceUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sourceUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sourceUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sourceUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sourceUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sourceUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sourceUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sourceUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sourceUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CertificateWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificateWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificateWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificateWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CertificateWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Certificate record uniquely */
export type CertificateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** Education's Model */
export type Education = Entity & Node & {
  __typename?: 'Education';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Education>;
  gpa?: Maybe<Scalars['Float']['output']>;
  /** List of Education versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  maxScore?: Maybe<Scalars['Float']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  resume: Resume;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Education's Model */
export type EducationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Education's Model */
export type EducationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Education's Model */
export type EducationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Education's Model */
export type EducationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Education's Model */
export type EducationResumeArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Education's Model */
export type EducationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Education's Model */
export type EducationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EducationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EducationWhereUniqueInput;
};

/** A connection to a list of items. */
export type EducationConnection = {
  __typename?: 'EducationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EducationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EducationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  gpa?: InputMaybe<Scalars['Float']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  resume: ResumeCreateOneInlineInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EducationCreateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Create and connect multiple existing Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>;
};

export type EducationCreateOneInlineInput = {
  /** Connect one existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>;
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>;
};

/** An edge in a connection. */
export type EducationEdge = {
  __typename?: 'EducationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Education;
};

/** Identifies documents */
export type EducationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EducationWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationWhereStageInput>;
  gpa?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  gpa_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  gpa_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  gpa_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  gpa_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  gpa_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  gpa_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  gpa_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  maxScore_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  maxScore_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  maxScore_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  maxScore_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  maxScore_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  maxScore_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  maxScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resume?: InputMaybe<ResumeWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EducationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GpaAsc = 'gpa_ASC',
  GpaDesc = 'gpa_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MaxScoreAsc = 'maxScore_ASC',
  MaxScoreDesc = 'maxScore_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EducationUpdateInput = {
  gpa?: InputMaybe<Scalars['Float']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  resume?: InputMaybe<ResumeUpdateOneInlineInput>;
};

export type EducationUpdateManyInlineInput = {
  /** Connect multiple existing Education documents */
  connect?: InputMaybe<Array<EducationConnectInput>>;
  /** Create and connect multiple Education documents */
  create?: InputMaybe<Array<EducationCreateInput>>;
  /** Delete multiple Education documents */
  delete?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Disconnect multiple Education documents */
  disconnect?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Education documents */
  set?: InputMaybe<Array<EducationWhereUniqueInput>>;
  /** Update multiple Education documents */
  update?: InputMaybe<Array<EducationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Education documents */
  upsert?: InputMaybe<Array<EducationUpsertWithNestedWhereUniqueInput>>;
};

export type EducationUpdateManyInput = {
  gpa?: InputMaybe<Scalars['Float']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
};

export type EducationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EducationUpdateManyInput;
  /** Document search */
  where: EducationWhereInput;
};

export type EducationUpdateOneInlineInput = {
  /** Connect existing Education document */
  connect?: InputMaybe<EducationWhereUniqueInput>;
  /** Create and connect one Education document */
  create?: InputMaybe<EducationCreateInput>;
  /** Delete currently connected Education document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Education document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Education document */
  update?: InputMaybe<EducationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Education document */
  upsert?: InputMaybe<EducationUpsertWithNestedWhereUniqueInput>;
};

export type EducationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EducationUpdateInput;
  /** Unique document search */
  where: EducationWhereUniqueInput;
};

export type EducationUpsertInput = {
  /** Create document if it didn't exist */
  create: EducationCreateInput;
  /** Update document if it exists */
  update: EducationUpdateInput;
};

export type EducationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EducationUpsertInput;
  /** Unique document search */
  where: EducationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EducationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EducationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EducationWhereStageInput>;
  documentInStages_none?: InputMaybe<EducationWhereStageInput>;
  documentInStages_some?: InputMaybe<EducationWhereStageInput>;
  gpa?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  gpa_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  gpa_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  gpa_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  gpa_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  gpa_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  gpa_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  gpa_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  maxScore?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  maxScore_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  maxScore_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  maxScore_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  maxScore_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  maxScore_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  maxScore_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  maxScore_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resume?: InputMaybe<ResumeWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EducationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EducationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EducationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EducationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EducationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Education record uniquely */
export type EducationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  /** Certificate's Model */
  Certificate = 'Certificate',
  CertificateCategory = 'CertificateCategory',
  /** Education's Model */
  Education = 'Education',
  /** Experience's Model */
  Experience = 'Experience',
  /** Group Record's Component */
  GroupRecord = 'GroupRecord',
  /** Profile's model */
  Profile = 'Profile',
  /** Project's Model */
  Project = 'Project',
  ProjectCategory = 'ProjectCategory',
  /** Resume's Component */
  Resume = 'Resume',
  /** Resume Record's Component */
  ResumeRecord = 'ResumeRecord',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Skill = 'Skill',
  /** Social Media's Model */
  SocialMedia = 'SocialMedia',
  Technology = 'Technology',
  /** Testimonial's Model */
  Testimonial = 'Testimonial',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

/** Experience's Model */
export type Experience = Entity & Node & {
  __typename?: 'Experience';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Experience>;
  /** List of Experience versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  resume: Resume;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  technologies: Array<Technology>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Experience's Model */
export type ExperienceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Experience's Model */
export type ExperienceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Experience's Model */
export type ExperienceHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Experience's Model */
export type ExperiencePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Experience's Model */
export type ExperienceResumeArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Experience's Model */
export type ExperienceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Experience's Model */
export type ExperienceTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyWhereInput>;
};


/** Experience's Model */
export type ExperienceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ExperienceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ExperienceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ExperienceConnection = {
  __typename?: 'ExperienceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ExperienceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ExperienceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  resume: ResumeCreateOneInlineInput;
  technologies?: InputMaybe<TechnologyCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ExperienceCreateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Create and connect multiple existing Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>;
};

export type ExperienceCreateOneInlineInput = {
  /** Connect one existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>;
};

/** An edge in a connection. */
export type ExperienceEdge = {
  __typename?: 'ExperienceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Experience;
};

/** Identifies documents */
export type ExperienceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resume?: InputMaybe<ResumeWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ExperienceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ExperienceUpdateInput = {
  resume?: InputMaybe<ResumeUpdateOneInlineInput>;
  technologies?: InputMaybe<TechnologyUpdateManyInlineInput>;
};

export type ExperienceUpdateManyInlineInput = {
  /** Connect multiple existing Experience documents */
  connect?: InputMaybe<Array<ExperienceConnectInput>>;
  /** Create and connect multiple Experience documents */
  create?: InputMaybe<Array<ExperienceCreateInput>>;
  /** Delete multiple Experience documents */
  delete?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Disconnect multiple Experience documents */
  disconnect?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Experience documents */
  set?: InputMaybe<Array<ExperienceWhereUniqueInput>>;
  /** Update multiple Experience documents */
  update?: InputMaybe<Array<ExperienceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Experience documents */
  upsert?: InputMaybe<Array<ExperienceUpsertWithNestedWhereUniqueInput>>;
};

export type ExperienceUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ExperienceUpdateManyInput;
  /** Document search */
  where: ExperienceWhereInput;
};

export type ExperienceUpdateOneInlineInput = {
  /** Connect existing Experience document */
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  /** Create and connect one Experience document */
  create?: InputMaybe<ExperienceCreateInput>;
  /** Delete currently connected Experience document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Experience document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Experience document */
  update?: InputMaybe<ExperienceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Experience document */
  upsert?: InputMaybe<ExperienceUpsertWithNestedWhereUniqueInput>;
};

export type ExperienceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ExperienceUpdateInput;
  /** Unique document search */
  where: ExperienceWhereUniqueInput;
};

export type ExperienceUpsertInput = {
  /** Create document if it didn't exist */
  create: ExperienceCreateInput;
  /** Update document if it exists */
  update: ExperienceUpdateInput;
};

export type ExperienceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ExperienceUpsertInput;
  /** Unique document search */
  where: ExperienceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ExperienceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ExperienceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_none?: InputMaybe<ExperienceWhereStageInput>;
  documentInStages_some?: InputMaybe<ExperienceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resume?: InputMaybe<ResumeWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ExperienceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ExperienceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ExperienceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Experience record uniquely */
export type ExperienceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Group Record's Component */
export type GroupRecord = Entity & {
  __typename?: 'GroupRecord';
  galeries: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  resumeRecords: Array<ResumeRecord>;
  /** System stage field */
  stage: Stage;
  textRecords: Array<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Group Record's Component */
export type GroupRecordGaleriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


/** Group Record's Component */
export type GroupRecordResumeRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ResumeRecordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ResumeRecordWhereInput>;
};

export type GroupRecordConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GroupRecordWhereUniqueInput;
};

/** A connection to a list of items. */
export type GroupRecordConnection = {
  __typename?: 'GroupRecordConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GroupRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GroupRecordCreateInput = {
  galeries?: InputMaybe<AssetCreateManyInlineInput>;
  label: Scalars['String']['input'];
  resumeRecords?: InputMaybe<ResumeRecordCreateManyInlineInput>;
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupRecordCreateManyInlineInput = {
  /** Create and connect multiple existing GroupRecord documents */
  create?: InputMaybe<Array<GroupRecordCreateInput>>;
};

export type GroupRecordCreateOneInlineInput = {
  /** Create and connect one GroupRecord document */
  create?: InputMaybe<GroupRecordCreateInput>;
};

export type GroupRecordCreateWithPositionInput = {
  /** Document to create */
  data: GroupRecordCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type GroupRecordEdge = {
  __typename?: 'GroupRecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GroupRecord;
};

/** Identifies documents */
export type GroupRecordManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  resumeRecords_every?: InputMaybe<ResumeRecordWhereInput>;
  resumeRecords_none?: InputMaybe<ResumeRecordWhereInput>;
  resumeRecords_some?: InputMaybe<ResumeRecordWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  textRecords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  textRecords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  textRecords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  textRecords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum GroupRecordOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  TextRecordsAsc = 'textRecords_ASC',
  TextRecordsDesc = 'textRecords_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GroupRecordParent = Resume;

export type GroupRecordParentConnectInput = {
  Resume?: InputMaybe<ResumeConnectInput>;
};

export type GroupRecordParentCreateInput = {
  Resume?: InputMaybe<ResumeCreateInput>;
};

export type GroupRecordParentCreateManyInlineInput = {
  /** Create and connect multiple existing GroupRecordParent documents */
  create?: InputMaybe<Array<GroupRecordParentCreateInput>>;
};

export type GroupRecordParentCreateOneInlineInput = {
  /** Create and connect one GroupRecordParent document */
  create?: InputMaybe<GroupRecordParentCreateInput>;
};

export type GroupRecordParentCreateWithPositionInput = {
  Resume?: InputMaybe<ResumeCreateWithPositionInput>;
};

export type GroupRecordParentUpdateInput = {
  Resume?: InputMaybe<ResumeUpdateInput>;
};

export type GroupRecordParentUpdateManyInlineInput = {
  /** Create and connect multiple GroupRecordParent component instances */
  create?: InputMaybe<Array<GroupRecordParentCreateWithPositionInput>>;
  /** Delete multiple GroupRecordParent documents */
  delete?: InputMaybe<Array<GroupRecordParentWhereUniqueInput>>;
  /** Update multiple GroupRecordParent component instances */
  update?: InputMaybe<Array<GroupRecordParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GroupRecordParent component instances */
  upsert?: InputMaybe<Array<GroupRecordParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GroupRecordParentUpdateManyWithNestedWhereInput = {
  Resume?: InputMaybe<ResumeUpdateManyWithNestedWhereInput>;
};

export type GroupRecordParentUpdateOneInlineInput = {
  /** Create and connect one GroupRecordParent document */
  create?: InputMaybe<GroupRecordParentCreateInput>;
  /** Delete currently connected GroupRecordParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GroupRecordParent document */
  update?: InputMaybe<GroupRecordParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GroupRecordParent document */
  upsert?: InputMaybe<GroupRecordParentUpsertWithNestedWhereUniqueInput>;
};

export type GroupRecordParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Resume?: InputMaybe<ResumeUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type GroupRecordParentUpdateWithNestedWhereUniqueInput = {
  Resume?: InputMaybe<ResumeUpdateWithNestedWhereUniqueInput>;
};

export type GroupRecordParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Resume?: InputMaybe<ResumeUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type GroupRecordParentUpsertWithNestedWhereUniqueInput = {
  Resume?: InputMaybe<ResumeUpsertWithNestedWhereUniqueInput>;
};

export type GroupRecordParentWhereInput = {
  Resume?: InputMaybe<ResumeWhereInput>;
};

export type GroupRecordParentWhereUniqueInput = {
  Resume?: InputMaybe<ResumeWhereUniqueInput>;
};

export type GroupRecordUpdateInput = {
  galeries?: InputMaybe<AssetUpdateManyInlineInput>;
  label?: InputMaybe<Scalars['String']['input']>;
  resumeRecords?: InputMaybe<ResumeRecordUpdateManyInlineInput>;
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GroupRecordUpdateManyInlineInput = {
  /** Create and connect multiple GroupRecord component instances */
  create?: InputMaybe<Array<GroupRecordCreateWithPositionInput>>;
  /** Delete multiple GroupRecord documents */
  delete?: InputMaybe<Array<GroupRecordWhereUniqueInput>>;
  /** Update multiple GroupRecord component instances */
  update?: InputMaybe<Array<GroupRecordUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GroupRecord component instances */
  upsert?: InputMaybe<Array<GroupRecordUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GroupRecordUpdateManyInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GroupRecordUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GroupRecordUpdateManyInput;
  /** Document search */
  where: GroupRecordWhereInput;
};

export type GroupRecordUpdateOneInlineInput = {
  /** Create and connect one GroupRecord document */
  create?: InputMaybe<GroupRecordCreateInput>;
  /** Delete currently connected GroupRecord document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GroupRecord document */
  update?: InputMaybe<GroupRecordUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GroupRecord document */
  upsert?: InputMaybe<GroupRecordUpsertWithNestedWhereUniqueInput>;
};

export type GroupRecordUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<GroupRecordUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GroupRecordWhereUniqueInput;
};

export type GroupRecordUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GroupRecordUpdateInput;
  /** Unique document search */
  where: GroupRecordWhereUniqueInput;
};

export type GroupRecordUpsertInput = {
  /** Create document if it didn't exist */
  create: GroupRecordCreateInput;
  /** Update document if it exists */
  update: GroupRecordUpdateInput;
};

export type GroupRecordUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<GroupRecordUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GroupRecordWhereUniqueInput;
};

export type GroupRecordUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GroupRecordUpsertInput;
  /** Unique document search */
  where: GroupRecordWhereUniqueInput;
};

/** Identifies documents */
export type GroupRecordWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GroupRecordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  resumeRecords_every?: InputMaybe<ResumeRecordWhereInput>;
  resumeRecords_none?: InputMaybe<ResumeRecordWhereInput>;
  resumeRecords_some?: InputMaybe<ResumeRecordWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  textRecords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  textRecords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  textRecords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  textRecords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References GroupRecord record uniquely */
export type GroupRecordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one certificate */
  createCertificate?: Maybe<Certificate>;
  /** Create one certificateCategory */
  createCertificateCategory?: Maybe<CertificateCategory>;
  /** Create one education */
  createEducation?: Maybe<Education>;
  /** Create one experience */
  createExperience?: Maybe<Experience>;
  /** Create one profile */
  createProfile?: Maybe<Profile>;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Create one projectCategory */
  createProjectCategory?: Maybe<ProjectCategory>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one skill */
  createSkill?: Maybe<Skill>;
  /** Create one socialMedia */
  createSocialMedia?: Maybe<SocialMedia>;
  /** Create one technology */
  createTechnology?: Maybe<Technology>;
  /** Create one testimonial */
  createTestimonial?: Maybe<Testimonial>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one certificate from _all_ existing stages. Returns deleted document. */
  deleteCertificate?: Maybe<Certificate>;
  /** Delete one certificateCategory from _all_ existing stages. Returns deleted document. */
  deleteCertificateCategory?: Maybe<CertificateCategory>;
  /** Delete one education from _all_ existing stages. Returns deleted document. */
  deleteEducation?: Maybe<Education>;
  /** Delete one experience from _all_ existing stages. Returns deleted document. */
  deleteExperience?: Maybe<Experience>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CertificateCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyCertificateCategoriesConnection)
   */
  deleteManyCertificateCategories: BatchPayload;
  /** Delete many CertificateCategory documents, return deleted documents */
  deleteManyCertificateCategoriesConnection: CertificateCategoryConnection;
  /**
   * Delete many Certificate documents
   * @deprecated Please use the new paginated many mutation (deleteManyCertificatesConnection)
   */
  deleteManyCertificates: BatchPayload;
  /** Delete many Certificate documents, return deleted documents */
  deleteManyCertificatesConnection: CertificateConnection;
  /**
   * Delete many Education documents
   * @deprecated Please use the new paginated many mutation (deleteManyEducationsConnection)
   */
  deleteManyEducations: BatchPayload;
  /** Delete many Education documents, return deleted documents */
  deleteManyEducationsConnection: EducationConnection;
  /**
   * Delete many Experience documents
   * @deprecated Please use the new paginated many mutation (deleteManyExperiencesConnection)
   */
  deleteManyExperiences: BatchPayload;
  /** Delete many Experience documents, return deleted documents */
  deleteManyExperiencesConnection: ExperienceConnection;
  /**
   * Delete many Profile documents
   * @deprecated Please use the new paginated many mutation (deleteManyProfilesConnection)
   */
  deleteManyProfiles: BatchPayload;
  /** Delete many Profile documents, return deleted documents */
  deleteManyProfilesConnection: ProfileConnection;
  /**
   * Delete many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectCategoriesConnection)
   */
  deleteManyProjectCategories: BatchPayload;
  /** Delete many ProjectCategory documents, return deleted documents */
  deleteManyProjectCategoriesConnection: ProjectCategoryConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /**
   * Delete many Skill documents
   * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
   */
  deleteManySkills: BatchPayload;
  /** Delete many Skill documents, return deleted documents */
  deleteManySkillsConnection: SkillConnection;
  /**
   * Delete many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialMediasConnection)
   */
  deleteManySocialMedias: BatchPayload;
  /** Delete many SocialMedia documents, return deleted documents */
  deleteManySocialMediasConnection: SocialMediaConnection;
  /**
   * Delete many Technology documents
   * @deprecated Please use the new paginated many mutation (deleteManyTechnologiesConnection)
   */
  deleteManyTechnologies: BatchPayload;
  /** Delete many Technology documents, return deleted documents */
  deleteManyTechnologiesConnection: TechnologyConnection;
  /**
   * Delete many Testimonial documents
   * @deprecated Please use the new paginated many mutation (deleteManyTestimonialsConnection)
   */
  deleteManyTestimonials: BatchPayload;
  /** Delete many Testimonial documents, return deleted documents */
  deleteManyTestimonialsConnection: TestimonialConnection;
  /** Delete one profile from _all_ existing stages. Returns deleted document. */
  deleteProfile?: Maybe<Profile>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Delete one projectCategory from _all_ existing stages. Returns deleted document. */
  deleteProjectCategory?: Maybe<ProjectCategory>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one skill from _all_ existing stages. Returns deleted document. */
  deleteSkill?: Maybe<Skill>;
  /** Delete one socialMedia from _all_ existing stages. Returns deleted document. */
  deleteSocialMedia?: Maybe<SocialMedia>;
  /** Delete one technology from _all_ existing stages. Returns deleted document. */
  deleteTechnology?: Maybe<Technology>;
  /** Delete one testimonial from _all_ existing stages. Returns deleted document. */
  deleteTestimonial?: Maybe<Testimonial>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one certificate */
  publishCertificate?: Maybe<Certificate>;
  /** Publish one certificateCategory */
  publishCertificateCategory?: Maybe<CertificateCategory>;
  /** Publish one education */
  publishEducation?: Maybe<Education>;
  /** Publish one experience */
  publishExperience?: Maybe<Experience>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CertificateCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyCertificateCategoriesConnection)
   */
  publishManyCertificateCategories: BatchPayload;
  /** Publish many CertificateCategory documents */
  publishManyCertificateCategoriesConnection: CertificateCategoryConnection;
  /**
   * Publish many Certificate documents
   * @deprecated Please use the new paginated many mutation (publishManyCertificatesConnection)
   */
  publishManyCertificates: BatchPayload;
  /** Publish many Certificate documents */
  publishManyCertificatesConnection: CertificateConnection;
  /**
   * Publish many Education documents
   * @deprecated Please use the new paginated many mutation (publishManyEducationsConnection)
   */
  publishManyEducations: BatchPayload;
  /** Publish many Education documents */
  publishManyEducationsConnection: EducationConnection;
  /**
   * Publish many Experience documents
   * @deprecated Please use the new paginated many mutation (publishManyExperiencesConnection)
   */
  publishManyExperiences: BatchPayload;
  /** Publish many Experience documents */
  publishManyExperiencesConnection: ExperienceConnection;
  /**
   * Publish many Profile documents
   * @deprecated Please use the new paginated many mutation (publishManyProfilesConnection)
   */
  publishManyProfiles: BatchPayload;
  /** Publish many Profile documents */
  publishManyProfilesConnection: ProfileConnection;
  /**
   * Publish many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectCategoriesConnection)
   */
  publishManyProjectCategories: BatchPayload;
  /** Publish many ProjectCategory documents */
  publishManyProjectCategoriesConnection: ProjectCategoryConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /**
   * Publish many Skill documents
   * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
   */
  publishManySkills: BatchPayload;
  /** Publish many Skill documents */
  publishManySkillsConnection: SkillConnection;
  /**
   * Publish many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (publishManySocialMediasConnection)
   */
  publishManySocialMedias: BatchPayload;
  /** Publish many SocialMedia documents */
  publishManySocialMediasConnection: SocialMediaConnection;
  /**
   * Publish many Technology documents
   * @deprecated Please use the new paginated many mutation (publishManyTechnologiesConnection)
   */
  publishManyTechnologies: BatchPayload;
  /** Publish many Technology documents */
  publishManyTechnologiesConnection: TechnologyConnection;
  /**
   * Publish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (publishManyTestimonialsConnection)
   */
  publishManyTestimonials: BatchPayload;
  /** Publish many Testimonial documents */
  publishManyTestimonialsConnection: TestimonialConnection;
  /** Publish one profile */
  publishProfile?: Maybe<Profile>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Publish one projectCategory */
  publishProjectCategory?: Maybe<ProjectCategory>;
  /** Publish one skill */
  publishSkill?: Maybe<Skill>;
  /** Publish one socialMedia */
  publishSocialMedia?: Maybe<SocialMedia>;
  /** Publish one technology */
  publishTechnology?: Maybe<Technology>;
  /** Publish one testimonial */
  publishTestimonial?: Maybe<Testimonial>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one certificate */
  schedulePublishCertificate?: Maybe<Certificate>;
  /** Schedule to publish one certificateCategory */
  schedulePublishCertificateCategory?: Maybe<CertificateCategory>;
  /** Schedule to publish one education */
  schedulePublishEducation?: Maybe<Education>;
  /** Schedule to publish one experience */
  schedulePublishExperience?: Maybe<Experience>;
  /** Schedule to publish one profile */
  schedulePublishProfile?: Maybe<Profile>;
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>;
  /** Schedule to publish one projectCategory */
  schedulePublishProjectCategory?: Maybe<ProjectCategory>;
  /** Schedule to publish one skill */
  schedulePublishSkill?: Maybe<Skill>;
  /** Schedule to publish one socialMedia */
  schedulePublishSocialMedia?: Maybe<SocialMedia>;
  /** Schedule to publish one technology */
  schedulePublishTechnology?: Maybe<Technology>;
  /** Schedule to publish one testimonial */
  schedulePublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one certificate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCertificate?: Maybe<Certificate>;
  /** Unpublish one certificateCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCertificateCategory?: Maybe<CertificateCategory>;
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEducation?: Maybe<Education>;
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishExperience?: Maybe<Experience>;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProfile?: Maybe<Profile>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>;
  /** Unpublish one projectCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProjectCategory?: Maybe<ProjectCategory>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSkill?: Maybe<Skill>;
  /** Unpublish one socialMedia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSocialMedia?: Maybe<SocialMedia>;
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTechnology?: Maybe<Technology>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one certificate from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCertificate?: Maybe<Certificate>;
  /** Unpublish one certificateCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCertificateCategory?: Maybe<CertificateCategory>;
  /** Unpublish one education from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEducation?: Maybe<Education>;
  /** Unpublish one experience from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishExperience?: Maybe<Experience>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CertificateCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCertificateCategoriesConnection)
   */
  unpublishManyCertificateCategories: BatchPayload;
  /** Find many CertificateCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCertificateCategoriesConnection: CertificateCategoryConnection;
  /**
   * Unpublish many Certificate documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCertificatesConnection)
   */
  unpublishManyCertificates: BatchPayload;
  /** Find many Certificate documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCertificatesConnection: CertificateConnection;
  /**
   * Unpublish many Education documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEducationsConnection)
   */
  unpublishManyEducations: BatchPayload;
  /** Find many Education documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEducationsConnection: EducationConnection;
  /**
   * Unpublish many Experience documents
   * @deprecated Please use the new paginated many mutation (unpublishManyExperiencesConnection)
   */
  unpublishManyExperiences: BatchPayload;
  /** Find many Experience documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyExperiencesConnection: ExperienceConnection;
  /**
   * Unpublish many Profile documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProfilesConnection)
   */
  unpublishManyProfiles: BatchPayload;
  /** Find many Profile documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProfilesConnection: ProfileConnection;
  /**
   * Unpublish many ProjectCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectCategoriesConnection)
   */
  unpublishManyProjectCategories: BatchPayload;
  /** Find many ProjectCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectCategoriesConnection: ProjectCategoryConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Unpublish many Skill documents
   * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
   */
  unpublishManySkills: BatchPayload;
  /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySkillsConnection: SkillConnection;
  /**
   * Unpublish many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialMediasConnection)
   */
  unpublishManySocialMedias: BatchPayload;
  /** Find many SocialMedia documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialMediasConnection: SocialMediaConnection;
  /**
   * Unpublish many Technology documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTechnologiesConnection)
   */
  unpublishManyTechnologies: BatchPayload;
  /** Find many Technology documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTechnologiesConnection: TechnologyConnection;
  /**
   * Unpublish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTestimonialsConnection)
   */
  unpublishManyTestimonials: BatchPayload;
  /** Find many Testimonial documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTestimonialsConnection: TestimonialConnection;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProfile?: Maybe<Profile>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Unpublish one projectCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProjectCategory?: Maybe<ProjectCategory>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSkill?: Maybe<Skill>;
  /** Unpublish one socialMedia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocialMedia?: Maybe<SocialMedia>;
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTechnology?: Maybe<Technology>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTestimonial?: Maybe<Testimonial>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one certificate */
  updateCertificate?: Maybe<Certificate>;
  /** Update one certificateCategory */
  updateCertificateCategory?: Maybe<CertificateCategory>;
  /** Update one education */
  updateEducation?: Maybe<Education>;
  /** Update one experience */
  updateExperience?: Maybe<Experience>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many certificateCategories
   * @deprecated Please use the new paginated many mutation (updateManyCertificateCategoriesConnection)
   */
  updateManyCertificateCategories: BatchPayload;
  /** Update many CertificateCategory documents */
  updateManyCertificateCategoriesConnection: CertificateCategoryConnection;
  /**
   * Update many certificates
   * @deprecated Please use the new paginated many mutation (updateManyCertificatesConnection)
   */
  updateManyCertificates: BatchPayload;
  /** Update many Certificate documents */
  updateManyCertificatesConnection: CertificateConnection;
  /**
   * Update many educations
   * @deprecated Please use the new paginated many mutation (updateManyEducationsConnection)
   */
  updateManyEducations: BatchPayload;
  /** Update many Education documents */
  updateManyEducationsConnection: EducationConnection;
  /**
   * Update many experiences
   * @deprecated Please use the new paginated many mutation (updateManyExperiencesConnection)
   */
  updateManyExperiences: BatchPayload;
  /** Update many Experience documents */
  updateManyExperiencesConnection: ExperienceConnection;
  /**
   * Update many profiles
   * @deprecated Please use the new paginated many mutation (updateManyProfilesConnection)
   */
  updateManyProfiles: BatchPayload;
  /** Update many Profile documents */
  updateManyProfilesConnection: ProfileConnection;
  /**
   * Update many projectCategories
   * @deprecated Please use the new paginated many mutation (updateManyProjectCategoriesConnection)
   */
  updateManyProjectCategories: BatchPayload;
  /** Update many ProjectCategory documents */
  updateManyProjectCategoriesConnection: ProjectCategoryConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /**
   * Update many skills
   * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
   */
  updateManySkills: BatchPayload;
  /** Update many Skill documents */
  updateManySkillsConnection: SkillConnection;
  /**
   * Update many socialMedias
   * @deprecated Please use the new paginated many mutation (updateManySocialMediasConnection)
   */
  updateManySocialMedias: BatchPayload;
  /** Update many SocialMedia documents */
  updateManySocialMediasConnection: SocialMediaConnection;
  /**
   * Update many technologies
   * @deprecated Please use the new paginated many mutation (updateManyTechnologiesConnection)
   */
  updateManyTechnologies: BatchPayload;
  /** Update many Technology documents */
  updateManyTechnologiesConnection: TechnologyConnection;
  /**
   * Update many testimonials
   * @deprecated Please use the new paginated many mutation (updateManyTestimonialsConnection)
   */
  updateManyTestimonials: BatchPayload;
  /** Update many Testimonial documents */
  updateManyTestimonialsConnection: TestimonialConnection;
  /** Update one profile */
  updateProfile?: Maybe<Profile>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Update one projectCategory */
  updateProjectCategory?: Maybe<ProjectCategory>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one skill */
  updateSkill?: Maybe<Skill>;
  /** Update one socialMedia */
  updateSocialMedia?: Maybe<SocialMedia>;
  /** Update one technology */
  updateTechnology?: Maybe<Technology>;
  /** Update one testimonial */
  updateTestimonial?: Maybe<Testimonial>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one certificate */
  upsertCertificate?: Maybe<Certificate>;
  /** Upsert one certificateCategory */
  upsertCertificateCategory?: Maybe<CertificateCategory>;
  /** Upsert one education */
  upsertEducation?: Maybe<Education>;
  /** Upsert one experience */
  upsertExperience?: Maybe<Experience>;
  /** Upsert one profile */
  upsertProfile?: Maybe<Profile>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Upsert one projectCategory */
  upsertProjectCategory?: Maybe<ProjectCategory>;
  /** Upsert one skill */
  upsertSkill?: Maybe<Skill>;
  /** Upsert one socialMedia */
  upsertSocialMedia?: Maybe<SocialMedia>;
  /** Upsert one technology */
  upsertTechnology?: Maybe<Technology>;
  /** Upsert one testimonial */
  upsertTestimonial?: Maybe<Testimonial>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCertificateArgs = {
  data: CertificateCreateInput;
};


export type MutationCreateCertificateCategoryArgs = {
  data: CertificateCategoryCreateInput;
};


export type MutationCreateEducationArgs = {
  data: EducationCreateInput;
};


export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectCategoryArgs = {
  data: ProjectCategoryCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSocialMediaArgs = {
  data: SocialMediaCreateInput;
};


export type MutationCreateTechnologyArgs = {
  data: TechnologyCreateInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCertificateArgs = {
  where: CertificateWhereUniqueInput;
};


export type MutationDeleteCertificateCategoryArgs = {
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationDeleteEducationArgs = {
  where: EducationWhereUniqueInput;
};


export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCertificateCategoriesArgs = {
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationDeleteManyCertificateCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationDeleteManyCertificatesArgs = {
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationDeleteManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationDeleteManyEducationsArgs = {
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationDeleteManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationDeleteManyExperiencesArgs = {
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationDeleteManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationDeleteManyProfilesArgs = {
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationDeleteManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationDeleteManyProjectCategoriesArgs = {
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationDeleteManyProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationDeleteManySkillsArgs = {
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationDeleteManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationDeleteManySocialMediasArgs = {
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationDeleteManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationDeleteManyTechnologiesArgs = {
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationDeleteManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationDeleteManyTestimonialsArgs = {
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectCategoryArgs = {
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSocialMediaArgs = {
  where: SocialMediaWhereUniqueInput;
};


export type MutationDeleteTechnologyArgs = {
  where: TechnologyWhereUniqueInput;
};


export type MutationDeleteTestimonialArgs = {
  where: TestimonialWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCertificateArgs = {
  to?: Array<Stage>;
  where: CertificateWhereUniqueInput;
};


export type MutationPublishCertificateCategoryArgs = {
  to?: Array<Stage>;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationPublishEducationArgs = {
  to?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationPublishExperienceArgs = {
  to?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCertificateCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationPublishManyCertificateCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationPublishManyCertificatesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationPublishManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationPublishManyEducationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationPublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationPublishManyExperiencesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationPublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationPublishManyProfilesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationPublishManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationPublishManyProjectCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationPublishManyProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationPublishManySkillsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationPublishManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationPublishManySocialMediasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationPublishManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationPublishManyTechnologiesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationPublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationPublishManyTestimonialsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationPublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationPublishProfileArgs = {
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationPublishProjectArgs = {
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationPublishProjectCategoryArgs = {
  to?: Array<Stage>;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationPublishSkillArgs = {
  to?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationPublishSocialMediaArgs = {
  to?: Array<Stage>;
  where: SocialMediaWhereUniqueInput;
};


export type MutationPublishTechnologyArgs = {
  to?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationPublishTestimonialArgs = {
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCertificateArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CertificateWhereUniqueInput;
};


export type MutationSchedulePublishCertificateCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationSchedulePublishEducationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationSchedulePublishExperienceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationSchedulePublishProfileArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationSchedulePublishProjectCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationSchedulePublishSkillArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationSchedulePublishSocialMediaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SocialMediaWhereUniqueInput;
};


export type MutationSchedulePublishTechnologyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationSchedulePublishTestimonialArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCertificateArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CertificateWhereUniqueInput;
};


export type MutationScheduleUnpublishCertificateCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishEducationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: EducationWhereUniqueInput;
};


export type MutationScheduleUnpublishExperienceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ExperienceWhereUniqueInput;
};


export type MutationScheduleUnpublishProfileArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProfileWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProjectWhereUniqueInput;
};


export type MutationScheduleUnpublishProjectCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishSkillArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SkillWhereUniqueInput;
};


export type MutationScheduleUnpublishSocialMediaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SocialMediaWhereUniqueInput;
};


export type MutationScheduleUnpublishTechnologyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TechnologyWhereUniqueInput;
};


export type MutationScheduleUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCertificateArgs = {
  from?: Array<Stage>;
  where: CertificateWhereUniqueInput;
};


export type MutationUnpublishCertificateCategoryArgs = {
  from?: Array<Stage>;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationUnpublishEducationArgs = {
  from?: Array<Stage>;
  where: EducationWhereUniqueInput;
};


export type MutationUnpublishExperienceArgs = {
  from?: Array<Stage>;
  where: ExperienceWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCertificateCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationUnpublishManyCertificateCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationUnpublishManyCertificatesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationUnpublishManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationUnpublishManyEducationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUnpublishManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUnpublishManyExperiencesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUnpublishManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUnpublishManyProfilesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManyProjectCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationUnpublishManyProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUnpublishManySkillsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUnpublishManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUnpublishManySocialMediasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationUnpublishManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationUnpublishManyTechnologiesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUnpublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishProfileArgs = {
  from?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>;
  where: ProjectWhereUniqueInput;
};


export type MutationUnpublishProjectCategoryArgs = {
  from?: Array<Stage>;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationUnpublishSkillArgs = {
  from?: Array<Stage>;
  where: SkillWhereUniqueInput;
};


export type MutationUnpublishSocialMediaArgs = {
  from?: Array<Stage>;
  where: SocialMediaWhereUniqueInput;
};


export type MutationUnpublishTechnologyArgs = {
  from?: Array<Stage>;
  where: TechnologyWhereUniqueInput;
};


export type MutationUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCertificateArgs = {
  data: CertificateUpdateInput;
  where: CertificateWhereUniqueInput;
};


export type MutationUpdateCertificateCategoryArgs = {
  data: CertificateCategoryUpdateInput;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationUpdateEducationArgs = {
  data: EducationUpdateInput;
  where: EducationWhereUniqueInput;
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCertificateCategoriesArgs = {
  data: CertificateCategoryUpdateManyInput;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationUpdateManyCertificateCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CertificateCategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateCategoryManyWhereInput>;
};


export type MutationUpdateManyCertificatesArgs = {
  data: CertificateUpdateManyInput;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationUpdateManyCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CertificateUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CertificateManyWhereInput>;
};


export type MutationUpdateManyEducationsArgs = {
  data: EducationUpdateManyInput;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUpdateManyEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: EducationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EducationManyWhereInput>;
};


export type MutationUpdateManyExperiencesArgs = {
  data: ExperienceUpdateManyInput;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUpdateManyExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ExperienceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceManyWhereInput>;
};


export type MutationUpdateManyProfilesArgs = {
  data: ProfileUpdateManyInput;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUpdateManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProfileUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUpdateManyProjectCategoriesArgs = {
  data: ProjectCategoryUpdateManyInput;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationUpdateManyProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProjectCategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectCategoryManyWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProjectUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectManyWhereInput>;
};


export type MutationUpdateManySkillsArgs = {
  data: SkillUpdateManyInput;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUpdateManySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SkillUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillManyWhereInput>;
};


export type MutationUpdateManySocialMediasArgs = {
  data: SocialMediaUpdateManyInput;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationUpdateManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SocialMediaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaManyWhereInput>;
};


export type MutationUpdateManyTechnologiesArgs = {
  data: TechnologyUpdateManyInput;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUpdateManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TechnologyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyManyWhereInput>;
};


export type MutationUpdateManyTestimonialsArgs = {
  data: TestimonialUpdateManyInput;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TestimonialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectCategoryArgs = {
  data: ProjectCategoryUpdateInput;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaUpdateInput;
  where: SocialMediaWhereUniqueInput;
};


export type MutationUpdateTechnologyArgs = {
  data: TechnologyUpdateInput;
  where: TechnologyWhereUniqueInput;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialUpdateInput;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCertificateArgs = {
  upsert: CertificateUpsertInput;
  where: CertificateWhereUniqueInput;
};


export type MutationUpsertCertificateCategoryArgs = {
  upsert: CertificateCategoryUpsertInput;
  where: CertificateCategoryWhereUniqueInput;
};


export type MutationUpsertEducationArgs = {
  upsert: EducationUpsertInput;
  where: EducationWhereUniqueInput;
};


export type MutationUpsertExperienceArgs = {
  upsert: ExperienceUpsertInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpsertProfileArgs = {
  upsert: ProfileUpsertInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectCategoryArgs = {
  upsert: ProjectCategoryUpsertInput;
  where: ProjectCategoryWhereUniqueInput;
};


export type MutationUpsertSkillArgs = {
  upsert: SkillUpsertInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpsertSocialMediaArgs = {
  upsert: SocialMediaUpsertInput;
  where: SocialMediaWhereUniqueInput;
};


export type MutationUpsertTechnologyArgs = {
  upsert: TechnologyUpsertInput;
  where: TechnologyWhereUniqueInput;
};


export type MutationUpsertTestimonialArgs = {
  upsert: TestimonialUpsertInput;
  where: TestimonialWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Profile's model */
export type Profile = Entity & Node & {
  __typename?: 'Profile';
  address?: Maybe<Scalars['String']['output']>;
  alias?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Profile>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  /** List of Profile versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Asset;
  phone: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  role: Scalars['String']['output'];
  scheduledIn: Array<ScheduledOperation>;
  socialMedia: Array<SocialMedia>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Profile's model */
export type ProfileCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Profile's model */
export type ProfileDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Profile's model */
export type ProfileHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Profile's model */
export type ProfileImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


/** Profile's model */
export type ProfilePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Profile's model */
export type ProfileScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Profile's model */
export type ProfileSocialMediaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialMediaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SocialMediaWhereInput>;
};


/** Profile's model */
export type ProfileUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProfileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProfileWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProfileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProfileCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  image: AssetCreateOneInlineInput;
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
  socialMedia?: InputMaybe<SocialMediaCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProfileCreateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Create and connect multiple existing Profile documents */
  create?: InputMaybe<Array<ProfileCreateInput>>;
};

export type ProfileCreateOneInlineInput = {
  /** Connect one existing Profile document */
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: InputMaybe<ProfileCreateInput>;
};

/** An edge in a connection. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Profile;
};

/** Identifies documents */
export type ProfileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alias_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alias_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alias_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alias_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alias_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alias_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alias_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alias_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alias_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateOfBirth_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateOfBirth_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateOfBirth_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateOfBirth_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateOfBirth_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfBirth_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateOfBirth_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<ProfileWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  socialMedia_every?: InputMaybe<SocialMediaWhereInput>;
  socialMedia_none?: InputMaybe<SocialMediaWhereInput>;
  socialMedia_some?: InputMaybe<SocialMediaWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProfileOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AliasAsc = 'alias_ASC',
  AliasDesc = 'alias_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProfileUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  socialMedia?: InputMaybe<SocialMediaUpdateManyInlineInput>;
};

export type ProfileUpdateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: InputMaybe<Array<ProfileConnectInput>>;
  /** Create and connect multiple Profile documents */
  create?: InputMaybe<Array<ProfileCreateInput>>;
  /** Delete multiple Profile documents */
  delete?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Disconnect multiple Profile documents */
  disconnect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Profile documents */
  set?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Update multiple Profile documents */
  update?: InputMaybe<Array<ProfileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Profile documents */
  upsert?: InputMaybe<Array<ProfileUpsertWithNestedWhereUniqueInput>>;
};

export type ProfileUpdateManyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProfileUpdateManyInput;
  /** Document search */
  where: ProfileWhereInput;
};

export type ProfileUpdateOneInlineInput = {
  /** Connect existing Profile document */
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: InputMaybe<ProfileCreateInput>;
  /** Delete currently connected Profile document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Profile document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Profile document */
  update?: InputMaybe<ProfileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Profile document */
  upsert?: InputMaybe<ProfileUpsertWithNestedWhereUniqueInput>;
};

export type ProfileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProfileUpdateInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

export type ProfileUpsertInput = {
  /** Create document if it didn't exist */
  create: ProfileCreateInput;
  /** Update document if it exists */
  update: ProfileUpdateInput;
};

export type ProfileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProfileUpsertInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProfileWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProfileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alias_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alias_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alias_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alias_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alias_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alias_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alias_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alias_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alias_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  dateOfBirth_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  dateOfBirth_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  dateOfBirth_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  dateOfBirth_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  dateOfBirth_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfBirth_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  dateOfBirth_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<ProfileWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  socialMedia_every?: InputMaybe<SocialMediaWhereInput>;
  socialMedia_none?: InputMaybe<SocialMediaWhereInput>;
  socialMedia_some?: InputMaybe<SocialMediaWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProfileWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProfileWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Profile record uniquely */
export type ProfileWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Project's Model */
export type Project = Entity & Node & {
  __typename?: 'Project';
  categories: Array<ProjectCategory>;
  client: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  duration?: Maybe<Scalars['String']['output']>;
  galeries: Array<Asset>;
  /** List of Project versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  keyFeatures: Array<Scalars['String']['output']>;
  liveDemo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  projectStatus: ProjectStatus;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Slug for the Project */
  slug?: Maybe<Scalars['String']['output']>;
  /** Github URL */
  sourceUrl?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  technologies: Array<Technology>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Project's Model */
export type ProjectCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectCategoryWhereInput>;
};


/** Project's Model */
export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Project's Model */
export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Project's Model */
export type ProjectGaleriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


/** Project's Model */
export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Project's Model */
export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Project's Model */
export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Project's Model */
export type ProjectTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TechnologyWhereInput>;
};


/** Project's Model */
export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectCategory = Entity & Node & {
  __typename?: 'ProjectCategory';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProjectCategory>;
  /** List of ProjectCategory versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProjectCategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectCategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProjectCategoryHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProjectCategoryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type ProjectCategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProjectCategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProjectCategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectCategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectCategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectCategoryConnection = {
  __typename?: 'ProjectCategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCategoryCreateManyInlineInput = {
  /** Connect multiple existing ProjectCategory documents */
  connect?: InputMaybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing ProjectCategory documents */
  create?: InputMaybe<Array<ProjectCategoryCreateInput>>;
};

export type ProjectCategoryCreateOneInlineInput = {
  /** Connect one existing ProjectCategory document */
  connect?: InputMaybe<ProjectCategoryWhereUniqueInput>;
  /** Create and connect one ProjectCategory document */
  create?: InputMaybe<ProjectCategoryCreateInput>;
};

/** An edge in a connection. */
export type ProjectCategoryEdge = {
  __typename?: 'ProjectCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProjectCategory;
};

/** Identifies documents */
export type ProjectCategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCategoryUpdateManyInlineInput = {
  /** Connect multiple existing ProjectCategory documents */
  connect?: InputMaybe<Array<ProjectCategoryConnectInput>>;
  /** Create and connect multiple ProjectCategory documents */
  create?: InputMaybe<Array<ProjectCategoryCreateInput>>;
  /** Delete multiple ProjectCategory documents */
  delete?: InputMaybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Disconnect multiple ProjectCategory documents */
  disconnect?: InputMaybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProjectCategory documents */
  set?: InputMaybe<Array<ProjectCategoryWhereUniqueInput>>;
  /** Update multiple ProjectCategory documents */
  update?: InputMaybe<Array<ProjectCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProjectCategory documents */
  upsert?: InputMaybe<Array<ProjectCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectCategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectCategoryUpdateManyInput;
  /** Document search */
  where: ProjectCategoryWhereInput;
};

export type ProjectCategoryUpdateOneInlineInput = {
  /** Connect existing ProjectCategory document */
  connect?: InputMaybe<ProjectCategoryWhereUniqueInput>;
  /** Create and connect one ProjectCategory document */
  create?: InputMaybe<ProjectCategoryCreateInput>;
  /** Delete currently connected ProjectCategory document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProjectCategory document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProjectCategory document */
  update?: InputMaybe<ProjectCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectCategory document */
  upsert?: InputMaybe<ProjectCategoryUpsertWithNestedWhereUniqueInput>;
};

export type ProjectCategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectCategoryUpdateInput;
  /** Unique document search */
  where: ProjectCategoryWhereUniqueInput;
};

export type ProjectCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCategoryCreateInput;
  /** Update document if it exists */
  update: ProjectCategoryUpdateInput;
};

export type ProjectCategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectCategoryUpsertInput;
  /** Unique document search */
  where: ProjectCategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectCategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectCategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectCategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectCategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectCategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectCategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ProjectCategory record uniquely */
export type ProjectCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  categories?: InputMaybe<ProjectCategoryCreateManyInlineInput>;
  client: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  galeries: AssetCreateManyInlineInput;
  keyFeatures: Array<Scalars['String']['input']>;
  liveDemo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  overview: Scalars['String']['input'];
  projectStatus: ProjectStatus;
  slug?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  technologies?: InputMaybe<TechnologyCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<ProjectCategoryWhereInput>;
  categories_none?: InputMaybe<ProjectCategoryWhereInput>;
  categories_some?: InputMaybe<ProjectCategoryWhereInput>;
  client?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  client_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  client_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  client_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  client_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  client_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  client_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  client_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  client_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  client_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  duration?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  duration_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  duration_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  duration_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  duration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  duration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  duration_starts_with?: InputMaybe<Scalars['String']['input']>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keyFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keyFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keyFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keyFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keyFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  liveDemo?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  liveDemo_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  liveDemo_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  liveDemo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  liveDemo_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  liveDemo_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  liveDemo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  liveDemo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  liveDemo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  liveDemo_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  overview_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  overview_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  overview_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  overview_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  overview_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  overview_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  overview_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  overview_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  overview_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  /** All values that are contained in given list. */
  projectStatus_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectStatus_not?: InputMaybe<ProjectStatus>;
  /** All values that are not contained in given list. */
  projectStatus_not_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sourceUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sourceUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sourceUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sourceUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sourceUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sourceUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sourceUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sourceUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sourceUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyFeaturesAsc = 'keyFeatures_ASC',
  KeyFeaturesDesc = 'keyFeatures_DESC',
  LiveDemoAsc = 'liveDemo_ASC',
  LiveDemoDesc = 'liveDemo_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OverviewAsc = 'overview_ASC',
  OverviewDesc = 'overview_DESC',
  ProjectStatusAsc = 'projectStatus_ASC',
  ProjectStatusDesc = 'projectStatus_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SourceUrlAsc = 'sourceUrl_ASC',
  SourceUrlDesc = 'sourceUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Project Status Enum */
export enum ProjectStatus {
  Complete = 'complete',
  Ongoing = 'ongoing',
  Pending = 'pending'
}

export type ProjectUpdateInput = {
  categories?: InputMaybe<ProjectCategoryUpdateManyInlineInput>;
  client?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  galeries?: InputMaybe<AssetUpdateManyInlineInput>;
  keyFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  liveDemo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  technologies?: InputMaybe<TechnologyUpdateManyInlineInput>;
};

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  client?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  keyFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  overview?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput;
  /** Document search */
  where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>;
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput;
  /** Unique document search */
  where: ProjectWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<ProjectCategoryWhereInput>;
  categories_none?: InputMaybe<ProjectCategoryWhereInput>;
  categories_some?: InputMaybe<ProjectCategoryWhereInput>;
  client?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  client_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  client_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  client_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  client_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  client_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  client_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  client_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  client_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  client_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>;
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>;
  duration?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  duration_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  duration_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  duration_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  duration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  duration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  duration_starts_with?: InputMaybe<Scalars['String']['input']>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keyFeatures?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keyFeatures_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keyFeatures_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keyFeatures_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keyFeatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  liveDemo?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  liveDemo_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  liveDemo_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  liveDemo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  liveDemo_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  liveDemo_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  liveDemo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  liveDemo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  liveDemo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  liveDemo_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  overview_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  overview_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  overview_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  overview_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  overview_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  overview_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  overview_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  overview_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  overview_starts_with?: InputMaybe<Scalars['String']['input']>;
  projectStatus?: InputMaybe<ProjectStatus>;
  /** All values that are contained in given list. */
  projectStatus_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  projectStatus_not?: InputMaybe<ProjectStatus>;
  /** All values that are not contained in given list. */
  projectStatus_not_in?: InputMaybe<Array<InputMaybe<ProjectStatus>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sourceUrl_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sourceUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sourceUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sourceUrl_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sourceUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sourceUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sourceUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sourceUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sourceUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  technologies_every?: InputMaybe<TechnologyWhereInput>;
  technologies_none?: InputMaybe<TechnologyWhereInput>;
  technologies_some?: InputMaybe<TechnologyWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  liveDemo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single certificate */
  certificate?: Maybe<Certificate>;
  /** Retrieve multiple certificateCategories */
  certificateCategories: Array<CertificateCategory>;
  /** Retrieve multiple certificateCategories using the Relay connection interface */
  certificateCategoriesConnection: CertificateCategoryConnection;
  /** Retrieve a single certificateCategory */
  certificateCategory?: Maybe<CertificateCategory>;
  /** Retrieve document version */
  certificateCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve document version */
  certificateVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple certificates */
  certificates: Array<Certificate>;
  /** Retrieve multiple certificates using the Relay connection interface */
  certificatesConnection: CertificateConnection;
  /** Retrieve a single education */
  education?: Maybe<Education>;
  /** Retrieve document version */
  educationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple educations */
  educations: Array<Education>;
  /** Retrieve multiple educations using the Relay connection interface */
  educationsConnection: EducationConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single experience */
  experience?: Maybe<Experience>;
  /** Retrieve document version */
  experienceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple experiences */
  experiences: Array<Experience>;
  /** Retrieve multiple experiences using the Relay connection interface */
  experiencesConnection: ExperienceConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single profile */
  profile?: Maybe<Profile>;
  /** Retrieve document version */
  profileVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple profiles */
  profiles: Array<Profile>;
  /** Retrieve multiple profiles using the Relay connection interface */
  profilesConnection: ProfileConnection;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projectCategories */
  projectCategories: Array<ProjectCategory>;
  /** Retrieve multiple projectCategories using the Relay connection interface */
  projectCategoriesConnection: ProjectCategoryConnection;
  /** Retrieve a single projectCategory */
  projectCategory?: Maybe<ProjectCategory>;
  /** Retrieve document version */
  projectCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single skill */
  skill?: Maybe<Skill>;
  /** Retrieve document version */
  skillVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple skills */
  skills: Array<Skill>;
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: SkillConnection;
  /** Retrieve a single socialMedia */
  socialMedia?: Maybe<SocialMedia>;
  /** Retrieve document version */
  socialMediaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socialMedias */
  socialMedias: Array<SocialMedia>;
  /** Retrieve multiple socialMedias using the Relay connection interface */
  socialMediasConnection: SocialMediaConnection;
  /** Retrieve multiple technologies */
  technologies: Array<Technology>;
  /** Retrieve multiple technologies using the Relay connection interface */
  technologiesConnection: TechnologyConnection;
  /** Retrieve a single technology */
  technology?: Maybe<Technology>;
  /** Retrieve document version */
  technologyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single testimonial */
  testimonial?: Maybe<Testimonial>;
  /** Retrieve document version */
  testimonialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple testimonials */
  testimonials: Array<Testimonial>;
  /** Retrieve multiple testimonials using the Relay connection interface */
  testimonialsConnection: TestimonialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCertificateArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CertificateWhereUniqueInput;
};


export type QueryCertificateCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CertificateCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CertificateCategoryWhereInput>;
};


export type QueryCertificateCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CertificateCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CertificateCategoryWhereInput>;
};


export type QueryCertificateCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CertificateCategoryWhereUniqueInput;
};


export type QueryCertificateCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCertificateVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCertificatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CertificateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CertificateWhereInput>;
};


export type QueryCertificatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CertificateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CertificateWhereInput>;
};


export type QueryEducationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EducationWhereUniqueInput;
};


export type QueryEducationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEducationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryEducationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EducationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryExperienceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ExperienceWhereUniqueInput;
};


export type QueryExperienceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryExperiencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryProfileArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProfileWhereUniqueInput;
};


export type QueryProfileVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryProjectArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectWhereUniqueInput;
};


export type QueryProjectCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectCategoryWhereInput>;
};


export type QueryProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectCategoryWhereInput>;
};


export type QueryProjectCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProjectCategoryWhereUniqueInput;
};


export type QueryProjectCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySkillArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SkillWhereUniqueInput;
};


export type QuerySkillVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySkillsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SkillWhereInput>;
};


export type QuerySkillsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SkillOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SkillWhereInput>;
};


export type QuerySocialMediaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SocialMediaWhereUniqueInput;
};


export type QuerySocialMediaVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySocialMediasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialMediaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SocialMediaWhereInput>;
};


export type QuerySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialMediaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SocialMediaWhereInput>;
};


export type QueryTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TechnologyWhereInput>;
};


export type QueryTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TechnologyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TechnologyWhereInput>;
};


export type QueryTechnologyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TechnologyWhereUniqueInput;
};


export type QueryTechnologyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTestimonialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TestimonialWhereUniqueInput;
};


export type QueryTestimonialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTestimonialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Resume's Component */
export type Resume = Entity & {
  __typename?: 'Resume';
  endDate?: Maybe<Scalars['Date']['output']>;
  galeries: Array<Asset>;
  groupRecords: Array<GroupRecord>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  organization: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  startDate: Scalars['Date']['output'];
  textRecords: Array<Scalars['String']['output']>;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Resume's Component */
export type ResumeGaleriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


/** Resume's Component */
export type ResumeGroupRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GroupRecordOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GroupRecordWhereInput>;
};

export type ResumeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResumeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResumeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResumeCreateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  galeries?: InputMaybe<AssetCreateManyInlineInput>;
  groupRecords?: InputMaybe<GroupRecordCreateManyInlineInput>;
  organization: Scalars['String']['input'];
  role: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeCreateManyInlineInput = {
  /** Create and connect multiple existing Resume documents */
  create?: InputMaybe<Array<ResumeCreateInput>>;
};

export type ResumeCreateOneInlineInput = {
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
};

export type ResumeCreateWithPositionInput = {
  /** Document to create */
  data: ResumeCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ResumeEdge = {
  __typename?: 'ResumeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Resume;
};

/** Identifies documents */
export type ResumeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  groupRecords_every?: InputMaybe<GroupRecordWhereInput>;
  groupRecords_none?: InputMaybe<GroupRecordWhereInput>;
  groupRecords_some?: InputMaybe<GroupRecordWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  organization_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  organization_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  organization_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  organization_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  organization_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  organization_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  organization_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  organization_starts_with?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  textRecords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  textRecords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  textRecords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  textRecords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum ResumeOrderByInput {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  TextRecordsAsc = 'textRecords_ASC',
  TextRecordsDesc = 'textRecords_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ResumeParent = Education | Experience;

export type ResumeParentConnectInput = {
  Education?: InputMaybe<EducationConnectInput>;
  Experience?: InputMaybe<ExperienceConnectInput>;
};

export type ResumeParentCreateInput = {
  Education?: InputMaybe<EducationCreateInput>;
  Experience?: InputMaybe<ExperienceCreateInput>;
};

export type ResumeParentCreateManyInlineInput = {
  /** Connect multiple existing ResumeParent documents */
  connect?: InputMaybe<Array<ResumeParentWhereUniqueInput>>;
  /** Create and connect multiple existing ResumeParent documents */
  create?: InputMaybe<Array<ResumeParentCreateInput>>;
};

export type ResumeParentCreateOneInlineInput = {
  /** Connect one existing ResumeParent document */
  connect?: InputMaybe<ResumeParentWhereUniqueInput>;
  /** Create and connect one ResumeParent document */
  create?: InputMaybe<ResumeParentCreateInput>;
};

export type ResumeParentUpdateInput = {
  Education?: InputMaybe<EducationUpdateInput>;
  Experience?: InputMaybe<ExperienceUpdateInput>;
};

export type ResumeParentUpdateManyInlineInput = {
  /** Connect multiple existing ResumeParent documents */
  connect?: InputMaybe<Array<ResumeParentConnectInput>>;
  /** Create and connect multiple ResumeParent documents */
  create?: InputMaybe<Array<ResumeParentCreateInput>>;
  /** Delete multiple ResumeParent documents */
  delete?: InputMaybe<Array<ResumeParentWhereUniqueInput>>;
  /** Disconnect multiple ResumeParent documents */
  disconnect?: InputMaybe<Array<ResumeParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ResumeParent documents */
  set?: InputMaybe<Array<ResumeParentWhereUniqueInput>>;
  /** Update multiple ResumeParent documents */
  update?: InputMaybe<Array<ResumeParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ResumeParent documents */
  upsert?: InputMaybe<Array<ResumeParentUpsertWithNestedWhereUniqueInput>>;
};

export type ResumeParentUpdateManyWithNestedWhereInput = {
  Education?: InputMaybe<EducationUpdateManyWithNestedWhereInput>;
  Experience?: InputMaybe<ExperienceUpdateManyWithNestedWhereInput>;
};

export type ResumeParentUpdateOneInlineInput = {
  /** Connect existing ResumeParent document */
  connect?: InputMaybe<ResumeParentWhereUniqueInput>;
  /** Create and connect one ResumeParent document */
  create?: InputMaybe<ResumeParentCreateInput>;
  /** Delete currently connected ResumeParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ResumeParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ResumeParent document */
  update?: InputMaybe<ResumeParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ResumeParent document */
  upsert?: InputMaybe<ResumeParentUpsertWithNestedWhereUniqueInput>;
};

export type ResumeParentUpdateWithNestedWhereUniqueInput = {
  Education?: InputMaybe<EducationUpdateWithNestedWhereUniqueInput>;
  Experience?: InputMaybe<ExperienceUpdateWithNestedWhereUniqueInput>;
};

export type ResumeParentUpsertWithNestedWhereUniqueInput = {
  Education?: InputMaybe<EducationUpsertWithNestedWhereUniqueInput>;
  Experience?: InputMaybe<ExperienceUpsertWithNestedWhereUniqueInput>;
};

export type ResumeParentWhereInput = {
  Education?: InputMaybe<EducationWhereInput>;
  Experience?: InputMaybe<ExperienceWhereInput>;
};

export type ResumeParentWhereUniqueInput = {
  Education?: InputMaybe<EducationWhereUniqueInput>;
  Experience?: InputMaybe<ExperienceWhereUniqueInput>;
};

/** Resume Record's Component */
export type ResumeRecord = Entity & {
  __typename?: 'ResumeRecord';
  endDate?: Maybe<Scalars['Date']['output']>;
  galeries: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  record: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  startDate: Scalars['Date']['output'];
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** Resume Record's Component */
export type ResumeRecordGaleriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ResumeRecordConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResumeRecordWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResumeRecordConnection = {
  __typename?: 'ResumeRecordConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResumeRecordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResumeRecordCreateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  galeries?: InputMaybe<AssetCreateManyInlineInput>;
  record: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeRecordCreateManyInlineInput = {
  /** Create and connect multiple existing ResumeRecord documents */
  create?: InputMaybe<Array<ResumeRecordCreateInput>>;
};

export type ResumeRecordCreateOneInlineInput = {
  /** Create and connect one ResumeRecord document */
  create?: InputMaybe<ResumeRecordCreateInput>;
};

export type ResumeRecordCreateWithPositionInput = {
  /** Document to create */
  data: ResumeRecordCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ResumeRecordEdge = {
  __typename?: 'ResumeRecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ResumeRecord;
};

/** Identifies documents */
export type ResumeRecordManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  record_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  record_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  record_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  record_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  record_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  record_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  record_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  record_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  record_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum ResumeRecordOrderByInput {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RecordAsc = 'record_ASC',
  RecordDesc = 'record_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ResumeRecordParent = GroupRecord;

export type ResumeRecordParentConnectInput = {
  GroupRecord?: InputMaybe<GroupRecordConnectInput>;
};

export type ResumeRecordParentCreateInput = {
  GroupRecord?: InputMaybe<GroupRecordCreateInput>;
};

export type ResumeRecordParentCreateManyInlineInput = {
  /** Create and connect multiple existing ResumeRecordParent documents */
  create?: InputMaybe<Array<ResumeRecordParentCreateInput>>;
};

export type ResumeRecordParentCreateOneInlineInput = {
  /** Create and connect one ResumeRecordParent document */
  create?: InputMaybe<ResumeRecordParentCreateInput>;
};

export type ResumeRecordParentCreateWithPositionInput = {
  GroupRecord?: InputMaybe<GroupRecordCreateWithPositionInput>;
};

export type ResumeRecordParentUpdateInput = {
  GroupRecord?: InputMaybe<GroupRecordUpdateInput>;
};

export type ResumeRecordParentUpdateManyInlineInput = {
  /** Create and connect multiple ResumeRecordParent component instances */
  create?: InputMaybe<Array<ResumeRecordParentCreateWithPositionInput>>;
  /** Delete multiple ResumeRecordParent documents */
  delete?: InputMaybe<Array<ResumeRecordParentWhereUniqueInput>>;
  /** Update multiple ResumeRecordParent component instances */
  update?: InputMaybe<Array<ResumeRecordParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ResumeRecordParent component instances */
  upsert?: InputMaybe<Array<ResumeRecordParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ResumeRecordParentUpdateManyWithNestedWhereInput = {
  GroupRecord?: InputMaybe<GroupRecordUpdateManyWithNestedWhereInput>;
};

export type ResumeRecordParentUpdateOneInlineInput = {
  /** Create and connect one ResumeRecordParent document */
  create?: InputMaybe<ResumeRecordParentCreateInput>;
  /** Delete currently connected ResumeRecordParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ResumeRecordParent document */
  update?: InputMaybe<ResumeRecordParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ResumeRecordParent document */
  upsert?: InputMaybe<ResumeRecordParentUpsertWithNestedWhereUniqueInput>;
};

export type ResumeRecordParentUpdateWithNestedWhereUniqueAndPositionInput = {
  GroupRecord?: InputMaybe<GroupRecordUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ResumeRecordParentUpdateWithNestedWhereUniqueInput = {
  GroupRecord?: InputMaybe<GroupRecordUpdateWithNestedWhereUniqueInput>;
};

export type ResumeRecordParentUpsertWithNestedWhereUniqueAndPositionInput = {
  GroupRecord?: InputMaybe<GroupRecordUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ResumeRecordParentUpsertWithNestedWhereUniqueInput = {
  GroupRecord?: InputMaybe<GroupRecordUpsertWithNestedWhereUniqueInput>;
};

export type ResumeRecordParentWhereInput = {
  GroupRecord?: InputMaybe<GroupRecordWhereInput>;
};

export type ResumeRecordParentWhereUniqueInput = {
  GroupRecord?: InputMaybe<GroupRecordWhereUniqueInput>;
};

export type ResumeRecordUpdateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  galeries?: InputMaybe<AssetUpdateManyInlineInput>;
  record?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ResumeRecordUpdateManyInlineInput = {
  /** Create and connect multiple ResumeRecord component instances */
  create?: InputMaybe<Array<ResumeRecordCreateWithPositionInput>>;
  /** Delete multiple ResumeRecord documents */
  delete?: InputMaybe<Array<ResumeRecordWhereUniqueInput>>;
  /** Update multiple ResumeRecord component instances */
  update?: InputMaybe<Array<ResumeRecordUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ResumeRecord component instances */
  upsert?: InputMaybe<Array<ResumeRecordUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ResumeRecordUpdateManyInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ResumeRecordUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResumeRecordUpdateManyInput;
  /** Document search */
  where: ResumeRecordWhereInput;
};

export type ResumeRecordUpdateOneInlineInput = {
  /** Create and connect one ResumeRecord document */
  create?: InputMaybe<ResumeRecordCreateInput>;
  /** Delete currently connected ResumeRecord document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ResumeRecord document */
  update?: InputMaybe<ResumeRecordUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ResumeRecord document */
  upsert?: InputMaybe<ResumeRecordUpsertWithNestedWhereUniqueInput>;
};

export type ResumeRecordUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ResumeRecordUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ResumeRecordWhereUniqueInput;
};

export type ResumeRecordUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResumeRecordUpdateInput;
  /** Unique document search */
  where: ResumeRecordWhereUniqueInput;
};

export type ResumeRecordUpsertInput = {
  /** Create document if it didn't exist */
  create: ResumeRecordCreateInput;
  /** Update document if it exists */
  update: ResumeRecordUpdateInput;
};

export type ResumeRecordUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ResumeRecordUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ResumeRecordWhereUniqueInput;
};

export type ResumeRecordUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResumeRecordUpsertInput;
  /** Unique document search */
  where: ResumeRecordWhereUniqueInput;
};

/** Identifies documents */
export type ResumeRecordWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeRecordWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  record?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  record_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  record_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  record_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  record_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  record_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  record_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  record_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  record_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  record_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References ResumeRecord record uniquely */
export type ResumeRecordWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ResumeType {
  Education = 'education',
  Experience = 'experience'
}

export type ResumeUpdateInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  galeries?: InputMaybe<AssetUpdateManyInlineInput>;
  groupRecords?: InputMaybe<GroupRecordUpdateManyInlineInput>;
  organization?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ResumeUpdateManyInlineInput = {
  /** Create and connect multiple Resume component instances */
  create?: InputMaybe<Array<ResumeCreateWithPositionInput>>;
  /** Delete multiple Resume documents */
  delete?: InputMaybe<Array<ResumeWhereUniqueInput>>;
  /** Update multiple Resume component instances */
  update?: InputMaybe<Array<ResumeUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Resume component instances */
  upsert?: InputMaybe<Array<ResumeUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ResumeUpdateManyInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ResumeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResumeUpdateManyInput;
  /** Document search */
  where: ResumeWhereInput;
};

export type ResumeUpdateOneInlineInput = {
  /** Create and connect one Resume document */
  create?: InputMaybe<ResumeCreateInput>;
  /** Delete currently connected Resume document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Resume document */
  update?: InputMaybe<ResumeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Resume document */
  upsert?: InputMaybe<ResumeUpsertWithNestedWhereUniqueInput>;
};

export type ResumeUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ResumeUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResumeUpdateInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpsertInput = {
  /** Create document if it didn't exist */
  create: ResumeCreateInput;
  /** Update document if it exists */
  update: ResumeUpdateInput;
};

export type ResumeUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ResumeUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ResumeWhereUniqueInput;
};

export type ResumeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResumeUpsertInput;
  /** Unique document search */
  where: ResumeWhereUniqueInput;
};

/** Identifies documents */
export type ResumeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResumeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResumeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  galeries_every?: InputMaybe<AssetWhereInput>;
  galeries_none?: InputMaybe<AssetWhereInput>;
  galeries_some?: InputMaybe<AssetWhereInput>;
  groupRecords_every?: InputMaybe<GroupRecordWhereInput>;
  groupRecords_none?: InputMaybe<GroupRecordWhereInput>;
  groupRecords_some?: InputMaybe<GroupRecordWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  organization_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  organization_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  organization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  organization_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  organization_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  organization_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  organization_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  organization_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  organization_starts_with?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  textRecords?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  textRecords_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  textRecords_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  textRecords_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  textRecords_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Resume record uniquely */
export type ResumeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Certificate | CertificateCategory | Education | Experience | Profile | Project | ProjectCategory | Skill | SocialMedia | Technology | Testimonial;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Skill = Entity & Node & {
  __typename?: 'Skill';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Skill>;
  /** List of Skill versions */
  history: Array<Version>;
  icon: Scalars['String']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SkillCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SkillDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SkillHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SkillPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SkillScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SkillUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SkillConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SkillWhereUniqueInput;
};

/** A connection to a list of items. */
export type SkillConnection = {
  __typename?: 'SkillConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SkillEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SkillCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SkillCreateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Create and connect multiple existing Skill documents */
  create?: InputMaybe<Array<SkillCreateInput>>;
};

export type SkillCreateOneInlineInput = {
  /** Connect one existing Skill document */
  connect?: InputMaybe<SkillWhereUniqueInput>;
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
  __typename?: 'SkillEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Skill;
};

/** Identifies documents */
export type SkillManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SkillWhereStageInput>;
  documentInStages_none?: InputMaybe<SkillWhereStageInput>;
  documentInStages_some?: InputMaybe<SkillWhereStageInput>;
  icon?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SkillOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SkillUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SkillUpdateManyInlineInput = {
  /** Connect multiple existing Skill documents */
  connect?: InputMaybe<Array<SkillConnectInput>>;
  /** Create and connect multiple Skill documents */
  create?: InputMaybe<Array<SkillCreateInput>>;
  /** Delete multiple Skill documents */
  delete?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Disconnect multiple Skill documents */
  disconnect?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Skill documents */
  set?: InputMaybe<Array<SkillWhereUniqueInput>>;
  /** Update multiple Skill documents */
  update?: InputMaybe<Array<SkillUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Skill documents */
  upsert?: InputMaybe<Array<SkillUpsertWithNestedWhereUniqueInput>>;
};

export type SkillUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SkillUpdateManyInput;
  /** Document search */
  where: SkillWhereInput;
};

export type SkillUpdateOneInlineInput = {
  /** Connect existing Skill document */
  connect?: InputMaybe<SkillWhereUniqueInput>;
  /** Create and connect one Skill document */
  create?: InputMaybe<SkillCreateInput>;
  /** Delete currently connected Skill document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Skill document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Skill document */
  update?: InputMaybe<SkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skill document */
  upsert?: InputMaybe<SkillUpsertWithNestedWhereUniqueInput>;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SkillUpdateInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

export type SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillCreateInput;
  /** Update document if it exists */
  update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SkillUpsertInput;
  /** Unique document search */
  where: SkillWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SkillWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SkillWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SkillWhereStageInput>;
  documentInStages_none?: InputMaybe<SkillWhereStageInput>;
  documentInStages_some?: InputMaybe<SkillWhereStageInput>;
  icon?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  icon_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SkillWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SkillWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Social Media's Model */
export type SocialMedia = Entity & Node & {
  __typename?: 'SocialMedia';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SocialMedia>;
  /** List of SocialMedia versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
};


/** Social Media's Model */
export type SocialMediaCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Social Media's Model */
export type SocialMediaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Social Media's Model */
export type SocialMediaHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Social Media's Model */
export type SocialMediaPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Social Media's Model */
export type SocialMediaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Social Media's Model */
export type SocialMediaUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SocialMediaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialMediaWhereUniqueInput;
};

/** A connection to a list of items. */
export type SocialMediaConnection = {
  __typename?: 'SocialMediaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialMediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SocialMediaCreateInput = {
  cmftielfd0rh808pk6x155xyi?: InputMaybe<ProfileCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type SocialMediaCreateManyInlineInput = {
  /** Connect multiple existing SocialMedia documents */
  connect?: InputMaybe<Array<SocialMediaWhereUniqueInput>>;
  /** Create and connect multiple existing SocialMedia documents */
  create?: InputMaybe<Array<SocialMediaCreateInput>>;
};

export type SocialMediaCreateOneInlineInput = {
  /** Connect one existing SocialMedia document */
  connect?: InputMaybe<SocialMediaWhereUniqueInput>;
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<SocialMediaCreateInput>;
};

/** An edge in a connection. */
export type SocialMediaEdge = {
  __typename?: 'SocialMediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SocialMedia;
};

/** Identifies documents */
export type SocialMediaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialMediaWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialMediaWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialMediaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum SocialMediaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type SocialMediaUpdateInput = {
  cmftielfd0rh808pk6x155xyi?: InputMaybe<ProfileUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialMediaUpdateManyInlineInput = {
  /** Connect multiple existing SocialMedia documents */
  connect?: InputMaybe<Array<SocialMediaConnectInput>>;
  /** Create and connect multiple SocialMedia documents */
  create?: InputMaybe<Array<SocialMediaCreateInput>>;
  /** Delete multiple SocialMedia documents */
  delete?: InputMaybe<Array<SocialMediaWhereUniqueInput>>;
  /** Disconnect multiple SocialMedia documents */
  disconnect?: InputMaybe<Array<SocialMediaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialMedia documents */
  set?: InputMaybe<Array<SocialMediaWhereUniqueInput>>;
  /** Update multiple SocialMedia documents */
  update?: InputMaybe<Array<SocialMediaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialMedia documents */
  upsert?: InputMaybe<Array<SocialMediaUpsertWithNestedWhereUniqueInput>>;
};

export type SocialMediaUpdateManyInput = {
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SocialMediaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialMediaUpdateManyInput;
  /** Document search */
  where: SocialMediaWhereInput;
};

export type SocialMediaUpdateOneInlineInput = {
  /** Connect existing SocialMedia document */
  connect?: InputMaybe<SocialMediaWhereUniqueInput>;
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<SocialMediaCreateInput>;
  /** Delete currently connected SocialMedia document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected SocialMedia document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SocialMedia document */
  update?: InputMaybe<SocialMediaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialMedia document */
  upsert?: InputMaybe<SocialMediaUpsertWithNestedWhereUniqueInput>;
};

export type SocialMediaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialMediaUpdateInput;
  /** Unique document search */
  where: SocialMediaWhereUniqueInput;
};

export type SocialMediaUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialMediaCreateInput;
  /** Update document if it exists */
  update: SocialMediaUpdateInput;
};

export type SocialMediaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialMediaUpsertInput;
  /** Unique document search */
  where: SocialMediaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SocialMediaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SocialMediaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SocialMediaWhereStageInput>;
  documentInStages_none?: InputMaybe<SocialMediaWhereStageInput>;
  documentInStages_some?: InputMaybe<SocialMediaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SocialMediaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SocialMediaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References SocialMedia record uniquely */
export type SocialMediaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Technology = Entity & Node & {
  __typename?: 'Technology';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Technology>;
  experiences: Array<Experience>;
  /** List of Technology versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<Project>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};


export type TechnologyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TechnologyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TechnologyExperiencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ExperienceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type TechnologyHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TechnologyProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProjectOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type TechnologyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TechnologyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TechnologyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TechnologyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TechnologyWhereUniqueInput;
};

/** A connection to a list of items. */
export type TechnologyConnection = {
  __typename?: 'TechnologyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TechnologyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TechnologyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  experiences?: InputMaybe<ExperienceCreateManyInlineInput>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<ProjectCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyCreateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Create and connect multiple existing Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>;
};

export type TechnologyCreateOneInlineInput = {
  /** Connect one existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>;
};

/** An edge in a connection. */
export type TechnologyEdge = {
  __typename?: 'TechnologyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Technology;
};

/** Identifies documents */
export type TechnologyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>;
  experiences_every?: InputMaybe<ExperienceWhereInput>;
  experiences_none?: InputMaybe<ExperienceWhereInput>;
  experiences_some?: InputMaybe<ExperienceWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TechnologyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type TechnologyUpdateInput = {
  experiences?: InputMaybe<ExperienceUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<ProjectUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyUpdateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyConnectInput>>;
  /** Create and connect multiple Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>;
  /** Delete multiple Technology documents */
  delete?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Disconnect multiple Technology documents */
  disconnect?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Technology documents */
  set?: InputMaybe<Array<TechnologyWhereUniqueInput>>;
  /** Update multiple Technology documents */
  update?: InputMaybe<Array<TechnologyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Technology documents */
  upsert?: InputMaybe<Array<TechnologyUpsertWithNestedWhereUniqueInput>>;
};

export type TechnologyUpdateManyInput = {
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TechnologyUpdateManyInput;
  /** Document search */
  where: TechnologyWhereInput;
};

export type TechnologyUpdateOneInlineInput = {
  /** Connect existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>;
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>;
  /** Delete currently connected Technology document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Technology document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Technology document */
  update?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Technology document */
  upsert?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>;
};

export type TechnologyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TechnologyUpdateInput;
  /** Unique document search */
  where: TechnologyWhereUniqueInput;
};

export type TechnologyUpsertInput = {
  /** Create document if it didn't exist */
  create: TechnologyCreateInput;
  /** Update document if it exists */
  update: TechnologyUpdateInput;
};

export type TechnologyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TechnologyUpsertInput;
  /** Unique document search */
  where: TechnologyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TechnologyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TechnologyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>;
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>;
  experiences_every?: InputMaybe<ExperienceWhereInput>;
  experiences_none?: InputMaybe<ExperienceWhereInput>;
  experiences_some?: InputMaybe<ExperienceWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  projects_every?: InputMaybe<ProjectWhereInput>;
  projects_none?: InputMaybe<ProjectWhereInput>;
  projects_some?: InputMaybe<ProjectWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TechnologyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TechnologyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Technology record uniquely */
export type TechnologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Testimonial's Model */
export type Testimonial = Entity & Node & {
  __typename?: 'Testimonial';
  company?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Testimonial>;
  fullName: Scalars['String']['output'];
  /** List of Testimonial versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  occupation?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  ratings: Scalars['Float']['output'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  urlImage?: Maybe<Scalars['String']['output']>;
};


/** Testimonial's Model */
export type TestimonialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Testimonial's Model */
export type TestimonialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Testimonial's Model */
export type TestimonialHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Testimonial's Model */
export type TestimonialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Testimonial's Model */
export type TestimonialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Testimonial's Model */
export type TestimonialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TestimonialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TestimonialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TestimonialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TestimonialCreateInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  occupation?: InputMaybe<Scalars['String']['input']>;
  ratings: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialCreateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Create and connect multiple existing Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
};

export type TestimonialCreateOneInlineInput = {
  /** Connect one existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
};

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: 'TestimonialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Testimonial;
};

/** Identifies documents */
export type TestimonialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  company_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  company_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  company_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  company_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  company_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  company_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  ratings?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  ratings_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  ratings_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  ratings_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  ratings_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  ratings_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  ratings_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  ratings_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  urlImage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  urlImage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  urlImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlImage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  urlImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  urlImage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  urlImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  urlImage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  urlImage_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum TestimonialOrderByInput {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RatingsAsc = 'ratings_ASC',
  RatingsDesc = 'ratings_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlImageAsc = 'urlImage_ASC',
  UrlImageDesc = 'urlImage_DESC'
}

export type TestimonialUpdateInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Scalars['Float']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialConnectInput>>;
  /** Create and connect multiple Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
  /** Delete multiple Testimonial documents */
  delete?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Disconnect multiple Testimonial documents */
  disconnect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Testimonial documents */
  set?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Update multiple Testimonial documents */
  update?: InputMaybe<Array<TestimonialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Testimonial documents */
  upsert?: InputMaybe<Array<TestimonialUpsertWithNestedWhereUniqueInput>>;
};

export type TestimonialUpdateManyInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<Scalars['Float']['input']>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialUpdateManyInput;
  /** Document search */
  where: TestimonialWhereInput;
};

export type TestimonialUpdateOneInlineInput = {
  /** Connect existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
  /** Delete currently connected Testimonial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Testimonial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Testimonial document */
  update?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Testimonial document */
  upsert?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialUpdateInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialCreateInput;
  /** Update document if it exists */
  update: TestimonialUpdateInput;
};

export type TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialUpsertInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TestimonialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TestimonialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  company_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  company_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  company_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  company_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  company_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  company_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  ratings?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  ratings_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  ratings_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  ratings_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  ratings_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  ratings_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  ratings_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  ratings_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  urlImage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  urlImage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  urlImage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  urlImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlImage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  urlImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  urlImage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  urlImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  urlImage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  urlImage_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TestimonialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TestimonialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Testimonial record uniquely */
export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  DescendantsOf = 'descendants_of',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCertificateCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCertificateCategoriesQuery = { __typename?: 'Query', certificateCategories: Array<{ __typename?: 'CertificateCategory', id: string, name: string, slug: string }> };

export type GetCertificatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCertificatesQuery = { __typename?: 'Query', certificates: Array<{ __typename?: 'Certificate', id: string, name: string, issuer: string, description: string, certificateCode: string, issued: any, sourceUrl?: string | null, issuerImage: { __typename?: 'Asset', url: string }, categories: Array<{ __typename?: 'CertificateCategory', id: string, name: string, slug: string }>, file: { __typename?: 'Asset', url: string } }> };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', address?: string | null, alias?: string | null, description: string, email: string, fullName: string, dateOfBirth?: any | null, phone: string, socialMedia: Array<{ __typename?: 'SocialMedia', title: string, url: string }>, image: { __typename?: 'Asset', url: string } }> };

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProjectBySlugQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: string, name: string, overview: string, liveDemo?: string | null, sourceUrl?: string | null, client: string, duration?: string | null, projectStatus: ProjectStatus, keyFeatures: Array<string>, categories: Array<{ __typename?: 'ProjectCategory', id: string, name: string }>, technologies: Array<{ __typename?: 'Technology', id: string, name: string, url?: string | null }>, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> } | null };

export type GetProjectCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectCategoriesQuery = { __typename?: 'Query', projectCategories: Array<{ __typename?: 'ProjectCategory', id: string, name: string, slug: string }> };

export type GetProjectsPaginationQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  where?: InputMaybe<ProjectWhereInput>;
}>;


export type GetProjectsPaginationQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string, slug?: string | null, overview: string, liveDemo?: string | null, sourceUrl?: string | null, categories: Array<{ __typename?: 'ProjectCategory', id: string, name: string, slug: string }>, technologies: Array<{ __typename?: 'Technology', id: string, name: string, slug: string }>, galeries: Array<{ __typename?: 'Asset', url: string }> }> };

export type GetResumesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResumesQuery = { __typename?: 'Query', educations: Array<{ __typename?: 'Education', id: string, gpa?: number | null, maxScore?: number | null, resume: { __typename?: 'Resume', organization: string, role: string, startDate: any, endDate?: any | null, textRecords: Array<string>, groupRecords: Array<{ __typename?: 'GroupRecord', id: string, label: string, textRecords: Array<string>, resumeRecords: Array<{ __typename?: 'ResumeRecord', id: string, record: string, startDate: any, endDate?: any | null, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> }>, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> }>, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> } }>, experiences: Array<{ __typename?: 'Experience', id: string, resume: { __typename?: 'Resume', organization: string, role: string, startDate: any, endDate?: any | null, textRecords: Array<string>, groupRecords: Array<{ __typename?: 'GroupRecord', id: string, label: string, textRecords: Array<string>, resumeRecords: Array<{ __typename?: 'ResumeRecord', id: string, record: string, startDate: any, endDate?: any | null, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> }>, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> }>, galeries: Array<{ __typename?: 'Asset', id: string, url: string }> }, technologies: Array<{ __typename?: 'Technology', id: string }> }> };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, icon: string, name: string, description: string }> };

export type GetTechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTechnologiesQuery = { __typename?: 'Query', technologies: Array<{ __typename?: 'Technology', id: string, name: string, slug: string, url?: string | null }> };


export const GetCertificateCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCertificateCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"certificateCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetCertificateCategoriesQuery, GetCertificateCategoriesQueryVariables>;
export const GetCertificatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCertificates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"certificates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"issuer"}},{"kind":"Field","name":{"kind":"Name","value":"issuerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"certificateCode"}},{"kind":"Field","name":{"kind":"Name","value":"issued"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}}]}}]}}]} as unknown as DocumentNode<GetCertificatesQuery, GetCertificatesQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetProjectBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"liveDemo"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"projectStatus"}},{"kind":"Field","name":{"kind":"Name","value":"keyFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectBySlugQuery, GetProjectBySlugQueryVariables>;
export const GetProjectCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetProjectCategoriesQuery, GetProjectCategoriesQueryVariables>;
export const GetProjectsPaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProjectsPagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"liveDemo"}},{"kind":"Field","name":{"kind":"Name","value":"sourceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsPaginationQuery, GetProjectsPaginationQueryVariables>;
export const GetResumesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getResumes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"educations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resume"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"textRecords"}},{"kind":"Field","name":{"kind":"Name","value":"groupRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"textRecords"}},{"kind":"Field","name":{"kind":"Name","value":"resumeRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"record"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gpa"}},{"kind":"Field","name":{"kind":"Name","value":"maxScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"resume"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"textRecords"}},{"kind":"Field","name":{"kind":"Name","value":"groupRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"textRecords"}},{"kind":"Field","name":{"kind":"Name","value":"resumeRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"record"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"galeries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetResumesQuery, GetResumesQueryVariables>;
export const GetSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSkills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetSkillsQuery, GetSkillsQueryVariables>;
export const GetTechnologiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTechnologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetTechnologiesQuery, GetTechnologiesQueryVariables>;