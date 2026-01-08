import fs from "fs/promises";
import path from "path";
import { Task, TaskStatusType } from "../types/Task.js";

const DB_PATH = path.join(process.cwd(), "tasks.json");

export class TaskService {
	private async loadTasks(): Promise<Task[]> {
		try {
			const data = await fs.readFile(DB_PATH, "utf-8");
			return JSON.parse(data);
		} catch (err: unknown) {
			// console.error(err);
			return [];
		}
	}

	private async saveTasks(tasks: Task[]): Promise<void> {
		await fs.writeFile(DB_PATH, JSON.stringify(tasks, null, 2));
	}

	async addTask(title: string, description: string = ""): Promise<Task> {
		const tasks = await this.loadTasks();

		const newTask: Task = {
			id: tasks.length + 1,
			title,
			description,
			status: "todo",
		};

		tasks.push(newTask);
		await this.saveTasks(tasks);

		return newTask;
	}

	async updateTask(
		id: number,
		_newData: {
			title?: string;
			description?: string;
			status?: TaskStatusType;
		},
	): Promise<Task> {
		const tasks = await this.loadTasks();

		const taskIndex = tasks.findIndex((task: Task) => task.id == id);
		if (taskIndex === -1) {
			throw new Error(`tarefa com o ID ${id} não encontrada.`);
		}
		const actualTask = tasks[taskIndex];

		const newData = Object.fromEntries(
			Object.entries(_newData).filter(([_, v]) => v !== undefined),
		);

		const newTask = {
			...actualTask,
			...newData,
		};

		tasks[taskIndex] = newTask;
		await this.saveTasks(tasks);

		return newTask;
	}

	async listTasks(status?: TaskStatusType): Promise<Task[]> {
		const tasks = await this.loadTasks();

		return !status
			? tasks
			: tasks.filter((task: Task) => task.status == status);
	}
}
