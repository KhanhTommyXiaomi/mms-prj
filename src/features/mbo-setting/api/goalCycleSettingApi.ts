import { MboApi } from '@/api'

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
}
