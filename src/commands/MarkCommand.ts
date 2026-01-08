import { Command } from "commander";
import { TaskService } from "../services/TaskService.js";
import { TaskStatusType } from "../types/Task.js";

export function registerMarkCommand(program: Command) {
	program
		.command("mark")
		.description("atualiza o status de uma tarefa da lista")
		.arguments("<status> <id>")
		.action(async (status: TaskStatusType, id: number) => {
			const service = new TaskService();

			try {
				const updatedTask = await service.updateTask(id, { status });
				console.log(`Tarefa atualizada com sucesso. (ID: ${updatedTask.id})`);
				console.log(`Título da tarefa: '${updatedTask.title}'`);
				if (updatedTask.description)
					console.log(`Descrição da tarefa: '${updatedTask.description}'`);
			} catch (err: unknown) {
				console.error(err);
			}
		});
}
