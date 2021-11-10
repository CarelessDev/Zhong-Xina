// @ts-check

import chalk from "chalk";
console.log(
  chalk.cyan("Starting Zhong Xina ") +
    chalk.magenta(process.env.npm_package_version) +
    "✨✨"
);

import {
  ComputedLoader,
  DataLoader,
  SBotClient,
  Response,
  sLogger,
  Console,
} from "s-bot-framework";

const client = new SBotClient();

const keywords = new DataLoader("data/keywords.json", "zhong");

client.useResponse(
  new Response({
    trigger: { keywords },
    response: {
      loader: new ComputedLoader(() => "-50 Social Credit"),
      reply: true,
    },
  })
);

client.useComputedActivity({
  type: "LISTENING",
  name: `CCP Anthem ${process.env.npm_package_version}`,
});

const ctrlConsole = new Console(client);
ctrlConsole.addLoader(keywords);
client.useConsole(ctrlConsole);

sLogger.log("✨✨ Async Setup Done!", "SUCCESS");
