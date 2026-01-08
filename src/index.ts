#!/usr/bin/env node

import { Command } from "commander";
import { registerAddCommand } from "./commands/AddCommand.js";
import { registerListCommand } from "./commands/ListCommand.js";
import { registerUpdateCommand } from "./commands/UpdateCommand.js";
import { registerMarkCommand } from "./commands/MarkCommand.js";

const program = new Command();

program
	.name("task-cli")
	.description("cli para gerenciar minhas tarefas")
	.version("1.0.2");

registerAddCommand(program);
registerListCommand(program);
registerUpdateCommand(program);
registerMarkCommand(program);

program.parse(process.argv);
