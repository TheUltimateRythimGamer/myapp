const API = 'https://backendtaskhelena.herokuapp.com/tasks';

export const getTasks = async () => {
    const res = await fetch(API);
    return await res.json();
}

export const getTask = async (id) => {
    const res = await fetch(`${API}/${id}`);
    return await res.json();
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'PUT',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newTask)
    });
    return await res.json();
}

export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });
}