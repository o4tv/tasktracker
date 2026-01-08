export type TaskStatusType = "todo" | "in-progress" | "done";

export interface Task {
	id: number;
	title: string;
	description: string;
	status: TaskStatusType;
}
