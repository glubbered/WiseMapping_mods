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

package com.wisemapping.dao;

import com.wisemapping.model.*;

import java.util.List;

public interface MindmapManager {

    Colaborator getColaboratorBy(String email);

    Colaborator getColaboratorBy(long id);
    
    List<MindmapUser> getMindmapUserByColaborator(final long colaboratorId);

    List<MindmapUser> getMindmapUserByRole(final UserRole userRole);

    MindmapUser getMindmapUserBy(final int mindmapId, final User user);

    List<MindMap> getAllMindmaps();

    MindMap getMindmapById(int mindmapId);

    MindMap getMindmapByTitle(final String name, final User user);

    void addColaborator (Colaborator colaborator);

    void addMindmap(User user, MindMap mindMap);

    public void addView(int mapId);

    void saveMindmap(MindMap mindMap);

    void updateMindmap(MindMap mindMap, boolean saveHistory);

    void removeColaborator(Colaborator colaborator);

    void removeMindmap(MindMap mindap);

    void removeMindmapUser(MindmapUser mindmapUser);

    public List<MindMap> search(MindMapCriteria criteria);

    public List<MindMap> search(MindMapCriteria criteria, int maxResult);

    public List<MindMapHistory> getHistoryFrom(int mindmapId);

    public MindMapHistory getHistory(int historyId);
}
