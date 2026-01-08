import { Command } from "commander";
import { TaskService } from "../services/TaskService.js";

export function registerAddCommand(program: Command) {
	program
		.command("add")
		.description("adiciona tarefa a lista")
		.argument("<task>", "título da tarefa")
		.option("-d, --description <description>", "descrição da tarefa")
		.action(async (title: string, options: { description: string }) => {
			const service = new TaskService();

			try {
				const newTask = await service.addTask(title, options.description);
				console.log(`Tarefa adicionada com sucesso. (ID: ${newTask.id})`);
				console.log(`Título da tarefa: '${newTask.title}'`);
				if (newTask.description)
					console.log(`Descrição da tarefa: '${newTask.description}'`);
				console.log(`status da tarefa: '${newTask.description}'`);
			} catch (err: unknown) {
				console.error(err);
			}
		});
}
