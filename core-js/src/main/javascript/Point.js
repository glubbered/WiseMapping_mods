/*
*    Copyright [2011] [wisemapping]
*
*   Licensed under WiseMapping Public License, Version 1.0 (the "License").
*   It is basically the Apache License, Version 2.0 (the "License") plus the
*   "powered by wisemapping" text requirement on every single page;
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the license at
*
*       http://www.wisemapping.org/license
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/

core.Point = function(x, y)
{
    this.x = x;
    this.y = y;
};

core.Point.prototype.setValue = function(x, y)
{
    this.x = x;
    this.y = y;
};

core.Point.prototype.inspect = function()
{
    return "{x:" + this.x + ",y:" + this.y + "}";
};

core.Point.prototype.clone = function()
{
    return new core.Point(this.x, this.y);
};

core.Point.fromString = function(point) {
    var values = point.split(',');
    return new core.Point(values[0], values[1]);
};
