#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

interface AddOptions {
	description?: string;
}

program
	.command("add")
	.argument("<task>", "task to add")
	.option("-d, --description <description>", "description of task")
	.action((task: string, options: AddOptions) => {
		console.log(`task: '${task}'`);
		console.log(`description: '${options.description}'`);
	});

program.parse(process.argv);
