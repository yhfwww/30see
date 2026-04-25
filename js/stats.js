const StatsAPI = {
    workspace: '30seeweb',
    counterName: '30see',

    async getStats() {
        try {
            const response = await fetch(`https://api.counterapi.dev/v2/${this.workspace}/${this.counterName}/stats`);
            
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('401 Unauthorized: 无效或过期的 token');
                } else if (response.status === 403) {
                    throw new Error('403 Forbidden: token 没有所需的权限');
                } else if (response.status === 404) {
                    throw new Error('404 Not Found: workspace 名称不正确');
                } else {
                    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
                }
            }
            
            const result = await response.json();
            const data = result.data || {};
            return {
                visits: data.up_count || 0,
                pages: {}
            };
        } catch (error) {
            console.error('获取统计失败:', error);
            return { visits: 0, pages: {} };
        }
    },

    async incrementVisit(page = 'index') {
        try {
            const response = await fetch(`https://api.counterapi.dev/v2/${this.workspace}/${this.counterName}/up`);
            
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('401 Unauthorized: 无效或过期的 token');
                } else if (response.status === 403) {
                    throw new Error('403 Forbidden: token 没有所需的权限');
                } else if (response.status === 404) {
                    throw new Error('404 Not Found: workspace 名称不正确');
                } else {
                    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
                }
            }
            
            const result = await response.json();
            const data = result.data || {};
            return {
                visits: data.up_count || 0,
                pages: {}
            };
        } catch (error) {
            console.error('增加访问量失败:', error);
            return { visits: 0, pages: {} };
        }
    },

    async getPageVisits(page) {
        const stats = await this.getStats();
        return stats.pages[page] || 0;
    }
};

window.StatsAPI = StatsAPI;