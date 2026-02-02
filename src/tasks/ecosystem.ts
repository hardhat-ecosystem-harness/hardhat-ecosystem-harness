import { task } from 'hardhat/config';
import type { HardhatRuntimeEnvironment } from 'hardhat/types';

export type SectionKind = 'deploy' | 'checks' | 'tests';

export type SectionSpec =
  | string
  | {
      name: string;
      kind?: SectionKind;
      enabled?: boolean;
      fatal?: boolean;
      when?: 'local' | 'testnet' | 'mainnet' | 'any';
    };

export type EcosystemConfig = {
  // Filled out in design; this is intentionally minimal for now.
  sections: SectionSpec[];
};

task('ecosystem:run', 'Run the ecosystem harness sections')
  .addOptionalParam('deployment', 'Named deployment lane (e.g. prod/staging)')
  .setAction(async (args: { deployment?: string }, hre: HardhatRuntimeEnvironment) => {
    // Skeleton only: wire up config resolution + state + section runner next.
    const deployment = args.deployment;

    console.log(`[ecosystem] starting (deployment=${deployment ?? 'run'})`);

    // TODO:
    // - resolve branch + chain
    // - load config module
    // - load state
    // - iterate sections in order
    // - persist state frequently
    // - enforce bytecode hash / on-chain code hash hard-fail drift checks

    console.log('[ecosystem] TODO: implement section runner');
  });
