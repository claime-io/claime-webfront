/* tslint:disable */
/* eslint-disable */
/**
 * Claime Verifier for Discord App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration'
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common'
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from './base'

/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
  /**
   *
   * @type {VerifyDiscord}
   * @memberof InlineObject
   */
  discord: VerifyDiscord
  /**
   *
   * @type {VerifyEoa}
   * @memberof InlineObject
   */
  eoa: VerifyEoa
}
/**
 *
 * @export
 * @interface VerifyDiscord
 */
export interface VerifyDiscord {
  /**
   *
   * @type {string}
   * @memberof VerifyDiscord
   */
  userId: string
  /**
   *
   * @type {string}
   * @memberof VerifyDiscord
   */
  guildId: string
  /**
   *
   * @type {string}
   * @memberof VerifyDiscord
   */
  validity: string
  /**
   *
   * @type {string}
   * @memberof VerifyDiscord
   */
  signature: string
}
/**
 * either \"message\" or \"rawTx\" is required.
 * @export
 * @interface VerifyEoa
 */
export interface VerifyEoa {
  /**
   *
   * @type {string}
   * @memberof VerifyEoa
   */
  signature: string
  /**
   *
   * @type {string}
   * @memberof VerifyEoa
   */
  message?: string
  /**
   *
   * @type {string}
   * @memberof VerifyEoa
   */
  rawTx?: string
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Endpoint for Discord App
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postDiscordApp: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postDiscordVerify: async (
      inlineObject?: InlineObject,
      options: any = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/verify`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        inlineObject,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
  return {
    /**
     * Endpoint for Discord App
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async postDiscordApp(
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.postDiscordApp(
        options,
      )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async postDiscordVerify(
      inlineObject?: InlineObject,
      options?: any,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.postDiscordVerify(inlineObject, options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
  }
}

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = DefaultApiFp(configuration)
  return {
    /**
     * Endpoint for Discord App
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postDiscordApp(options?: any): AxiosPromise<void> {
      return localVarFp
        .postDiscordApp(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postDiscordVerify(
      inlineObject?: InlineObject,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .postDiscordVerify(inlineObject, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
  /**
   * Endpoint for Discord App
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public postDiscordApp(options?: any) {
    return DefaultApiFp(this.configuration)
      .postDiscordApp(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {InlineObject} [inlineObject]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public postDiscordVerify(inlineObject?: InlineObject, options?: any) {
    return DefaultApiFp(this.configuration)
      .postDiscordVerify(inlineObject, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
