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

package com.wisemapping.security.aop;

import com.wisemapping.model.UserRole;
import com.wisemapping.model.User;
import com.wisemapping.model.MindMap;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

public class UpdateSecurityAdvise
    extends BaseSecurityAdvice
    implements MethodInterceptor
{

    private UserRole grantedRole = UserRole.COLLABORATOR;

    public Object invoke(MethodInvocation methodInvocation) throws Throwable {
        checkRole(methodInvocation);
        return methodInvocation.proceed();
    }

    protected boolean isAllowed(User user, MindMap map)
    {
        return getMindmapService().isAllowedToView(user,map,grantedRole);
    }

    protected boolean isAllowed(User user, int mapId)
    {
        return getMindmapService().isAllowedToView(user,mapId,grantedRole);
    }
}
