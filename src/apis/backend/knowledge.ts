import request from "@/utils/request"
import type { CategoryTreeItem, KnowledgeArticlePageParams, KnowledgeArticlePageResponse, KnowledgeArticleDetail, KnowledgeArticleParams, UploadFileResponse } from "@/types/backstage/knowledge"

// 获取分类树(知识文章分类下拉框可选的值)
export const getCategoryTreeAPI = (): Promise<CategoryTreeItem[]> => {
  return request({
    url: "/knowledge/category/tree",
    method: "get",
  })
}
// 获取知识文章列表
//get请求有参数时，需要在params中传递参数
export const getKnowledgeArticlePageAPI = (params: KnowledgeArticlePageParams): Promise<KnowledgeArticlePageResponse> => {
  return request({
    url: "/knowledge/article/page",
    method: "get",
    params,
  })
}
// 知识文章文件上传
export const uploadFileAPI = (file: File, businessInfo: { businessId: string }): Promise<UploadFileResponse> => {
  //创建FormData对象，用于存储文件和业务信息
  const formData = new FormData()
  formData.append("file", file)
  formData.append("businessType", "ARTICLE")
  formData.append("businessId", businessInfo.businessId)
  formData.append("businessFiled", "cover")
  return request({
    url: "/file/upload",
    method: "post",
    data: formData,
    // 上传文件时，不需要手动设置Content-Type，axios会自动处理
  })
}
//获取知识文章详情/knowledge/article/{id}
export const getKnowledgeArticleDetailAPI = (id: string): Promise<KnowledgeArticleDetail> => {
  return request({
    url: `/knowledge/article/${id}`,
    method: "get",
  })
}
//文章新增
//data为文章数据，包含标题、内容、分类、摘要、标签等
export const knowledgeArticleAPI = (data: KnowledgeArticleParams): Promise<KnowledgeArticleDetail> => {
  return request({
    url: "/knowledge/article",
    method: "post",
    data,
  })
}
//文章编辑/knowledge/article/{id}
//data为文章数据，包含标题、内容、分类、摘要、标签等
export const knowledgeArticleUpdateAPI = (id: string, data: KnowledgeArticleParams): Promise<KnowledgeArticleDetail> => {
  return request({
    url: `/knowledge/article/${id}`,
    method: "put",
    data,
  })
}
// 发布/下线知识文章
export const publishKnowledgeArticleAPI = (id: string, status: number): Promise<void> => {
  return request({
    url: `/knowledge/article/${id}/status`,
    method: "put",
    data: {
      status,
    }
  })
}
// 删除知识文章
export const deleteKnowledgeArticleAPI = (id: string): Promise<void> => {
  return request({
    url: `/knowledge/article/${id}`,
    method: "delete",
  })
}
