import request from "@/utils/request"

// 咨询数据
export const getConsultationDataAPI = (params) => {
  return request({
    url: "/psychological-chat/sessions",
    method: "get",
    params,
  })
}
//会话消息详情列表
export const getSessionMessagesAPI = (sessionId) => {
  return request({
    url: `/psychological-chat/sessions/${sessionId}/messages`,
    method: "get",
  })
}
