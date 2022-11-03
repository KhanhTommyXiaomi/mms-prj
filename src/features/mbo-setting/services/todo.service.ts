import ApiClient from '@/api/api'
import { TodoResponse } from '../types'

export default {
  getListTodoApi(query?: any) {
    return ApiClient.get('/todos', query)
  },
  getDetailTodoApi(todoId: string): Promise<TodoResponse> {
    const url = `/todos/${todoId}`
    return ApiClient.get(url)
  }
}
