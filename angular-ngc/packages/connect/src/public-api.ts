/*
 * Public API Surface of connect
 */

export * from './lib/connect.module';
export { ObservableClient } from './lib/observable-client';
export { ElizaService } from './proto/eliza_connect';
export { SayRequest } from './proto/eliza_pb';
export { provideClient } from './lib/client.provider';
