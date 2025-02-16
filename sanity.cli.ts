/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import { getSanityEnv } from "./src/sanity/env";

const { projectId, dataset } = getSanityEnv();

export default defineCliConfig({ api: { projectId, dataset } })
