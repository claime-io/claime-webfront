/* tslint:disable */
/* eslint-disable */
/**
 * Claime Verifier
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
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  propertyType: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  propertyId: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  evidence: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  method: string
  /**
   *
   * @type {boolean}
   * @memberof InlineResponse200
   */
  verified: boolean
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  actual: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  at: string
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
     *
     * @param {string} eoa EOA to verify.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eoaGet: async (eoa: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'eoa' is not null or undefined
      assertParamExists('eoaGet', 'eoa', eoa)
      const localVarPath = `/{eoa}`.replace(
        `{${'eoa'}}`,
        encodeURIComponent(String(eoa)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: 'GET',
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
     *
     * @param {string} eoa EOA to verify.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eoaGet(
      eoa: string,
      options?: any,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<InlineResponse200>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.eoaGet(
        eoa,
        options,
      )
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
     *
     * @param {string} eoa EOA to verify.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eoaGet(eoa: string, options?: any): AxiosPromise<Array<InlineResponse200>> {
      return localVarFp
        .eoaGet(eoa, options)
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
   *
   * @param {string} eoa EOA to verify.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public eoaGet(eoa: string, options?: any) {
    return DefaultApiFp(this.configuration)
      .eoaGet(eoa, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
