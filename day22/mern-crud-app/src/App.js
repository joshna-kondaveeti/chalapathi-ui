/*import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({ name: newItem });
    setItems([...items, response.data]);
    setNewItem('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: item.name });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  setItems(items.map((i) => (i._id === item._id ? { ...i, name: e.target.value } : i)))
                }
              />
            ) : (
              <span>{item.name}</span>
            )}
            {editingItem === item._id ? (
              <button onClick={() => handleUpdateItem(item)}>Save</button>
            ) : (
              <button onClick={() => setEditingItem(item._id)}>Edit</button>
            )}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App; 

// This is the code for table */


import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ sid: '', sname: '', sage: '', ssalary: '',saddress:"" });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem(newItem);
    setItems([...items, response.data]);
    setNewItem({ sid: '', sname: '', sage: '', ssalary: '' ,saddress:""});
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, item);
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="number"
        value={newItem.eid}
        onChange={(e) => setNewItem({ ...newItem, sid: e.target.value })}
        placeholder="ID"
      />
      <input
        type="text"
        value={newItem.sname}
        onChange={(e) => setNewItem({ ...newItem, sname: e.target.value })}
        placeholder="Name"
      />
      <input
        type="number"
        value={newItem.sage}
        onChange={(e) => setNewItem({ ...newItem, sage: e.target.value })}
        placeholder="Age"
      />
      <input
        type="number"
        value={newItem.ssalary}
        onChange={(e) => setNewItem({ ...newItem, ssalary: e.target.value })}
        placeholder="Salary"
      />
      <input
        type="text"
        value={newItem.saddress}
        onChange={(e) => setNewItem({ ...newItem, saddress: e.target.value })}
        placeholder="Addrerss"
      />

      <button onClick={handleAddItem}>Add</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.sid}</td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={item.sname}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, sname: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.sname
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="number"
                    value={item.sage}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, sage: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.sage
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="number"
                    value={item.ssalary}
                    onChange={(e) =>
                      setItems(items.map((i) => (i._id === item._id ? { ...i, ssalary: e.target.value } : i)))
                    }
                  />
                ) : (
                  item.ssalary
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <button onClick={() => handleUpdateItem(item)}>Save</button>
                ) : (
                  <button onClick={() => setEditingItem(item._id)}>Edit</button>
                )}
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App; 