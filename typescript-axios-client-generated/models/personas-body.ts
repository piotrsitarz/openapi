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
import { Persona } from './persona';
/**
 * 
 * @export
 * @interface PersonasBody
 */
export interface PersonasBody {
    /**
     * 
     * @type {number}
     * @memberof PersonasBody
     */
    personaId?: number;
    /**
     * 
     * @type {Persona}
     * @memberof PersonasBody
     */
    updateData?: Persona;
}
