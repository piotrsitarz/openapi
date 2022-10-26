/* tslint:disable */
/* eslint-disable */
/**
 * Personas APIs Definition
 * # About Us **Persona Builder** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 *
 * OpenAPI spec version: 0.0.1
 * Contact: support@personas.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse200 } from '../models';
/**
 * PersonasReadOnlySDKApi - axios parameter creator
 * @export
 */
export const PersonasReadOnlySDKApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Compare your wallet address with Persona to see if it meets the criteria
         * @summary Compare wallet address with Persona
         * @param {number} personaId 
         * @param {number} walletAddress 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletPersonaComparison: async (personaId: number, walletAddress: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personaId' is not null or undefined
            if (personaId === null || personaId === undefined) {
                throw new RequiredError('personaId','Required parameter personaId was null or undefined when calling getWalletPersonaComparison.');
            }
            // verify required parameter 'walletAddress' is not null or undefined
            if (walletAddress === null || walletAddress === undefined) {
                throw new RequiredError('walletAddress','Required parameter walletAddress was null or undefined when calling getWalletPersonaComparison.');
            }
            const localVarPath = `/personas/comparison`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            if (personaId !== undefined) {
                localVarQueryParameter['personaId'] = personaId;
            }

            if (walletAddress !== undefined) {
                localVarQueryParameter['walletAddress'] = walletAddress;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PersonasReadOnlySDKApi - functional programming interface
 * @export
 */
export const PersonasReadOnlySDKApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Compare your wallet address with Persona to see if it meets the criteria
         * @summary Compare wallet address with Persona
         * @param {number} personaId 
         * @param {number} walletAddress 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletPersonaComparison(personaId: number, walletAddress: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200>>> {
            const localVarAxiosArgs = await PersonasReadOnlySDKApiAxiosParamCreator(configuration).getWalletPersonaComparison(personaId, walletAddress, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PersonasReadOnlySDKApi - factory interface
 * @export
 */
export const PersonasReadOnlySDKApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Compare your wallet address with Persona to see if it meets the criteria
         * @summary Compare wallet address with Persona
         * @param {number} personaId 
         * @param {number} walletAddress 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletPersonaComparison(personaId: number, walletAddress: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200>> {
            return PersonasReadOnlySDKApiFp(configuration).getWalletPersonaComparison(personaId, walletAddress, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PersonasReadOnlySDKApi - object-oriented interface
 * @export
 * @class PersonasReadOnlySDKApi
 * @extends {BaseAPI}
 */
export class PersonasReadOnlySDKApi extends BaseAPI {
    /**
     * Compare your wallet address with Persona to see if it meets the criteria
     * @summary Compare wallet address with Persona
     * @param {number} personaId 
     * @param {number} walletAddress 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonasReadOnlySDKApi
     */
    public async getWalletPersonaComparison(personaId: number, walletAddress: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200>> {
        return PersonasReadOnlySDKApiFp(this.configuration).getWalletPersonaComparison(personaId, walletAddress, options).then((request) => request(this.axios, this.basePath));
    }
}