// Fault-injection helper used only by the local functional suite.
import { Coordinator } from './coordinator.js';
const [database, request] = process.argv.slice(2);
const coordinator = new Coordinator(database);
await coordinator.execute(JSON.parse(request), { crashAfterApply: true });
throw new Error('Expected the injected process termination after the persisted WMS-simulator effect.');
