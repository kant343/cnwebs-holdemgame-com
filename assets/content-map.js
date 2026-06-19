// assets/content-map.js
// 站点内容分区与搜索功能

const siteContentMap = {
  siteUrl: "https://cnwebs-holdemgame.com",
  tags: ["德州扑克游戏", "策略", "规则", "赛事", "技巧"],
  sections: [
    {
      id: "sec-home",
      title: "首页",
      keywords: ["德州扑克游戏", "最新资讯", "赛事预告"]
    },
    {
      id: "sec-rules",
      title: "规则教程",
      keywords: ["德州扑克游戏", "规则", "玩法", "手牌", "底池"]
    },
    {
      id: "sec-strategy",
      title: "策略技巧",
      keywords: ["德州扑克游戏", "策略", "概率", "位置", "诈唬"]
    },
    {
      id: "sec-tournaments",
      title: "赛事中心",
      keywords: ["德州扑克游戏", "赛事", "锦标赛", "排行"]
    },
    {
      id: "sec-community",
      title: "社区讨论",
      keywords: ["德州扑克游戏", "讨论", "经验分享", "牌谱"]
    }
  ],
  pages: [
    {
      url: "/home",
      sectionId: "sec-home",
      title: "首页",
      tag: "德州扑克游戏",
      description: "欢迎来到德州扑克游戏世界，获取最新动态"
    },
    {
      url: "/rules/basics",
      sectionId: "sec-rules",
      title: "基础规则",
      tag: "德州扑克游戏",
      description: "学习德州扑克游戏的基本规则与牌型"
    },
    {
      url: "/strategy/advanced",
      sectionId: "sec-strategy",
      title: "高级策略",
      tag: "德州扑克游戏",
      description: "深入探讨德州扑克游戏的高级策略与心理战"
    },
    {
      url: "/tournaments/schedule",
      sectionId: "sec-tournaments",
      title: "赛事日程",
      tag: "德州扑克游戏",
      description: "查看德州扑克游戏赛事安排与报名信息"
    },
    {
      url: "/community/tips",
      sectionId: "sec-community",
      title: "玩家心得",
      tag: "德州扑克游戏",
      description: "德州扑克游戏玩家分享的实用技巧与心得"
    }
  ]
};

/**
 * 根据搜索词过滤内容分区
 * @param {string} query - 搜索关键词
 * @returns {Array} 匹配的分区列表
 */
function filterSectionsByQuery(query) {
  if (!query || query.trim() === "") {
    return siteContentMap.sections;
  }
  const lowerQuery = query.toLowerCase().trim();
  return siteContentMap.sections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    return titleMatch || keywordMatch;
  });
}

/**
 * 根据搜索词过滤页面
 * @param {string} query - 搜索关键词
 * @returns {Array} 匹配的页面列表
 */
function filterPagesByQuery(query) {
  if (!query || query.trim() === "") {
    return siteContentMap.pages;
  }
  const lowerQuery = query.toLowerCase().trim();
  return siteContentMap.pages.filter(page => {
    const titleMatch = page.title.toLowerCase().includes(lowerQuery);
    const descMatch = page.description.toLowerCase().includes(lowerQuery);
    const tagMatch = page.tag.toLowerCase().includes(lowerQuery);
    return titleMatch || descMatch || tagMatch;
  });
}

/**
 * 简单搜索函数：同时搜索分区和页面
 * @param {string} query - 搜索关键词
 * @returns {Object} 包含匹配的分区和页面
 */
function simpleSearch(query) {
  return {
    matchedSections: filterSectionsByQuery(query),
    matchedPages: filterPagesByQuery(query)
  };
}

// 示例使用（仅用于演示，可删除）
// const result = simpleSearch("德州扑克游戏");
// console.log(result);