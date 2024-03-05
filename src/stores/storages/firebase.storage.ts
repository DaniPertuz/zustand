import { StateStorage, createJSONStorage } from 'zustand/middleware';

const firebaseURL: string = 'https://zustand-storage-dp-default-rtdb.firebaseio.com/zustand';

const firebaseStorageAPI: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${firebaseURL}/${name}.json`).then(res => res.json());
      return JSON.stringify(data);
    } catch (error) {
      throw error;
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseURL}/${name}.json`, {
      method: 'PUT',
      body: value
    }).then(res => res.json());
    return;
  },
  removeItem: function (name: string): void | Promise<void> {
    console.log('removeItem', { name });
  }
};

export const firebaseStorage = createJSONStorage(() => firebaseStorageAPI);