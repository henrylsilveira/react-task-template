import { useState } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import '../styles/tasklist.scss'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    newTaskTitle.trim() !== '' &&
      setTasks([...tasks, {
        id: Math.random(),
        title: newTaskTitle.trim(),
        isComplete: false
      }])
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task) => {
      return task.id === id ? {
        ...task,
        isComplete: !task.isComplete
      } : task
    })

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}
/*
## O que devo editar na aplica????o?

Com o template j?? clonado, as dep??ndencias instaladas, 
voc?? deve completar onde n??o possui c??digo com o c??digo para atingir os objetivos de cada teste. Nesse desafio, voc?? deve editar apenas o seguinte arquivo para completar as funcionalidades da aplica????o:

- [src/components/TaskList.tsx;]
(https://github.com/rocketseat-education/ignite-template-reactjs-conceitos-do-react/blob/main/src/components/TaskList.tsx)

### components/TaskList.tsx

Esse ?? o componente respons??vel por todas as funcionalidades da aplica????o, 
?? um componente simples, mas onde botaremos em pr??tica v??rias partes da manipula????o do estado.

Voc?? deve criar as funcionalidades para as tr??s fun????es presentes nesse arquivo, que s??o:

- **handleCreateNewTask**: Deve ser poss??vel adicionar uma nova task no estado de `tasks`, 
com os campos `id` que deve ser gerado de forma aleat??ria, `title` que deve ser um texto e `isComplete` 
que deve iniciar como false.
- **handleToggleTaskCompletion:** Deve alterar o status de `isComplete` para uma task com um ID 
espec??fico que ?? recebido por par??metro.
- **handleRemoveTask:** Deve receber um ID por par??metro e remover a task que cont??m esse ID do estado.

## Especifica????o dos testes

Em??cada??teste,??tem??uma??breve??descri????o??no??que??sua??aplica????o??deve??cumprir??para??que??o??teste??passe.

Caso??voc????tenha??d??vidas??quanto??ao??que??s??o??os??testes,??e??como??interpret??-los,??d????uma??olhada??em??**
[nosso??FAQ](https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e45767664)**

Para esse desafio, temos os seguintes testes:

### Teste TaskList.spec.tsx

- **should be able to add a task**

Para que esse teste passe, voc?? deve permitir que task seja criada e com isso, exibida em tela. 
As taks criadas devem conter os atributos seguindo o padr??o da interface, que ??:

```tsx
interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}
```

- **should not be able to add a task with an empty title**

Para que esse teste passe, antes de criar uma nova task, voc?? deve validar se algo foi digitado no 
input e n??o permitir a cria????o da task caso o valor seja vazio, caso o valor digitado seja vazio, voc?? deve impedir a cria????o da task.

- **should be able to remove a task**

Para que esse teste passe, voc?? deve permitir que ao clicar no bot??o com ??cone de uma lixeira, a 
task relacionada a esse bot??o seja removida do estado da aplica????o, consequentemente sendo removida da tela.

- **should be able to check a task**

Para que esse teste passe, voc?? deve permitir que ao clicar no checkbox ao lado da task, ela seja 
marcada como conclu??da ou n??o conclu??da de acordo com seu estado atual, alterando seu valor de `isComplete` 
de `false` para `true` ou ao contr??rio, de `true` para `false`.
*/