import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { useTodoStore } from '@/infrastructure/state/todoStore';
import Button from '@/presentation/components/common/button';
import { CreateTodo } from '@/application/todo/createTodo';
import { UpdateTodo } from '@/application/todo/updateTodo';
import { Todo } from '@/domain/entities/Todo';

export default function TodoScreen() {
  const { todos, isLoading, error, deleteTodo } = useTodoStore();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = async () => {
    const createTodo = new CreateTodo();

    await createTodo.execute(newTodoTitle);
    setNewTodoTitle('');
  };

  const handleToggleComplete = async (todo: Todo) => {
    const updateTodo = new UpdateTodo();

    await updateTodo.execute({ ...todo, completed: !todo.completed });
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Todo List (from {process.env.EXPO_PUBLIC_URL})
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', padding: 10, marginRight: 10 }}
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
          placeholder="Enter new todo"
        />
        <Button onPress={handleAddTodo}>Add</Button>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Pressable onPress={() => handleToggleComplete(item)}>
              <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.title}
              </Text>
            </Pressable>
            <TouchableOpacity onPress={() => deleteTodo(item.id)} style={{ padding: 5 }}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
