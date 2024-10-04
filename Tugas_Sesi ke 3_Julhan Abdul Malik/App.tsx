import { View, Text, Alert, TextInput, Pressable, Image, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';

const App = () => {
    const [title, setTitle] = useState<string>('');
    const [todo, setTodo] = useState<any[]>([
        {
            id: 1,
            title: 'Belajar',
            completed: false,
        }
    ]);

    const handleAddToko = () => {
        if (!title) Alert.alert('Erorr', 'Tolong masukan list kamu');
        const newTodo = {
            id: todo.length + 1,
            title: title,
            completed: false,
        };
        setTodo([...todo, newTodo]);
        setTitle('');
    };

    const handleDelete = (id: number) => {
        const updatedTodo = todo.filter(item => item.id !== id);
        setTodo(updatedTodo);
    };

    const handleEdit = (id: number) => {
        const itemToEdit = todo.find(item => item.id === id);
        if (itemToEdit) {
            setTitle(itemToEdit.title);
            handleDelete(id);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.location}>
                    <Text style={{ color: 'black', fontWeight: 400, fontSize: 13 }}>
                        Location
                    </Text>
                    <Text style={{ fontWeight: 600, color: 'grey', fontSize: 14 }}>
                        Sukabumi, Indonesia
                    </Text>
                </View>
                <Image
                    source={require('./src/assets/profile.jpg')}
                    style={styles.profil}
                />
            </View>
            <Text style={styles.judul}>
                Aplikasi To Do List
            </Text>
            <View style={styles.input}>
                <TextInput
                    style={styles.kolomInput}
                    placeholder='Masukan list kamu'
                    placeholderTextColor='white'
                    value={title}
                    onChangeText={setTitle}
                />
                <Pressable
                    style={styles.pressable}
                    onPress={handleAddToko}
                >
                    <Text style={{ color: 'white' }}>
                        Add Todo
                    </Text>
                </Pressable>
            </View>
            <View style={styles.header2}>
                <Text style={styles.cell}>No</Text>
                <Text style={[styles.cell, { marginRight: 100 }]}>Kegiatan</Text>
                <Text style={styles.cell}>Aksi</Text>
            </View>
            {
                todo.map((item, index) => (
                    <View key={item.id} style={styles.row}>
                        <Text style={styles.cell2}>{index + 1}</Text>
                        <Text style={[styles.cell2, { marginRight: 65 }]}>{item.title}</Text>
                        <Text style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={styles.buttonEdit}
                                onPress={() => handleEdit(item.id)}
                            >
                                <Text style={{ color: 'white' }}>Edit</Text>
                            </Pressable>
                            <Pressable
                                style={styles.buttonDelete}
                                onPress={() => handleDelete(item.id)}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </Pressable>
                        </Text>
                    </View>
                ))
            }
        </View >
    );
};

export default App