import { createContext, useContext, useReducer } from 'react'

const FamilyWizardContext = createContext()

const initialState = {
  currentStep: 1,
  family: {
    familyName: '',
    homePhone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  },
  parents: [],
  students: [],
  emergencyContacts: [],
  isEditing: false,
  editingIndex: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload }
    case 'UPDATE_FAMILY':
      return { ...state, family: { ...state.family, ...action.payload } }
    case 'ADD_PARENT':
      return { ...state, parents: [...state.parents, action.payload] }
    case 'UPDATE_PARENT':
      return {
        ...state,
        parents: state.parents.map((parent, index) =>
          index === action.payload.index ? action.payload.data : parent
        )
      }
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] }
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((student, index) =>
          index === action.payload.index ? action.payload.data : student
        )
      }
    case 'ADD_EMERGENCY_CONTACT':
      return {
        ...state,
        emergencyContacts: [...state.emergencyContacts, action.payload]
      }
    case 'UPDATE_EMERGENCY_CONTACT':
      return {
        ...state,
        emergencyContacts: state.emergencyContacts.map((contact, index) =>
          index === action.payload.index ? action.payload.data : contact
        )
      }
    case 'SET_EDITING':
      return {
        ...state,
        isEditing: action.payload.isEditing,
        editingIndex: action.payload.index
      }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

export function FamilyWizardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FamilyWizardContext.Provider value={{ state, dispatch }}>
      {children}
    </FamilyWizardContext.Provider>
  )
}

export const useFamilyWizard = () => useContext(FamilyWizardContext)
