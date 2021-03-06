/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
function AsyncFragmentErrorNode(props) {
  AsyncFragmentErrorNode.$super.call(this, 'async-fragment-error');
    if (props) {
        this.setProperties(props);
    }
}

AsyncFragmentErrorNode.nodeType = 'element';

AsyncFragmentErrorNode.prototype = {
    doGenerateCode: function (template) {
        throw new Error('Illegal State. This node should have been removed');
    }
};

module.exports = AsyncFragmentErrorNode;
