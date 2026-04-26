import request from '@/utils/request'

// 查询知识文章列表
export const getKnowledgeArticleListAPI = (params) => {
  return request({
    url: '/knowledge/article/page',
    method: 'GET',
    params
  })
}

// 获取知识文章详情
export const getKnowledgeArticleDetailAPI = (id) => {
  return request({
    url: `/knowledge/article/${id}`,
    method: 'GET'
  })
}
