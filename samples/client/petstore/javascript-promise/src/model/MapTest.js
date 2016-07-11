/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.MapTest = factory(root.SwaggerPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MapTest model module.
   * @module model/MapTest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MapTest</code>.
   * @alias module:model/MapTest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MapTest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapTest} obj Optional instance to populate.
   * @return {module:model/MapTest} The populated <code>MapTest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('map_map_of_string')) {
        obj['map_map_of_string'] = ApiClient.convertToType(data['map_map_of_string'], {'String': {'String': 'String'}});
      }
      if (data.hasOwnProperty('map_of_enum_string')) {
        obj['map_of_enum_string'] = ApiClient.convertToType(data['map_of_enum_string'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {{Object.<String, Object.<String, String>>}} map_map_of_string
   */
  exports.prototype['map_map_of_string'] = undefined;
  /**
   * @member {{Object.<String, module:model/MapTest.InnerEnum>}} map_of_enum_string
   */
  exports.prototype['map_of_enum_string'] = undefined;


  /**
   * Allowed values for the <code>inner</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InnerEnum = {
    /**
     * value: "UPPER"
     * @const
     */
    "UPPER": "UPPER",
    /**
     * value: "lower"
     * @const
     */
    "lower": "lower"  };


  return exports;
}));


