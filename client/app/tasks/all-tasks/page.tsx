'use client'
import React, { useEffect } from 'react'
import { TaskHeader } from '../components/TaskHeader'
import TasksSubHeader from '../components/TasksSubHeader'
import AddTask from '../components/AddTask'
import useRiderect from '@/hooks/useUserRiderect'
import {motion} from 'framer-motion'
import { useTasksContext } from '@/context/taskContext'
import { filteredTasks } from '@/utils/utilities'
import { Task } from '@/utils/types'
import TaskItem from '../components/TaskItem'
import AddTaskModel from '../components/AddTaskModel'
import { container, item } from "@/utils/animations";


function page() {
  useRiderect('/login')


  const { tasks, priority, setPriority, pendingTasks } = useTasksContext()

  const filtered = filteredTasks(tasks, priority)

  useEffect(() => {
    setPriority('All')
  }, [])

  const totalTasks = pendingTasks.length

  return (

    <div>
      <TaskHeader totalTasks={totalTasks} Status={' Active Tasks'} firstPhrase={'You have '}/>
      <TasksSubHeader title={"All Tasks"}/>
      <motion.div className='mt-3 grid grid-cols-3 gap-2'>
            {filtered.map((task: Task, i: number) => (
              <TaskItem key={i} task={task} />
            ))}
        <motion.button className='
           transition duration-200 ease-in-out
        '  variants={item}>
          <AddTask />
          
        </motion.button>
        </motion.div>
      </div>
  )
}

export default page