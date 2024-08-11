import React, { useEffect, useState } from 'react';
import { addTodo, getAllTodos } from '@/utils/supabaseFunction';
import TodoList from './TodoList';

const TodoApp = () => {
  const[ todos, setTodos ] = useState<any>([]);
  const[ title, setTitle ] = useState<string>('');

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    }
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === '') return;

    //Todoの追加
    await addTodo(title);
    let todo = await getAllTodos();
    setTodos(todo);

    setTitle('');
  };

  return <section className='text-center mb-2 text-2xl font-medium'>
    <h3>Supabase Todo App</h3>
    <form onSubmit={(e) => handleSubmit(e)} >
      <input type='text' className='text-black mr-2 shadow-lg p-1 outline-none' onChange={(e) => setTitle(e.target.value)} value={title} />
      <button className='text-black shadow-md border-2 p-1 rounded-lg bg-green-200'>Add</button>
    </form>
    <TodoList todos={todos}/>
  </section>
};

export default TodoApp;
