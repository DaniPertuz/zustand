import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {

  const doneTasks = useTaskStore(state => state.getStackByStatus('done'));
  const inProgressTasks = useTaskStore(state => state.getStackByStatus('in-progress'));
  const openTasks = useTaskStore(state => state.getStackByStatus('open'));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <JiraTasks title='Pendientes' tasks={openTasks} status='open' />

        <JiraTasks title='Avanzando' tasks={inProgressTasks} status='in-progress' />

        <JiraTasks title='Terminadas' tasks={doneTasks} status='done' />

      </div>





    </>
  );
};