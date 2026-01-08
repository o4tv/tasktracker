import { Command } from "commander";
import { TaskService } from "../services/TaskService.js";

export function registerListCommand(program: Command) {
	program
		.command("list")
		.description("lista tarefas filtrada pelo status ou não.")
		.argument(`[todo|in-progress|done]`, "listar pelo status da tarefa")
		.action(async (status) => {
			const service = new TaskService();
			const tasks = await service.listTasks(status);

			if (tasks.length === 0) {
				console.log("nenhuma tarefas na lista");
				return;
			}

			console.table(tasks);
		});
}
