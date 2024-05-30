import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assignments: [],
  assignment: { title: 'New Assignment', description: 'New Description' },
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state: any, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    selectAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state: any, action) => {
      state.assignments = state.assignments.map((assignment: any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  selectAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
