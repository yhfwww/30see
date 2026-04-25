const StatsAPI = {
    workspace: '30seeweb',
    counterName: '30see',

    async getStats() {
        try {
            const response = await fetch(`https://api.counterapi.dev/v2/${this.workspace}/${this.counterName}/stats`);
            const data = await response.json();
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
            const data = await response.json();
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