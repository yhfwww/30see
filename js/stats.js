const StatsAPI = {
    host: window.location.hostname,

    async getStats() {
        try {
            const response = await fetch(`https://finicounter.eu.org/counter?host=${this.host}`);
            const data = await response.json();
            return {
                visits: data.total || 0,
                pages: {}
            };
        } catch (error) {
            console.error('获取统计失败:', error);
            return { visits: 0, pages: {} };
        }
    },

    async incrementVisit(page = 'index') {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://finicounter.eu.org/finicounter.js';
            script.async = true;
            script.onload = async () => {
                const stats = await this.getStats();
                resolve(stats);
            };
            script.onerror = async () => {
                console.error('FiniCounter 加载失败');
                resolve({ visits: 0, pages: {} });
            };
            document.head.appendChild(script);
        });
    },

    async getPageVisits(page) {
        const stats = await this.getStats();
        return stats.pages[page] || 0;
    }
};

window.StatsAPI = StatsAPI;