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

mindplot.DesignerUndoManager = new Class({
    initialize: function()
    {
        this._undoQueue = [];
        this._redoQueue = [];
        this._baseId = 0;
    },
    enqueue:function(command)
    {
        core.assert(command, "Command can  not be null");
        var length = this._undoQueue.length;
        if (command.discartDuplicated && length > 0)
        {
            // Skip duplicated events ...
            var lastItem = this._undoQueue[length - 1];
            if (lastItem.discartDuplicated != command.discartDuplicated)
            {
                this._undoQueue.push(command);
            }
        } else
        {
            this._undoQueue.push(command);
        }
        this._redoQueue = [];
    },
    execUndo: function(commandContext)
    {
        if (this._undoQueue.length > 0)
        {
            var command = this._undoQueue.pop();
            this._redoQueue.push(command);

            command.undoExecute(commandContext);
        }
    },
    execRedo: function(commandContext)
    {
        if (this._redoQueue.length > 0)
        {
            var command = this._redoQueue.pop();
            this._undoQueue.push(command);
            command.execute(commandContext);
        }
    },
    _buildEvent: function()
    {
        return {undoSteps: this._undoQueue.length, redoSteps:this._redoQueue.length};
    },
    markAsChangeBase: function()
    {
        var undoLenght = this._undoQueue.length;
        if (undoLenght > 0)
        {
            var command = this._undoQueue[undoLenght - 1];
            this._baseId = command.getId();
        } else
        {
            this._baseId = 0;
        }
    },
    hasBeenChanged: function()
    {
        var result = true;
        var undoLenght = this._undoQueue.length;
        if (undoLenght == 0 && this._baseId == 0)
        {
            result = false;
        } else if(undoLenght>0)
        {
            var command = this._undoQueue[undoLenght - 1];
            result = (this._baseId != command.getId());
        }
        return result;
    }});