import request from '@/utils/request'


// 创建新会话
export const startSessionAPI = (data) => {
  return request({
    url: '/psychological-chat/session/start',
    method: 'POST',
    data
  })
}
//获取会话历史列表
export const getSessionListAPI = (params) => {
  return request({
    url: '/psychological-chat/sessions',
    method: 'GET',  
    params
  })
}
//删除会话记录
export const deleteSessionAPI = (sessionId) => {
  return request({
    url: `/psychological-chat/sessions/${sessionId}`,
    method: 'DELETE'
  })
}
//获取会话记录详情
export const getSessionDetailAPI = (sessionId) => {
  return request({
    url: `/psychological-chat/sessions/${sessionId}/messages`,
    method: 'GET'
  })
}
// 获取会话情绪分析结果
export const getSessionEmotionAPI = (sessionId) => {
  return request({
    url: `/psychological-chat/session/${sessionId}/emotion`,
    method: 'GET'
  })
}
