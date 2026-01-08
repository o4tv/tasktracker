# Task Tracker CLI

![TypeScript](https://img.shields.io/badge/TypeScript-89. 2%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-10.8%25-yellow)

Uma aplicação CLI (Command Line Interface) para gerenciar suas tarefas e listas de to-do diretamente do terminal. Projeto desenvolvido como parte do [Task Tracker Challenge do roadmap.sh](https://roadmap.sh/projects/task-tracker).

## 📋 Sobre o Projeto

Este projeto é uma solução para o desafio de criação de um rastreador de tarefas via linha de comando. Ele permite que você:

- ✅ Adicione, atualize e gerencie tarefas
- 🔄 Marque tarefas com diferentes status (todo, in-progress, done)
- 📊 Liste tarefas filtradas por status
- 💾 Armazene dados em arquivo JSON local

O projeto foi construído com **TypeScript** e utiliza apenas módulos nativos do Node.js para manipulação de arquivos, sem dependências externas de frameworks pesados.

## 🚀 Funcionalidades

- **Adicionar tarefas**: Crie novas tarefas com título e descrição opcional
- **Atualizar tarefas**: Modifique o título, descrição ou status de tarefas existentes
- **Marcar status**: Altere o status das tarefas (todo, in-progress, done)
- **Listar tarefas**: Visualize todas as tarefas ou filtre por status
- **Persistência local**: Dados armazenados em arquivo JSON

## 📦 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Superset JavaScript com tipagem estática
- **Commander. js**: Framework para criação de interfaces CLI
- **Node.js File System (fs/promises)**: Manipulação de arquivos de forma assíncrona

## 🔧 Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/o4tv/tasktracker.git
cd tasktracker
```

2. Instale as dependências:

```bash
npm install
```

3. Compile o TypeScript:

```bash
npm run build
```

4. (Opcional) Instale globalmente para usar de qualquer lugar:

```bash
npm link
```

## 📖 Como Usar

### Adicionar uma nova tarefa

```bash
task-cli add "Comprar mantimentos"
# Saída: Tarefa adicionada com sucesso. (ID: 1)

# Com descrição
task-cli add "Estudar TypeScript" -d "Revisar generics e tipos avançados"
```

### Atualizar uma tarefa

```bash
# Atualizar título
task-cli update 1 -t "Comprar mantimentos e cozinhar"

# Atualizar descrição
task-cli update 1 -d "Ir ao mercado às 15h"

# Atualizar ambos
task-cli update 1 -t "Novo título" -d "Nova descrição"
```

### Marcar status de uma tarefa

```bash
# Marcar como em progresso
task-cli mark in-progress 1

# Marcar como concluída
task-cli mark done 1

# Marcar como pendente
task-cli mark todo 1
```

### Listar tarefas

```bash
# Listar todas as tarefas
task-cli list

# Listar tarefas pendentes
task-cli list todo

# Listar tarefas em progresso
task-cli list in-progress

# Listar tarefas concluídas
task-cli list done
```

## 📁 Estrutura do Projeto

```
tasktracker/
├── src/
│   ├── commands/
│   │   ├── AddCommand.ts       # Comando para adicionar tarefas
│   │   ├── ListCommand.ts      # Comando para listar tarefas
│   │   ├── MarkCommand.ts      # Comando para marcar status
│   │   └── UpdateCommand.ts    # Comando para atualizar tarefas
│   ├── services/
│   │   └── TaskService.ts      # Lógica de negócio e persistência
│   ├── types/
│   │   └── Task.ts             # Definições de tipos TypeScript
│   └── index.ts                # Ponto de entrada da aplicação
├── tasks. json                 # Arquivo de armazenamento (gerado automaticamente)
├── package.json
├── tsconfig.json
└── README. md
```

## 💾 Estrutura de Dados

Cada tarefa é armazenada com as seguintes propriedades:

```typescript
{
	id: number; // Identificador único
	title: string; // Título da tarefa
	description: string; // Descrição detalhada (opcional)
	status: "todo" | "in-progress" | "done"; // Status da tarefa
}
```

As tarefas são persistidas no arquivo `tasks.json` no diretório raiz do projeto.

## 🎯 Objetivos do Challenge

Este projeto atende aos seguintes requisitos do [roadmap.sh Task Tracker Challenge](https://roadmap.sh/projects/task-tracker):

- ✅ Aplicação CLI funcional
- ✅ Operações CRUD completas (Create, Read, Update)
- ✅ Argumentos posicionais para comandos
- ✅ Armazenamento em arquivo JSON
- ✅ Uso de módulos nativos do Node.js (fs/promises)
- ✅ Tratamento de erros e casos extremos
- ✅ Sem frameworks externos pesados

## 🛠️ Scripts Disponíveis

```bash
# Compilar TypeScript
npm run build

# Executar em modo desenvolvimento
npm run dev

# Executar aplicação compilada
npm start

# Linkar build
npm link

# Disponível pelo comando(após link)
task-cli
```

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👤 Autor

**o4tv**

- GitHub: [@o4tv](https://github.com/o4tv)

## 🙏 Agradecimentos

- [roadmap.sh](https://roadmap.sh) pelo desafio inspirador
- Comunidade Node.js e TypeScript

---

**Nota**: Este é um projeto educacional desenvolvido para praticar habilidades de programação, manipulação de sistema de arquivos e criação de aplicações CLI.
