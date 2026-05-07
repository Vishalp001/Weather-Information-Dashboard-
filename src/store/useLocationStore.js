import { create } from 'zustand'

const useLocationStore = create((set) => ({
  location: null,
  setLocationStore: (data) => set(data),
}))

export default useLocationStore
