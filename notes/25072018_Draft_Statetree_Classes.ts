

export interface State {
    workoutPlan: WorkoutPlan;
    history: History[];
    currentSplitIndex: number;
}

export interface History {
    exerciseId: string;
    planId: string;
    weights: Weight[];
}

export interface Weight {
    date: number;
    weight: number;
}

export interface WorkoutPlan {
    id: string;
    name: string;
    tags: string[];
    timestamp: number;
    splits: Split[];
}

export interface Split {
    id: string;
    name: string;
    exercises: Exercise[];
}

export interface Exercise {
    name: string;
    id: string;
    muscles: string[];
}
