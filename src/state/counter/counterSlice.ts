import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
    value: number;
}

const initialState: counterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("Pending")
        })
        builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        })
    }
})

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount + 1; // This is the payload
    }
)

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;