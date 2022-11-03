import { MboApi } from '@/api'
import { TodoResponse } from '../types'

export default {
  getListGoalCycle(query?: any) {
    return MboApi.get('', query)
  },
  getDetailGoalCycle(cycleId: string) {
    const url = `/${cycleId}`
    return MboApi.get(url)
  },
  createGoalCycle(data: any) {
    return MboApi.post('', data)
  },
  getListTodo(query?: any) {
    return MboApi.get('', query)
  },
  getDetailTodo(todoId: string): Promise<TodoResponse> {
    const url = `/${todoId}`
    return MboApi.get(url)
  }
}
