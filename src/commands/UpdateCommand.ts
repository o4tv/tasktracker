import { Command } from "commander";
import { TaskService } from "../services/TaskService.js";

export function registerUpdateCommand(program: Command) {
	program
		.command("update")
		.description("atualiza uma tarefa da lista")
		.argument("<id>", "id da tarefa que será atualizada")
		.option("-t, --title <title>", "novo titulo da tarefa")
		.option("-d, --description <description>", "nova descrição da tarefa")
		.action(
			async (id: number, options: { title?: string; description?: string }) => {
				const service = new TaskService();

				try {
					const updatedTask = await service.updateTask(id, options);
					console.log(`Tarefa atualizada com sucesso. (ID: ${updatedTask.id})`);
					console.log(`Título da tarefa: '${updatedTask.title}'`);
					if (updatedTask.description)
						console.log(`Descrição da tarefa: '${updatedTask.description}'`);
				} catch (err: unknown) {
					console.error(err);
				}
			},
		);
}
