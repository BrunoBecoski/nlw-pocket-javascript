import { useQuery } from '@tanstack/react-query'

import { getSummary } from './http/get-summary'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { CreateGoal } from './components/create-goal'

export function App() {
  const { data } = useQuery({
		queryKey: ['get-summary'],
		queryFn: getSummary,
		staleTime: 1000 * 60 // 60 seconds
	})

	return (
		<Dialog>
			{data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

			<CreateGoal />
		</Dialog>
	)
}
  