import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary';
import { CreateGoal } from './components/create-goal'

export function App() {
	return (
		<Dialog>
			{/* <EmptyGoals /> */}

			<Summary />

			<CreateGoal />
		</Dialog>
	);
}
  