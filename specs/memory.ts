import { iterate } from 'leakage';

/** The information required for a leak test */
export interface LeakTestOptions {
  description: string;
  shouldPass: boolean;
  fn(): void;
}

/**
 * This is a helper function to determine as to whether a procedure is expected to leak
 * @param options - The information of the test
 */
export function leakTest(options: LeakTestOptions): void {
  it(
    options.description,
    async (): Promise<void> => {
      const result = expect(
        iterate.async(
          async (): Promise<void> =>
            new Promise<void>((resolve): void => {
              options.fn();

              // return in next tick only to allow the timer to be removed
              process.nextTick(resolve);
            })
        )
      );

      return result[options.shouldPass ? 'resolves' : 'rejects'].toBeDefined();
    },
    60000 // set a long timeout for this long running test
  );
}
